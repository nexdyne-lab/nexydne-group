import os
import re

# Fix patterns for all broken syntax
fix_patterns = [
    # Fix broken img tags where src is inside className
    (r'className="([^"]*) src=\{([^}]+)\} alt=\{([^}]+)\}"', r'className="\1" src={\2} alt={\3}'),
    (r'<img className="([^"]*) src=\{([^}]+)\} alt=\{([^}]+)\} />', r'<img className="\1" src={\2} alt={\3} />'),
    
    # Fix duplicated py patterns
    (r'py-12 sm:py-16 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32', 'py-12 sm:py-16 md:py-24 lg:py-32'),
    (r'py-12 sm:py-16 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32', 'py-12 sm:py-16 md:py-24 lg:py-32'),
    
    # Fix duplicated mb patterns
    (r'mb-8 sm:mb-12 md:mb-8 sm:mb-12 md:mb-16', 'mb-8 sm:mb-12 md:mb-16'),
    (r'mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12', 'mb-6 sm:mb-8 md:mb-12'),
    (r'mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8', 'mb-5 sm:mb-6 md:mb-8'),
    (r'mb-4 sm:mb-4 sm:mb-6', 'mb-4 sm:mb-6'),
    
    # Fix duplicated p patterns
    (r'p-4 sm:p-6 md:p-4 sm:p-6 md:p-8', 'p-4 sm:p-6 md:p-8'),
    (r'p-4 sm:p-5 md:p-4 sm:p-5 md:p-6', 'p-4 sm:p-5 md:p-6'),
    
    # Fix duplicated gap patterns
    (r'gap-6 sm:gap-8 lg:gap-6 sm:gap-8 lg:gap-10', 'gap-6 sm:gap-8 lg:gap-10'),
    (r'gap-8 sm:gap-12 lg:gap-8 sm:gap-12 lg:gap-16', 'gap-8 sm:gap-12 lg:gap-16'),
    
    # Fix duplicated rounded patterns
    (r'rounded-lg sm:rounded-lg sm:rounded-xl', 'rounded-lg sm:rounded-xl'),
    (r'rounded-xl sm:rounded-xl sm:rounded-2xl', 'rounded-xl sm:rounded-2xl'),
    
    # Fix duplicated tracking patterns
    (r'tracking-\[0\.15em\] sm:tracking-\[0\.15em\] sm:tracking-\[0\.2em\]', 'tracking-[0.15em] sm:tracking-[0.2em]'),
    
    # Fix broken className with gap and p mixed (invalid pattern)
    (r'gap-6 sm:gap-8 md:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10 lg:gap-6 sm:p-8 md:p-6 sm:p-8 md:p-12', 'gap-6 sm:gap-8 lg:gap-12'),
    (r'gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10 lg:gap-6 sm:p-8 md:p-6 sm:p-8 md:p-12', 'gap-6 sm:gap-8 lg:gap-12'),
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
