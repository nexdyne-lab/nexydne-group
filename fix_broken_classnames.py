import os
import re

# Fix patterns for broken className with missing closing quote
fix_patterns = [
    # Fix className with missing closing quote before >
    (r'className="([^"]*) mb-(\d+) sm:mb-(\d+) md:mb-(\d+)>', r'className="\1 mb-\2 sm:mb-\3 md:mb-\4">'),
    (r'className="([^"]*) mb-(\d+)>', r'className="\1 mb-\2">'),
    
    # Fix duplicated patterns
    (r'mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8', 'mb-5 sm:mb-6 md:mb-8'),
    (r'mb-4 sm:mb-4 sm:mb-6', 'mb-4 sm:mb-6'),
    (r'tracking-\[0\.15em\] sm:tracking-\[0\.15em\] sm:tracking-\[0\.2em\]', 'tracking-[0.15em] sm:tracking-[0.2em]'),
    
    # Fix broken img tags
    (r'<img className="([^"]*) src=\{([^}]+)\} alt=\{([^}]+)\} />', r'<img className="\1" src={\2} alt={\3} />'),
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
