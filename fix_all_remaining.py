import os
import re

# Fix patterns for all broken syntax
fix_patterns = [
    # Fix broken className with fill inside quotes (SVG)
    (r'className="(w-\d+ h-\d+) fill="([^"]*)" (viewBox="[^"]*")', r'className="\1" fill="\2" \3'),
    (r'className="(w-\d+ h-\d+) fill="([^"]*)" (stroke="[^"]*") (viewBox="[^"]*")', r'className="\1" fill="\2" \3 \4'),
    
    # Fix broken className with align inside quotes
    (r'className="([^"]*) align="([^"]*)">', r'className="\1" align="\2">'),
    
    # Fix broken className with src inside quotes (img)
    (r'className="([^"]*) src=\{([^}]+)\} alt=\{([^}]+)\}"', r'className="\1" src={\2} alt={\3}'),
    (r'<img className="([^"]*) src=\{([^}]+)\} alt=\{([^}]+)\} />', r'<img className="\1" src={\2} alt={\3} />'),
    
    # Fix broken className with variant inside quotes
    (r'className="([^"]*) variant="([^"]*)"', r'className="\1" variant="\2"'),
    
    # Fix broken className with size inside quotes
    (r'className="([^"]*) size="([^"]*)"', r'className="\1" size="\2"'),
    
    # Fix duplicated patterns
    (r'p-8 md:p-6 sm:p-8 md:p-12', 'p-6 sm:p-8 md:p-12'),
    (r'gap-6 sm:gap-8 md:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10 lg:gap-6 sm:p-8 md:p-6 sm:p-8 md:p-12', 'gap-6 sm:gap-8 lg:gap-12'),
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
