import os
import re

# Common responsive patterns to apply
patterns = [
    # Hero sections
    (r'min-h-\[85vh\]', 'min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh]'),
    (r'min-h-\[80vh\]', 'min-h-[65vh] sm:min-h-[70vh] md:min-h-[80vh]'),
    (r'min-h-\[90vh\]', 'min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh]'),
    
    # Section padding
    (r'py-24 md:py-32(?! lg:)', 'py-12 sm:py-16 md:py-24 lg:py-32'),
    (r'py-20 md:py-28(?! lg:)', 'py-10 sm:py-14 md:py-20 lg:py-28'),
    (r'py-16 md:py-24(?! lg:)', 'py-10 sm:py-14 md:py-16 lg:py-24'),
    
    # Container padding
    (r'container px-4 md:px-12(?! relative)', 'container px-4 sm:px-6 md:px-12'),
    (r'"container px-4 md:px-12"', '"container px-4 sm:px-6 md:px-12"'),
    
    # Text sizes - headings
    (r'text-5xl md:text-7xl lg:text-8xl(?! xl:)', 'text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl'),
    (r'text-4xl md:text-5xl lg:text-6xl(?! xl:)', 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'),
    (r'text-4xl md:text-5xl(?! lg:| xl:)', 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'),
    (r'text-3xl md:text-4xl(?! lg:| xl:)', 'text-xl sm:text-2xl md:text-3xl lg:text-4xl'),
    
    # Text sizes - body
    (r'text-xl md:text-2xl(?! lg:)', 'text-base sm:text-lg md:text-xl lg:text-2xl'),
    (r'text-lg md:text-xl(?! lg:)', 'text-sm sm:text-base md:text-lg lg:text-xl'),
    (r'text-xl(?! md:| sm:| lg:| xl:| font-| leading-)', 'text-base sm:text-lg md:text-xl'),
    
    # Tracking
    (r'tracking-\[0\.2em\](?! sm:)', 'tracking-[0.15em] sm:tracking-[0.2em]'),
    (r'tracking-\[0\.3em\](?! sm:)', 'tracking-[0.2em] sm:tracking-[0.3em]'),
    
    # Label text
    (r'text-xs font-bold uppercase(?! tracking-)', 'text-[10px] sm:text-xs font-bold uppercase'),
    
    # Margins and spacing
    (r'mb-16(?! sm:| md:| lg:)', 'mb-8 sm:mb-12 md:mb-16'),
    (r'mb-12(?! sm:| md:| lg:)', 'mb-6 sm:mb-8 md:mb-12'),
    (r'mb-8(?! sm:| md:| lg:| xl:)', 'mb-5 sm:mb-6 md:mb-8'),
    (r'mb-6 block(?! sm:)', 'mb-4 sm:mb-6 block'),
    (r'gap-16(?! sm:| md:| lg:)', 'gap-8 sm:gap-12 lg:gap-16'),
    (r'gap-24(?! sm:| md:| lg:)', 'gap-8 sm:gap-12 lg:gap-24'),
    (r'gap-10(?! sm:| md:| lg:)', 'gap-6 sm:gap-8 lg:gap-10'),
    
    # Grid columns
    (r'grid md:grid-cols-3(?! lg:| sm:)', 'grid sm:grid-cols-2 lg:grid-cols-3'),
    (r'grid md:grid-cols-2(?! lg:| sm:)', 'grid md:grid-cols-2'),
    
    # Button padding
    (r'px-8 py-6(?! sm:| md:)', 'px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6'),
    (r'px-6 py-4(?! sm:| md:)', 'px-4 sm:px-5 md:px-6 py-3 sm:py-4'),
    
    # Rounded corners
    (r'rounded-2xl(?! sm:| md:)', 'rounded-xl sm:rounded-2xl'),
    (r'rounded-xl(?! sm:| md:| lg:)', 'rounded-lg sm:rounded-xl'),
    
    # Shadows
    (r'shadow-2xl(?! sm:| md:)', 'shadow-xl sm:shadow-2xl'),
    
    # Aspect ratios and heights
    (r'aspect-\[4/3\] mb-6(?! sm:)', 'aspect-[4/3] mb-4 sm:mb-6'),
    
    # Icon sizes
    (r'w-5 h-5(?! sm:| md:)', 'w-4 h-4 sm:w-5 sm:h-5'),
    (r'w-4 h-4(?! sm:| md:)', 'w-3 h-3 sm:w-4 sm:h-4'),
    
    # Padding
    (r'p-8(?! sm:| md:)', 'p-4 sm:p-6 md:p-8'),
    (r'p-6(?! sm:| md:)', 'p-4 sm:p-5 md:p-6'),
    
    # pt (padding top)
    (r'pt-20(?! sm:| md:)', 'pt-16 sm:pt-20'),
    
    # flex gap
    (r'flex flex-col sm:flex-row gap-4(?! sm:)', 'flex flex-col sm:flex-row gap-3 sm:gap-4'),
    
    # Arrow margin
    (r'ml-2 w-5 h-5(?! sm:)', 'ml-2 w-4 h-4 sm:w-5 sm:h-5'),
    (r'ml-2 w-4 h-4(?! sm:)', 'ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4'),
]

# Files to process
capabilities_dir = '/home/ubuntu/newco-website/client/src/pages/capabilities'

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    for pattern, replacement in patterns:
        content = re.sub(pattern, replacement, content)
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        return True
    return False

# Process all capability files
processed = 0
for root, dirs, files in os.walk(capabilities_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            if process_file(filepath):
                processed += 1
                print(f"Optimized: {filepath}")

print(f"\nTotal files optimized: {processed}")
