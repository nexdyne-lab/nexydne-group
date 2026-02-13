import os
import re

# Fix patterns for duplicate attributes
fix_patterns = [
    # Fix duplicate mb-5 sm:mb-6 md:mb patterns
    (r'mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8', 'mb-5 sm:mb-6 md:mb-8'),
    (r'mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-12', 'mb-5 sm:mb-6 md:mb-12'),
    (r'mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-10', 'mb-5 sm:mb-6 md:mb-10'),
    
    # Fix duplicate tracking patterns
    (r'tracking-\[0\.15em\] sm:tracking-\[0\.15em\] sm:tracking-\[0\.2em\]', 'tracking-[0.15em] sm:tracking-[0.2em]'),
    
    # Fix duplicate mb-4 sm:mb patterns
    (r'mb-4 sm:mb-4 sm:mb-6', 'mb-4 sm:mb-6'),
    
    # Fix broken className with attribute outside quotes
    (r'" mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8>', ' mb-5 sm:mb-6 md:mb-8">'),
    (r'max-w-3xl" mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8>', 'max-w-3xl mb-5 sm:mb-6 md:mb-8">'),
    
    # Fix any remaining broken patterns
    (r'className="([^"]*)" ([a-z])', r'className="\1 \2'),
]

pages_dir = '/home/ubuntu/newco-website/client/src/pages'

def process_file(filepath):
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

# Process all page files
processed = 0
for root, dirs, files in os.walk(pages_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            if process_file(filepath):
                processed += 1
                print(f"Fixed: {filepath}")

print(f"\nTotal files fixed: {processed}")
