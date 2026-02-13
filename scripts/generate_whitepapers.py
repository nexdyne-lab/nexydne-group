#!/usr/bin/env python3
"""Generate PDF whitepapers for NexDyne website."""

from fpdf import FPDF
import os

class WhitepaperPDF(FPDF):
    def __init__(self):
        super().__init__()
        self.set_auto_page_break(auto=True, margin=25)
        
    def header(self):
        # Logo area
        self.set_font('Helvetica', 'B', 12)
        self.set_text_color(5, 28, 44)  # #051C2C
        self.cell(0, 10, 'NEXDYNE TECHNOLOGIES', 0, 1, 'L')
        self.ln(5)
        
    def footer(self):
        self.set_y(-20)
        self.set_font('Helvetica', '', 9)
        self.set_text_color(128, 128, 128)
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')
        self.ln(5)
        self.cell(0, 5, 'www.nexdyne.com | Confidential', 0, 0, 'C')
        
    def chapter_title(self, title):
        self.set_font('Helvetica', 'B', 16)
        self.set_text_color(0, 119, 181)  # #0077B5
        self.cell(0, 12, title, 0, 1, 'L')
        self.ln(4)
        
    def chapter_body(self, text):
        self.set_font('Helvetica', '', 11)
        self.set_text_color(51, 51, 51)
        self.multi_cell(0, 6, text)
        self.ln(4)
        
    def bullet_point(self, text):
        self.set_font('Helvetica', '', 11)
        self.set_text_color(51, 51, 51)
        self.cell(8, 6, chr(149), 0, 0)  # bullet character
        self.multi_cell(0, 6, text)
        
    def section_header(self, text):
        self.set_font('Helvetica', 'B', 13)
        self.set_text_color(5, 28, 44)
        self.cell(0, 10, text, 0, 1, 'L')
        self.ln(2)

def create_digital_transformation_guide():
    pdf = WhitepaperPDF()
    pdf.add_page()
    
    # Cover page
    pdf.set_font('Helvetica', 'B', 28)
    pdf.set_text_color(5, 28, 44)
    pdf.ln(40)
    pdf.multi_cell(0, 12, 'Digital Transformation\nGuide for Mid-Market\nCompanies')
    pdf.ln(20)
    pdf.set_font('Helvetica', '', 14)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 8, 'A Strategic Framework for Sustainable Growth', 0, 1, 'L')
    pdf.ln(30)
    pdf.set_font('Helvetica', '', 11)
    pdf.cell(0, 6, 'NexDyne Technologies', 0, 1, 'L')
    pdf.cell(0, 6, '2024 Edition', 0, 1, 'L')
    
    # Executive Summary
    pdf.add_page()
    pdf.chapter_title('Executive Summary')
    pdf.chapter_body(
        'Digital transformation is no longer optional for mid-market companies seeking sustainable growth. '
        'This guide provides a comprehensive framework for planning, executing, and measuring digital '
        'transformation initiatives that deliver measurable business outcomes.\n\n'
        'Mid-market companies face unique challenges: they must compete with larger enterprises while '
        'operating with more constrained resources. However, their agility and focused operations can '
        'become significant advantages when transformation is approached strategically.'
    )
    
    # Chapter 1
    pdf.chapter_title('Chapter 1: Understanding Digital Transformation')
    pdf.chapter_body(
        'Digital transformation encompasses the integration of digital technology into all areas of '
        'business, fundamentally changing how you operate and deliver value to customers. For mid-market '
        'companies, this means:\n'
    )
    pdf.bullet_point('Automating manual processes to improve efficiency and reduce errors')
    pdf.bullet_point('Leveraging data analytics to make informed decisions')
    pdf.bullet_point('Enhancing customer experiences through digital channels')
    pdf.bullet_point('Building scalable infrastructure that grows with your business')
    pdf.bullet_point('Creating new revenue streams through digital products and services')
    pdf.ln(8)
    
    pdf.section_header('The Business Case for Transformation')
    pdf.chapter_body(
        'Companies that successfully execute digital transformation initiatives typically see:\n\n'
        '- 20-30% improvement in operational efficiency\n'
        '- 15-25% reduction in operational costs\n'
        '- 10-20% increase in customer satisfaction scores\n'
        '- Faster time-to-market for new products and services\n'
        '- Improved employee productivity and satisfaction'
    )
    
    # Chapter 2
    pdf.add_page()
    pdf.chapter_title('Chapter 2: Assessing Your Current State')
    pdf.chapter_body(
        'Before embarking on transformation, you need a clear understanding of your current capabilities, '
        'pain points, and opportunities. This assessment should cover:'
    )
    
    pdf.section_header('Technology Infrastructure')
    pdf.chapter_body(
        'Evaluate your current systems, identifying legacy applications that create bottlenecks, '
        'integration gaps between systems, and areas where manual workarounds have become standard practice.'
    )
    
    pdf.section_header('Process Maturity')
    pdf.chapter_body(
        'Map your core business processes to identify inefficiencies, redundancies, and opportunities '
        'for automation. Focus on processes that directly impact customer experience and operational costs.'
    )
    
    pdf.section_header('Data Capabilities')
    pdf.chapter_body(
        'Assess your ability to collect, store, analyze, and act on data. Many mid-market companies '
        'have valuable data trapped in silos that could drive significant business value if properly unified.'
    )
    
    pdf.section_header('Organizational Readiness')
    pdf.chapter_body(
        'Digital transformation requires cultural change. Evaluate your teams capacity for change, '
        'identify potential champions and resistors, and assess skill gaps that need to be addressed.'
    )
    
    # Chapter 3
    pdf.add_page()
    pdf.chapter_title('Chapter 3: Building Your Transformation Roadmap')
    pdf.chapter_body(
        'A successful transformation roadmap balances quick wins with long-term strategic initiatives. '
        'We recommend a phased approach:'
    )
    
    pdf.section_header('Phase 1: Foundation (Months 1-6)')
    pdf.bullet_point('Establish data infrastructure and governance')
    pdf.bullet_point('Implement core automation for highest-impact processes')
    pdf.bullet_point('Build cross-functional transformation team')
    pdf.bullet_point('Define KPIs and measurement framework')
    pdf.ln(4)
    
    pdf.section_header('Phase 2: Acceleration (Months 6-12)')
    pdf.bullet_point('Scale successful automation initiatives')
    pdf.bullet_point('Implement advanced analytics capabilities')
    pdf.bullet_point('Enhance customer-facing digital experiences')
    pdf.bullet_point('Develop internal digital skills')
    pdf.ln(4)
    
    pdf.section_header('Phase 3: Optimization (Months 12-18)')
    pdf.bullet_point('Introduce AI and machine learning capabilities')
    pdf.bullet_point('Create predictive analytics models')
    pdf.bullet_point('Optimize based on performance data')
    pdf.bullet_point('Explore new digital business models')
    
    # Chapter 4
    pdf.add_page()
    pdf.chapter_title('Chapter 4: Key Success Factors')
    
    pdf.section_header('Executive Sponsorship')
    pdf.chapter_body(
        'Transformation initiatives require visible, active support from senior leadership. The CEO or '
        'a C-level executive should champion the initiative and remove organizational barriers.'
    )
    
    pdf.section_header('Clear Governance')
    pdf.chapter_body(
        'Establish a governance structure that enables rapid decision-making while maintaining '
        'appropriate oversight. Define clear roles, responsibilities, and escalation paths.'
    )
    
    pdf.section_header('Change Management')
    pdf.chapter_body(
        'Invest in change management from day one. Communicate the vision, involve employees in '
        'the transformation process, and celebrate successes along the way.'
    )
    
    pdf.section_header('Agile Execution')
    pdf.chapter_body(
        'Adopt agile methodologies that allow for rapid iteration and learning. Start with pilot '
        'projects, learn from results, and scale what works.'
    )
    
    # Conclusion
    pdf.add_page()
    pdf.chapter_title('Conclusion: Taking the First Step')
    pdf.chapter_body(
        'Digital transformation is a journey, not a destination. The key is to start with a clear '
        'vision, build momentum through quick wins, and maintain focus on business outcomes rather '
        'than technology for its own sake.\n\n'
        'Mid-market companies that embrace transformation position themselves for sustainable growth, '
        'improved competitiveness, and the ability to attract and retain top talent.\n\n'
        'NexDyne Technologies partners with mid-market companies to plan and execute transformation '
        'initiatives that deliver measurable results. Contact us to discuss how we can help you '
        'accelerate your digital transformation journey.'
    )
    
    pdf.ln(20)
    pdf.set_font('Helvetica', 'B', 12)
    pdf.set_text_color(0, 119, 181)
    pdf.cell(0, 8, 'Ready to start your transformation?', 0, 1, 'L')
    pdf.set_font('Helvetica', '', 11)
    pdf.set_text_color(51, 51, 51)
    pdf.cell(0, 6, 'Schedule a consultation at www.nexdyne.com/contact', 0, 1, 'L')
    
    return pdf

def create_ai_implementation_roadmap():
    pdf = WhitepaperPDF()
    pdf.add_page()
    
    # Cover page
    pdf.set_font('Helvetica', 'B', 28)
    pdf.set_text_color(5, 28, 44)
    pdf.ln(40)
    pdf.multi_cell(0, 12, 'AI Implementation\nRoadmap')
    pdf.ln(20)
    pdf.set_font('Helvetica', '', 14)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 8, 'From Pilot to Production: A Practical Guide', 0, 1, 'L')
    pdf.ln(30)
    pdf.set_font('Helvetica', '', 11)
    pdf.cell(0, 6, 'NexDyne Technologies', 0, 1, 'L')
    pdf.cell(0, 6, '2024 Edition', 0, 1, 'L')
    
    # Executive Summary
    pdf.add_page()
    pdf.chapter_title('Executive Summary')
    pdf.chapter_body(
        'Artificial intelligence is transforming how businesses operate, but many organizations struggle '
        'to move from AI experimentation to production deployment. This roadmap provides a practical '
        'framework for implementing AI solutions that deliver sustainable business value.\n\n'
        'Based on our experience implementing AI solutions across dozens of mid-market companies, '
        'we have identified the key success factors and common pitfalls that determine whether AI '
        'initiatives succeed or fail.'
    )
    
    # Chapter 1
    pdf.chapter_title('Chapter 1: AI Readiness Assessment')
    pdf.chapter_body(
        'Before investing in AI, assess your organizations readiness across four dimensions:'
    )
    
    pdf.section_header('Data Readiness')
    pdf.chapter_body(
        'AI systems require quality data to deliver accurate results. Evaluate:\n'
        '- Data availability and accessibility\n'
        '- Data quality and consistency\n'
        '- Data governance and security\n'
        '- Historical data depth for training models'
    )
    
    pdf.section_header('Technical Infrastructure')
    pdf.chapter_body(
        'AI workloads have specific infrastructure requirements:\n'
        '- Compute capacity for model training and inference\n'
        '- Storage for large datasets\n'
        '- Integration capabilities with existing systems\n'
        '- Security and compliance controls'
    )
    
    pdf.section_header('Organizational Capability')
    pdf.chapter_body(
        'Successful AI implementation requires the right skills:\n'
        '- Data science and ML engineering expertise\n'
        '- Domain expertise to define use cases\n'
        '- Change management capabilities\n'
        '- Executive sponsorship and governance'
    )
    
    # Chapter 2
    pdf.add_page()
    pdf.chapter_title('Chapter 2: Identifying High-Value Use Cases')
    pdf.chapter_body(
        'Not all AI use cases are created equal. Focus on opportunities that combine:'
    )
    
    pdf.bullet_point('High business impact: Significant cost savings or revenue potential')
    pdf.bullet_point('Data availability: Sufficient quality data to train models')
    pdf.bullet_point('Technical feasibility: Proven AI approaches exist for the problem')
    pdf.bullet_point('Organizational alignment: Stakeholder support and clear ownership')
    pdf.ln(8)
    
    pdf.section_header('Common High-Value Use Cases')
    pdf.chapter_body(
        'Based on our experience, these use cases consistently deliver strong ROI:\n\n'
        '1. Intelligent Document Processing - Automate extraction and processing of unstructured documents\n\n'
        '2. Predictive Maintenance - Anticipate equipment failures before they occur\n\n'
        '3. Demand Forecasting - Improve inventory management and resource planning\n\n'
        '4. Customer Service Automation - Handle routine inquiries with AI-powered assistants\n\n'
        '5. Fraud Detection - Identify suspicious patterns in real-time'
    )
    
    # Chapter 3
    pdf.add_page()
    pdf.chapter_title('Chapter 3: The Implementation Framework')
    
    pdf.section_header('Phase 1: Discovery and Planning (4-6 weeks)')
    pdf.chapter_body(
        'Define the problem clearly, assess data availability, establish success metrics, '
        'and create a detailed implementation plan. This phase prevents costly mistakes later.'
    )
    
    pdf.section_header('Phase 2: Proof of Concept (6-8 weeks)')
    pdf.chapter_body(
        'Build a focused POC that demonstrates feasibility and value. Use a subset of data '
        'and simplified integration to validate the approach before full investment.'
    )
    
    pdf.section_header('Phase 3: Pilot Deployment (8-12 weeks)')
    pdf.chapter_body(
        'Deploy to a limited production environment with real users. Gather feedback, '
        'refine the model, and establish operational processes for monitoring and maintenance.'
    )
    
    pdf.section_header('Phase 4: Production Scale (12-16 weeks)')
    pdf.chapter_body(
        'Scale the solution across the organization. Implement robust monitoring, '
        'establish retraining processes, and integrate with enterprise systems.'
    )
    
    # Chapter 4
    pdf.add_page()
    pdf.chapter_title('Chapter 4: Avoiding Common Pitfalls')
    
    pdf.section_header('Pitfall 1: Starting with Technology')
    pdf.chapter_body(
        'Many organizations choose AI tools before defining the business problem. '
        'Start with the problem, then select the appropriate technology.'
    )
    
    pdf.section_header('Pitfall 2: Underestimating Data Requirements')
    pdf.chapter_body(
        'AI models are only as good as the data they learn from. Budget significant '
        'time and resources for data preparation and quality improvement.'
    )
    
    pdf.section_header('Pitfall 3: Ignoring Change Management')
    pdf.chapter_body(
        'AI changes how people work. Invest in training, communication, and support '
        'to ensure adoption and realize the full value of your investment.'
    )
    
    pdf.section_header('Pitfall 4: Neglecting Model Maintenance')
    pdf.chapter_body(
        'AI models degrade over time as business conditions change. Plan for ongoing '
        'monitoring, retraining, and model updates from the start.'
    )
    
    # Conclusion
    pdf.add_page()
    pdf.chapter_title('Conclusion: Your AI Journey Starts Here')
    pdf.chapter_body(
        'AI implementation success requires a balanced approach: ambitious enough to deliver '
        'meaningful business impact, but pragmatic enough to manage risk and build organizational '
        'capability over time.\n\n'
        'Start with a focused use case, build a strong foundation, and scale based on proven results. '
        'This approach maximizes your chances of success while minimizing risk.\n\n'
        'NexDyne Technologies helps mid-market companies implement AI solutions that deliver '
        'measurable business outcomes. Our team combines deep AI expertise with practical '
        'business experience to ensure your AI initiatives succeed.'
    )
    
    pdf.ln(20)
    pdf.set_font('Helvetica', 'B', 12)
    pdf.set_text_color(0, 119, 181)
    pdf.cell(0, 8, 'Ready to explore AI for your business?', 0, 1, 'L')
    pdf.set_font('Helvetica', '', 11)
    pdf.set_text_color(51, 51, 51)
    pdf.cell(0, 6, 'Schedule a consultation at www.nexdyne.com/contact', 0, 1, 'L')
    
    return pdf

def create_process_automation_guide():
    pdf = WhitepaperPDF()
    pdf.add_page()
    
    # Cover page
    pdf.set_font('Helvetica', 'B', 28)
    pdf.set_text_color(5, 28, 44)
    pdf.ln(40)
    pdf.multi_cell(0, 12, 'Process Automation\nBest Practices')
    pdf.ln(20)
    pdf.set_font('Helvetica', '', 14)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(0, 8, 'Maximizing ROI from Intelligent Automation', 0, 1, 'L')
    pdf.ln(30)
    pdf.set_font('Helvetica', '', 11)
    pdf.cell(0, 6, 'NexDyne Technologies', 0, 1, 'L')
    pdf.cell(0, 6, '2024 Edition', 0, 1, 'L')
    
    # Executive Summary
    pdf.add_page()
    pdf.chapter_title('Executive Summary')
    pdf.chapter_body(
        'Process automation has evolved from simple task automation to intelligent systems that '
        'can handle complex, judgment-based work. This guide shares best practices for implementing '
        'automation that delivers sustainable ROI.\n\n'
        'Organizations that follow these best practices typically achieve 3-5x better results from '
        'their automation investments compared to those that approach automation tactically.'
    )
    
    # Chapter 1
    pdf.chapter_title('Chapter 1: The Automation Opportunity')
    pdf.chapter_body(
        'Modern automation technologies enable organizations to:\n'
    )
    pdf.bullet_point('Eliminate manual data entry and document processing')
    pdf.bullet_point('Orchestrate complex workflows across multiple systems')
    pdf.bullet_point('Apply AI to handle exceptions and make decisions')
    pdf.bullet_point('Scale operations without proportional headcount increases')
    pdf.bullet_point('Improve accuracy and compliance')
    pdf.ln(8)
    
    pdf.section_header('The Automation Spectrum')
    pdf.chapter_body(
        'Automation solutions range from simple to sophisticated:\n\n'
        '1. Basic RPA - Automate repetitive, rule-based tasks\n'
        '2. Enhanced RPA - Add screen scraping and basic decision logic\n'
        '3. Intelligent Automation - Incorporate AI for document processing and decisions\n'
        '4. Hyperautomation - End-to-end process automation with AI orchestration'
    )
    
    # Chapter 2
    pdf.add_page()
    pdf.chapter_title('Chapter 2: Process Selection Framework')
    pdf.chapter_body(
        'Selecting the right processes for automation is critical. Evaluate candidates across:'
    )
    
    pdf.section_header('Volume and Frequency')
    pdf.chapter_body(
        'High-volume, frequently executed processes offer the greatest automation ROI. '
        'Calculate the total time spent on the process across all employees.'
    )
    
    pdf.section_header('Standardization')
    pdf.chapter_body(
        'Processes with clear rules and limited variations are easier to automate. '
        'Highly variable processes may require AI capabilities or process redesign.'
    )
    
    pdf.section_header('Error Impact')
    pdf.chapter_body(
        'Processes where errors have significant consequences (financial, regulatory, customer) '
        'benefit from automations improved accuracy and consistency.'
    )
    
    pdf.section_header('System Landscape')
    pdf.chapter_body(
        'Processes that span multiple systems often have the highest automation potential, '
        'as they eliminate manual data transfer and reconciliation.'
    )
    
    # Chapter 3
    pdf.add_page()
    pdf.chapter_title('Chapter 3: Implementation Best Practices')
    
    pdf.section_header('Best Practice 1: Start with Process Optimization')
    pdf.chapter_body(
        'Automating a bad process creates automated waste. Before automating, analyze '
        'the current process for inefficiencies and redesign where appropriate.'
    )
    
    pdf.section_header('Best Practice 2: Build for Maintainability')
    pdf.chapter_body(
        'Automation solutions require ongoing maintenance. Design with modularity, '
        'clear documentation, and error handling from the start.'
    )
    
    pdf.section_header('Best Practice 3: Implement Robust Monitoring')
    pdf.chapter_body(
        'Automated processes can fail silently. Implement comprehensive monitoring, '
        'alerting, and exception handling to catch issues before they impact the business.'
    )
    
    pdf.section_header('Best Practice 4: Plan for Scale')
    pdf.chapter_body(
        'Design your automation infrastructure to scale. Consider orchestration platforms, '
        'credential management, and capacity planning from the beginning.'
    )
    
    pdf.section_header('Best Practice 5: Establish a Center of Excellence')
    pdf.chapter_body(
        'Create a dedicated team responsible for automation standards, governance, '
        'and knowledge sharing. This accelerates adoption and ensures quality.'
    )
    
    # Chapter 4
    pdf.add_page()
    pdf.chapter_title('Chapter 4: Measuring Automation ROI')
    pdf.chapter_body(
        'Effective ROI measurement requires tracking multiple dimensions:'
    )
    
    pdf.section_header('Efficiency Metrics')
    pdf.bullet_point('Time saved per transaction')
    pdf.bullet_point('Transactions processed per hour')
    pdf.bullet_point('FTE capacity freed')
    pdf.ln(4)
    
    pdf.section_header('Quality Metrics')
    pdf.bullet_point('Error rate reduction')
    pdf.bullet_point('Compliance improvement')
    pdf.bullet_point('Customer satisfaction impact')
    pdf.ln(4)
    
    pdf.section_header('Financial Metrics')
    pdf.bullet_point('Direct cost savings')
    pdf.bullet_point('Revenue impact (faster processing, fewer errors)')
    pdf.bullet_point('Avoided costs (scaling without hiring)')
    
    # Conclusion
    pdf.add_page()
    pdf.chapter_title('Conclusion: Building an Automation-First Culture')
    pdf.chapter_body(
        'The most successful organizations treat automation as a strategic capability, not a '
        'series of tactical projects. They build automation thinking into how they design '
        'processes, evaluate technology, and develop their workforce.\n\n'
        'Start with high-impact use cases, build organizational capability, and scale based '
        'on proven results. This approach delivers sustainable value while managing risk.\n\n'
        'NexDyne Technologies helps mid-market companies implement intelligent automation '
        'solutions that deliver measurable business outcomes. Our approach combines deep '
        'technical expertise with practical business experience.'
    )
    
    pdf.ln(20)
    pdf.set_font('Helvetica', 'B', 12)
    pdf.set_text_color(0, 119, 181)
    pdf.cell(0, 8, 'Ready to accelerate your automation journey?', 0, 1, 'L')
    pdf.set_font('Helvetica', '', 11)
    pdf.set_text_color(51, 51, 51)
    pdf.cell(0, 6, 'Schedule a consultation at www.nexdyne.com/contact', 0, 1, 'L')
    
    return pdf

def main():
    output_dir = '/home/ubuntu/newco-website/client/public/resources'
    os.makedirs(output_dir, exist_ok=True)
    
    # Generate Digital Transformation Guide
    print('Generating Digital Transformation Guide...')
    pdf1 = create_digital_transformation_guide()
    pdf1.output(os.path.join(output_dir, 'digital-transformation-guide.pdf'))
    print('  Created: digital-transformation-guide.pdf')
    
    # Generate AI Implementation Roadmap
    print('Generating AI Implementation Roadmap...')
    pdf2 = create_ai_implementation_roadmap()
    pdf2.output(os.path.join(output_dir, 'ai-implementation-roadmap.pdf'))
    print('  Created: ai-implementation-roadmap.pdf')
    
    # Generate Process Automation Best Practices
    print('Generating Process Automation Best Practices...')
    pdf3 = create_process_automation_guide()
    pdf3.output(os.path.join(output_dir, 'process-automation-best-practices.pdf'))
    print('  Created: process-automation-best-practices.pdf')
    
    print('\nAll whitepapers generated successfully!')

if __name__ == '__main__':
    main()
