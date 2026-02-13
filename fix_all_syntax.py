import os
import re

# Fix patterns for all syntax issues
fix_patterns = [
    # Fix duplicate py- patterns (multiple occurrences)
    (r'py-12 sm:py-16 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32', 'py-12 sm:py-16 md:py-24 lg:py-32'),
    (r'py-12 sm:py-16 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32', 'py-12 sm:py-16 md:py-24 lg:py-32'),
    (r'py-10 sm:py-14 md:py-16 lg:py-10 sm:py-14 md:py-16 lg:py-24', 'py-10 sm:py-14 md:py-16 lg:py-24'),
    (r'py-10 sm:py-14 md:py-20 lg:py-10 sm:py-14 md:py-20 lg:py-28', 'py-10 sm:py-14 md:py-20 lg:py-28'),
    
    # Fix duplicate mb- patterns
    (r'mb-8 sm:mb-12 md:mb-8 sm:mb-12 md:mb-16', 'mb-8 sm:mb-12 md:mb-16'),
    (r'mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12', 'mb-6 sm:mb-8 md:mb-12'),
    (r'mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8', 'mb-5 sm:mb-6 md:mb-8'),
    
    # Fix duplicate p- patterns
    (r'p-4 sm:p-6 md:p-4 sm:p-6 md:p-8', 'p-4 sm:p-6 md:p-8'),
    (r'p-4 sm:p-5 md:p-4 sm:p-5 md:p-6', 'p-4 sm:p-5 md:p-6'),
    
    # Fix duplicate gap- patterns
    (r'gap-4 sm:p-6 md:p-4 sm:p-6 md:p-8', 'gap-4 sm:gap-6 md:gap-8'),
    (r'gap-6 sm:gap-8 lg:gap-6 sm:gap-8 lg:gap-10', 'gap-6 sm:gap-8 lg:gap-10'),
    
    # Fix duplicate rounded- patterns
    (r'rounded-lg sm:rounded-lg sm:rounded-xl', 'rounded-lg sm:rounded-xl'),
    (r'rounded-xl sm:rounded-xl sm:rounded-2xl', 'rounded-xl sm:rounded-2xl'),
    
    # Fix duplicate tracking patterns
    (r'tracking-\[0\.15em\] sm:tracking-\[0\.15em\] sm:tracking-\[0\.2em\]', 'tracking-[0.15em] sm:tracking-[0.2em]'),
    
    # Fix broken SVG fill attribute
    (r'fill="currentColor" viewBox', 'fill="currentColor" viewBox'),
    (r'w-10 h-10 fill="currentColor"', 'w-10 h-10" fill="currentColor"'),
    (r'className="w-10 h-10 fill="currentColor"', 'className="w-10 h-10" fill="currentColor"'),
    
    # Fix broken className with attributes outside quotes
    (r'className="([^"]*)" fill="currentColor"', r'className="\1" fill="currentColor"'),
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
