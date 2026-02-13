import os
import re

# Files with errors
error_files = [
    "client/src/pages/CaseStudyAccountingAudit.tsx",
    "client/src/pages/CaseStudyB2BDigitalOrdering.tsx",
    "client/src/pages/CaseStudyBankProcess.tsx",
    "client/src/pages/CaseStudyConsultingKnowledge.tsx",
    "client/src/pages/CaseStudyExecutiveDashboards.tsx",
    "client/src/pages/CaseStudyHealthcareAnalytics.tsx",
    "client/src/pages/CaseStudyHealthcarePatient.tsx",
    "client/src/pages/CaseStudyHospitalWorkflow.tsx",
    "client/src/pages/CaseStudyInsuranceClaims.tsx",
    "client/src/pages/CaseStudyLawFirm.tsx",
    "client/src/pages/CaseStudyLegalDocIntel.tsx",
    "client/src/pages/CaseStudyRetailEcommerce.tsx",
    "client/src/pages/CaseStudyTelehealthScaling.tsx",
    "client/src/pages/CaseStudyTrainingSubscription.tsx",
    "client/src/pages/CaseStudyVarianceAnalysis.tsx",
    "client/src/pages/CaseStudyWealthOnboarding.tsx",
    "client/src/pages/ComponentShowcase.tsx",
    "client/src/pages/InsuranceCaseStudy.tsx",
    "client/src/pages/RetailCaseStudy.tsx",
    "client/src/pages/Team.tsx",
    "client/src/pages/TechnologyCaseStudy.tsx",
    "client/src/pages/admin/LeadsDashboard.tsx",
    "client/src/pages/insights/EcommerceEconomics.tsx",
    "client/src/pages/services/Ecommerce.tsx",
    "client/src/pages/solutions/ContentServicePlatform.tsx",
    "client/src/pages/solutions/ConversionOptimization.tsx",
    "client/src/pages/solutions/CustomerDataPlatform.tsx",
    "client/src/pages/solutions/CustomerInsights.tsx",
    "client/src/pages/solutions/CustomerJourneyMap.tsx",
    "client/src/pages/solutions/CustomerPortal.tsx",
    "client/src/pages/solutions/DataGovernance.tsx",
    "client/src/pages/solutions/DataPlatform.tsx",
    "client/src/pages/solutions/DataStrategy.tsx",
    "client/src/pages/solutions/DataTraining.tsx",
    "client/src/pages/solutions/DataVisualization.tsx",
    "client/src/pages/solutions/EcommercePlatforms.tsx",
    "client/src/pages/solutions/MachineLearning.tsx",
    "client/src/pages/solutions/business-growth/EcommercePlatforms.tsx",
]

# Patterns that are causing issues - fix duplicates
fix_patterns = [
    # Fix triple/double duplicated patterns
    (r'gap-6 sm:gap-8 md:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10 lg:gap-6 sm:p-8 md:p-6 sm:p-8 md:p-12', 'gap-6 sm:gap-8 lg:gap-12'),
    (r'gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10 lg:gap-6 sm:p-8 md:p-6 sm:p-8 md:p-12', 'gap-6 sm:gap-8 lg:gap-12'),
    (r'p-5 sm:p-7 md:p-5 sm:p-7 md:p-10', 'p-5 sm:p-7 md:p-10'),
    (r'p-6 sm:p-8 md:p-6 sm:p-8 md:p-12', 'p-6 sm:p-8 md:p-12'),
    
    # Fix duplicated py patterns
    (r'py-12 sm:py-16 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32', 'py-12 sm:py-16 md:py-24 lg:py-32'),
    (r'py-12 sm:py-16 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32', 'py-12 sm:py-16 md:py-24 lg:py-32'),
    (r'py-10 sm:py-14 md:py-16 lg:py-10 sm:py-14 md:py-16 lg:py-24', 'py-10 sm:py-14 md:py-16 lg:py-24'),
    (r'py-10 sm:py-14 md:py-20 lg:py-10 sm:py-14 md:py-20 lg:py-28', 'py-10 sm:py-14 md:py-20 lg:py-28'),
    
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
    
    # Fix broken className with attributes outside quotes - unterminated string
    (r'className="([^"]*)" mb-(\d+) sm:mb-(\d+) md:mb-(\d+)>', r'className="\1 mb-\2 sm:mb-\3 md:mb-\4">'),
    
    # Fix specific broken pattern with gap and p mixed
    (r'gap-(\d+) sm:p-(\d+) md:p-(\d+)', r'gap-\1'),
]

base_path = '/home/ubuntu/newco-website'

def fix_file(filepath):
    full_path = os.path.join(base_path, filepath)
    try:
        with open(full_path, 'r') as f:
            content = f.read()
        
        original = content
        for pattern, replacement in fix_patterns:
            content = re.sub(pattern, replacement, content)
        
        if content != original:
            with open(full_path, 'w') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

fixed = 0
for filepath in error_files:
    if fix_file(filepath):
        fixed += 1
        print(f"Fixed: {filepath}")

print(f"\nTotal files fixed: {fixed}")
