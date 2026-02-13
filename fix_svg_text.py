import os
import re

# Fix patterns for broken SVG className with text-* and fill
fix_patterns = [
    # Fix broken SVG className with text-* fill="none" stroke
    (r'className="(w-\d+ h-\d+ text-[^"]*) fill="([^"]*)" (stroke="[^"]*") (viewBox="[^"]*")', r'className="\1" fill="\2" \3 \4'),
    (r'className="(w-\d+ h-\d+) fill="([^"]*)" (stroke="[^"]*") (viewBox="[^"]*")', r'className="\1" fill="\2" \3 \4'),
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
