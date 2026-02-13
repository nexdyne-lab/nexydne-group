import os
import re

# Fix patterns for broken className with style inside
fix_patterns = [
    # Fix broken className with style inside quotes
    (r'className="([^"]*) style=\{\{([^}]*)\}\}"', r'className="\1" style={{\2}}'),
    (r"className=\"([^\"]*) style=\{\{ ([^}]*) \}\}>", r'className="\1" style={{ \2 }}>'),
]

base_path = '/home/ubuntu/newco-website/client/src/pages'

def process_file(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
        
        original = content
        for pattern, replacement in fix_patterns:
            content = re.sub(pattern, replacement, content)
        
        if content != original:
            with open(filepath, 'w') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

# Process all tsx files recursively
fixed = 0
for root, dirs, files in os.walk(base_path):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            if process_file(filepath):
                fixed += 1
                print(f"Fixed: {filepath}")

print(f"\nTotal files fixed: {fixed}")
