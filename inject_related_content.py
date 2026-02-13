import os
import re

PROJECT_ROOT = "/home/ubuntu/newco-website/client/src/pages"
TARGET_DIRS = ["capabilities", "solutions"]

# Heuristics for selecting related content
def get_related_items_var(filename, content):
    lower_content = content.lower()
    lower_filename = filename.lower()
    
    if "data" in lower_filename or "analytics" in lower_filename or "data" in lower_content:
        return "dataRelatedItems"
    elif "ai" in lower_filename or "intelligence" in lower_filename or "learning" in lower_filename or "bot" in lower_filename:
        return "aiRelatedItems"
    elif "digital" in lower_filename or "app" in lower_filename or "web" in lower_filename or "commerce" in lower_filename:
        return "digitalRelatedItems"
    else:
        return "strategyRelatedItems"

def process_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()
    
    if "RelatedContent" in content:
        print(f"Skipping {filepath} - already has RelatedContent")
        return

    # 1. Add Imports
    related_items_var = get_related_items_var(os.path.basename(filepath), content)
    
    import_statement = f'import {{ RelatedContent }} from "@/components/RelatedContent";\nimport {{ {related_items_var} }} from "@/data/related-content";'
    
    # Insert imports after the last import
    last_import_match = None
    for match in re.finditer(r'^import .*?;', content, re.MULTILINE | re.DOTALL):
        last_import_match = match
    
    if last_import_match:
        end_pos = last_import_match.end()
        content = content[:end_pos] + "\n" + import_statement + content[end_pos:]
    else:
        # Fallback if no imports found (unlikely)
        content = import_statement + "\n" + content

    # 2. Insert Component before Footer
    # Look for <Footer /> or <Footer/>
    footer_pattern = re.compile(r'(<Footer\s*/?>)')
    
    if footer_pattern.search(content):
        replacement = f'<RelatedContent items={{{related_items_var}}} />\n      \\1'
        content = footer_pattern.sub(replacement, content)
        
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Updated {filepath} with {related_items_var}")
    else:
        print(f"Skipping {filepath} - no Footer found")

def main():
    for target_dir in TARGET_DIRS:
        dir_path = os.path.join(PROJECT_ROOT, target_dir)
        if not os.path.exists(dir_path):
            print(f"Directory not found: {dir_path}")
            continue
            
        for root, dirs, files in os.walk(dir_path):
            for file in files:
                if file.endswith(".tsx"):
                    process_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
