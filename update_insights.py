#!/usr/bin/env python3
"""
Script to update insight pages to use the DZ10 InsightArticleLayout component.
This extracts metadata from existing pages and rewrites them with the new layout.
"""

import os
import re
import json

# List of insight files that have already been updated
ALREADY_UPDATED = [
    'CorporateVentureAdvantage.tsx',
    'FromMVPToScale.tsx', 
    'HiringForBuilders.tsx',
    'CeoGuideDataModernization.tsx',
    'BuildingDataCulture.tsx',
    'DataLakeToValueStream.tsx',
    'AIAgentsTransformOperations.tsx',
]

# Mapping of categories to icons
CATEGORY_ICONS = {
    'Strategy': '📊',
    'Guide': '📘',
    'Article': '📄',
    'Talent': '👥',
    'Culture': '🎬',
    'Technology': '📄',
    'Engineering': '📄',
    'AI & Machine Learning': '🤖',
    'Marketing': '📈',
    'Operations': '⚙️',
    'Finance': '💰',
    'M&A': '🤝',
    'Sales': '📞',
    'Customer Experience': '💬',
    'Sustainability': '🌱',
    'Digital': '💻',
    'Data': '📊',
    'Pricing': '💲',
    'Growth': '📈',
    'Innovation': '💡',
    'Leadership': '👔',
    'Automation': '🤖',
    'E-commerce': '🛒',
    'Supply Chain': '📦',
}

# Default related insights
DEFAULT_RELATED = [
    {
        'category': 'Strategy',
        'categoryIcon': '📊',
        'title': "The CEO's Guide to Data Modernization",
        'description': 'Why 70% of transformations fail and how to be in the 30% that succeed.',
        'readTime': '5 min read',
        'image': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
        'link': '/insights/ceo-guide-data-modernization'
    },
    {
        'category': 'Culture',
        'categoryIcon': '🎬',
        'title': 'Building a Data-First Culture',
        'description': "NexDyne's Chief Data Officer discusses the human side of digital change.",
        'readTime': '12 min watch',
        'image': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
        'link': '/insights/building-data-culture'
    },
    {
        'category': 'Article',
        'categoryIcon': '📄',
        'title': 'The Corporate Venture Advantage',
        'description': 'Why established assets combined with startup speed create an unfair market advantage.',
        'readTime': '6 min read',
        'image': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
        'link': '/insights/corporate-venture-advantage'
    }
]

def extract_metadata(content):
    """Extract metadata from existing insight page."""
    metadata = {
        'category': 'Article',
        'title': '',
        'subtitle': '',
        'readTime': '5 min read',
        'publishDate': 'December 2024',
        'heroImage': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
        'authorName': 'NexDyne Team',
        'authorRole': 'NexDyne',
    }
    
    # Extract category
    cat_match = re.search(r'<span[^>]*>\s*([A-Za-z &]+)\s*</span>\s*(?:<span|<div)', content)
    if cat_match:
        metadata['category'] = cat_match.group(1).strip()
    
    # Try to find category from badge
    badge_match = re.search(r'bg-[^>]*>\s*([A-Za-z &]+)\s*</span>', content)
    if badge_match:
        cat = badge_match.group(1).strip()
        if cat and len(cat) < 30:
            metadata['category'] = cat
    
    # Extract title from h1
    title_match = re.search(r'<h1[^>]*>([^<]+(?:<[^/][^>]*>[^<]*</[^>]+>)?[^<]*)</h1>', content, re.DOTALL)
    if title_match:
        title = re.sub(r'<[^>]+>', '', title_match.group(1))
        title = title.replace('\n', ' ').strip()
        metadata['title'] = title
    
    # Extract subtitle from first paragraph after h1 or from lead text
    subtitle_match = re.search(r'<p[^>]*(?:lead|text-xl|text-2xl)[^>]*>([^<]+)</p>', content)
    if subtitle_match:
        metadata['subtitle'] = subtitle_match.group(1).strip()
    else:
        # Try to get first paragraph in hero
        hero_p_match = re.search(r'<p[^>]*text-(?:slate|gray)-(?:300|400)[^>]*>([^<]+)</p>', content)
        if hero_p_match:
            metadata['subtitle'] = hero_p_match.group(1).strip()
    
    # Extract read time
    time_match = re.search(r'(\d+)\s*min\s*(?:read|watch)', content)
    if time_match:
        metadata['readTime'] = f"{time_match.group(1)} min read"
    
    # Extract date
    date_match = re.search(r'(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}', content)
    if date_match:
        metadata['publishDate'] = date_match.group(0)
    
    # Extract hero image
    img_match = re.search(r'(?:bg-\[url\(\'|src=")([^\'"\)]+unsplash[^\'"\)]+)', content)
    if img_match:
        metadata['heroImage'] = img_match.group(1)
    
    # Extract author
    author_match = re.search(r'(?:font-bold[^>]*>|Author[^>]*>)\s*([A-Z][a-z]+ [A-Z][a-z]+)', content)
    if author_match:
        metadata['authorName'] = author_match.group(1)
    
    # Extract author role
    role_match = re.search(r'(?:text-sm[^>]*text-(?:\[#00d4ff\]|slate|gray)[^>]*>|CDO|CTO|CEO|Head of|Principal|Director)\s*([^<]+)', content)
    if role_match:
        role = role_match.group(1).strip()
        if role and len(role) < 50:
            metadata['authorRole'] = role
    
    return metadata

def extract_article_content(content):
    """Extract the main article content (prose section)."""
    # Find the prose section
    prose_match = re.search(r'<div[^>]*prose[^>]*>(.*?)</div>\s*(?:</div>|<div[^>]*(?:border|mt-16))', content, re.DOTALL)
    if prose_match:
        prose_content = prose_match.group(1)
        # Clean up the content
        prose_content = re.sub(r'className="[^"]*"', '', prose_content)
        prose_content = re.sub(r'class="[^"]*"', '', prose_content)
        return prose_content.strip()
    return ''

def get_category_icon(category):
    """Get the icon for a category."""
    for key, icon in CATEGORY_ICONS.items():
        if key.lower() in category.lower():
            return icon
    return '📄'

def generate_new_component(filename, metadata, article_content):
    """Generate the new component using InsightArticleLayout."""
    component_name = filename.replace('.tsx', '')
    
    # Clean up article content for JSX
    article_content = article_content.replace('{', '&#123;').replace('}', '&#125;')
    
    # Convert callout boxes to InsightCallout
    article_content = re.sub(
        r'<div[^>]*(?:bg-blue-50|bg-slate-50|border-l-4)[^>]*>\s*(?:<p[^>]*font-(?:bold|semibold)[^>]*>([^<]+)</p>)?\s*<p[^>]*>([^<]+)</p>\s*</div>',
        lambda m: f'<InsightCallout title="{m.group(1) or "Key Insight"}">\n        <p>{m.group(2)}</p>\n      </InsightCallout>',
        article_content
    )
    
    category_icon = get_category_icon(metadata['category'])
    
    related_json = json.dumps(DEFAULT_RELATED, indent=6).replace('"', "'")
    
    title_escaped = metadata['title'].replace('"', '\\"')
    subtitle_escaped = metadata['subtitle'].replace('"', '\\"')
    
    template = f'''import React from 'react';
import InsightArticleLayout, {{ InsightCallout }} from "@/components/InsightArticleLayout";

export default function {component_name}() {{
  const relatedInsights = {related_json};

  return (
    <InsightArticleLayout
      category="{metadata['category']}"
      categoryIcon="{category_icon}"
      title="{title_escaped}"
      subtitle="{subtitle_escaped}"
      readTime="{metadata['readTime']}"
      publishDate="{metadata['publishDate']}"
      heroImage="{metadata['heroImage']}"
      heroImageAlt="{title_escaped}"
      authorName="{metadata['authorName']}"
      authorRole="{metadata['authorRole']}"
      relatedInsights={{relatedInsights}}
    >
      {article_content}
    </InsightArticleLayout>
  );
}}
'''
    return template

def process_file(filepath):
    """Process a single insight file."""
    filename = os.path.basename(filepath)
    
    if filename in ALREADY_UPDATED:
        print(f"Skipping {filename} (already updated)")
        return False
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Skip if already using InsightArticleLayout
    if 'InsightArticleLayout' in content:
        print(f"Skipping {filename} (already uses InsightArticleLayout)")
        return False
    
    metadata = extract_metadata(content)
    article_content = extract_article_content(content)
    
    if not metadata['title']:
        print(f"Warning: Could not extract title from {filename}")
        return False
    
    if not article_content:
        print(f"Warning: Could not extract article content from {filename}")
        # Still proceed with empty content
    
    new_content = generate_new_component(filename, metadata, article_content)
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    
    print(f"Updated {filename}")
    return True

def main():
    insights_dir = '/home/ubuntu/newco-website/client/src/pages/insights'
    
    updated = 0
    skipped = 0
    
    for filename in os.listdir(insights_dir):
        if not filename.endswith('.tsx'):
            continue
        
        filepath = os.path.join(insights_dir, filename)
        if process_file(filepath):
            updated += 1
        else:
            skipped += 1
    
    print(f"\nDone! Updated {updated} files, skipped {skipped} files.")

if __name__ == '__main__':
    main()
