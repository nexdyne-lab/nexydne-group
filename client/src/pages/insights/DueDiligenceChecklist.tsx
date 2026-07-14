import InsightArticleV2 from "@/components/InsightArticleV2";

export default function DueDiligenceChecklist() {
  const sections = [
    { id: "financial", label: "Financial diligence" },
    { id: "customer-revenue", label: "Customer & revenue" },
    { id: "legal", label: "Legal & compliance" },
    { id: "technical", label: "Technical & product" },
    { id: "commercial", label: "Commercial diligence" },
    { id: "organizational", label: "Organization & team" },
    { id: "data-room", label: "Building your data room" },
    { id: "managing", label: "Managing the process" },
    { id: "red-flags", label: "Red flags" },
    { id: "how-nexdyne", label: "How NexDyne helps" },
  ];

  const relatedInsights = [
    { title: "The Complete Guide to Series A Fundraising Preparation", category: "Capital Raising", link: "/insights/series-a-fundraising-guide", image: "/images/capital-raising-abstract.jpg" },
    { title: "Five Valuation Mistakes That Cost Founders Millions", category: "Capital Raising", link: "/insights/valuation-mistakes", image: "/images/industries/fin-trader.jpg" },
    { title: "Commercial Due Diligence", category: "M&A", link: "/insights/commercial-due-diligence", image: "/images/industries/deal-handshake.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Capital Raising"
      title="The Investor Due Diligence Checklist"
      subtitle="Due diligence can make or break fundraising momentum. Companies that prepare comprehensive documentation before starting conversations close rounds faster and maintain better negotiating positions throughout the process."
      heroImage="/images/industries/fin-handshake-city.jpg"
      publishDate="December 14, 2025"
      readTime="13 min"
      sections={sections}
      keyTakeaways={[
        "Due diligence typically runs 4-8 weeks across financial, legal, technical, commercial, and organizational workstreams; preparing documentation proactively keeps deals moving.",
        "Assemble three years of financial statements, monthly management accounts for 12-24 months, cohort and churn analysis, a complete cap table, and a 3-5 year model.",
        "A well-organized virtual data room built on a professional provider signals operational excellence and accelerates evaluation.",
        "Disclose potential red flags early with context and remediation plans; issues discovered late are what kill otherwise promising rounds.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        Investor due diligence has evolved from a formality into a comprehensive examination of every aspect of your
        business. The process typically takes 4-8 weeks and involves multiple workstreams: financial, legal, technical,
        commercial, and organizational. Companies that anticipate these requests and prepare documentation proactively
        move through diligence faster and avoid the momentum-killing delays that cause deals to fall apart.
      </p>

      <h2 id="financial">Financial due diligence: the foundation</h2>

      <p>
        Financial diligence forms the foundation of investor evaluation. Investors will scrutinize every aspect of your
        financial performance, from revenue recognition policies to expense categorization. The goal is to verify that
        your reported metrics are accurate, sustainable, and calculated consistently with industry standards.
      </p>

      <p>
        Prepare comprehensive financial statements for the past three years, including income statements, balance
        sheets, and cash flow statements. Include monthly detail for the most recent 12-24 months. Ensure your revenue
        recognition policies comply with ASC 606 or IFRS 15 standards. Document any non-recurring expenses or revenue
        items that might distort your underlying performance.
      </p>

      <h3>Financial documents investors will request</h3>
      <ul>
        <li><strong>Historical financials:</strong> 3 years of audited or reviewed statements</li>
        <li><strong>Monthly management accounts:</strong> P&amp;L, balance sheet, cash flow for 12-24 months</li>
        <li><strong>Revenue details:</strong> Customer-level revenue, cohort analysis, churn metrics</li>
        <li><strong>Expense breakdown:</strong> Detailed categorization with headcount allocation</li>
        <li><strong>Financial projections:</strong> 3-5 year model with detailed assumptions</li>
        <li><strong>Cap table:</strong> Complete ownership structure with all option grants</li>
        <li><strong>Banking relationships:</strong> Credit facilities, loan agreements, bank statements</li>
      </ul>

      <h2 id="customer-revenue">Customer and revenue verification</h2>

      <p>
        Investors will verify your customer relationships and revenue quality through multiple lenses. They'll examine
        customer contracts to understand terms, payment schedules, and renewal provisions. They'll analyze cohort
        retention to assess whether your growth is sustainable or driven by unsustainable acquisition spending. They'll
        often request customer references to validate that your value proposition resonates as strongly as you claim.
      </p>

      <p>
        Prepare a customer list with contract values, start dates, renewal dates, and current status. Create cohort
        retention analyzes that show how different customer vintages perform over time. Document your top 10-20
        customers with details on how you acquired them, what value you deliver, and why they're likely to renew.
        Identify reference customers who can speak credibly about your impact.
      </p>

      <h2 id="legal">Legal and compliance documentation</h2>

      <p>
        Legal diligence uncovers potential liabilities that could affect company value or create post-investment
        complications. Investors want assurance that you own your intellectual property, have proper employment
        agreements in place, maintain necessary licenses and permits, and comply with relevant regulations.
      </p>

      <p>
        Organize all formation documents, including articles of incorporation, bylaws, and board resolutions. Compile
        all financing documents from previous rounds with associated rights and preferences. Gather employment
        agreements for all team members, with particular attention to IP assignment clauses. Document any outstanding
        litigation, regulatory inquiries, or compliance issues.
      </p>

      <h3>Legal documents to prepare</h3>
      <ul>
        <li><strong>Corporate formation:</strong> Certificate of incorporation, bylaws, board minutes</li>
        <li><strong>Financing history:</strong> All prior investment documents, SAFEs, convertible notes</li>
        <li><strong>Intellectual property:</strong> Patents, trademarks, IP assignments from founders and employees</li>
        <li><strong>Material contracts:</strong> Customer agreements, vendor contracts, partnership deals</li>
        <li><strong>Employment documentation:</strong> Offer letters, IP agreements, option grants</li>
        <li><strong>Compliance records:</strong> Licenses, permits, regulatory filings</li>
        <li><strong>Litigation history:</strong> Any current or past legal disputes</li>
      </ul>

      <h2 id="technical">Technical and product diligence</h2>

      <p>
        For technology companies, technical diligence assesses whether your product is built on solid foundations and
        can scale to support growth. Investors often engage third-party technical experts to review your architecture,
        codebase, security practices, and development processes. They're looking for technical debt that could require
        expensive remediation or architectural limitations that could constrain growth.
      </p>

      <p>
        Prepare documentation of your technical architecture with diagrams showing system components and data flows.
        Create a technology stack overview listing all major technologies, frameworks, and third-party services.
        Document your security practices, including penetration testing results, compliance certifications (SOC 2,
        ISO 27001), and incident response procedures. Provide your product roadmap with planned features and technical
        initiatives.
      </p>

      <h2 id="commercial">Commercial due diligence: market validation</h2>

      <p>
        Commercial diligence validates your market opportunity, competitive positioning, and go-to-market effectiveness.
        Investors want to understand whether your target market is as large as you claim, whether customers truly value
        your differentiation, and whether your sales and marketing approach can scale efficiently.
      </p>

      <p>
        Prepare detailed market sizing analysis with bottoms-up calculations based on your addressable customer
        universe. Document your competitive landscape with honest assessment of strengths and weaknesses relative to
        alternatives. Provide sales and marketing metrics including CAC by channel, sales cycle length, win rates, and
        pipeline conversion rates. Include case studies demonstrating customer outcomes and ROI.
      </p>

      <h3>Commercial diligence focus areas</h3>
      <ul>
        <li><strong>Market opportunity:</strong> TAM/SAM/SOM with supporting data and assumptions</li>
        <li><strong>Customer acquisition:</strong> CAC by channel, payback period, scaling potential</li>
        <li><strong>Sales process:</strong> Pipeline stages, conversion rates, average deal size</li>
        <li><strong>Customer retention:</strong> Churn rates, NRR, expansion revenue patterns</li>
        <li><strong>Competitive positioning:</strong> Win/loss analysis, competitive differentiators</li>
        <li><strong>Product-market fit:</strong> NPS scores, customer testimonials, usage metrics</li>
      </ul>

      <h2 id="organizational">Organizational and team assessment</h2>

      <p>
        Investors invest in teams as much as businesses. Organizational diligence examines whether you have the
        leadership depth and talent density required to execute your growth plans. They'll assess team composition,
        compensation structures, retention rates, and recruiting capabilities.
      </p>

      <p>
        Prepare an organizational chart showing reporting structures and key roles. Create team bios highlighting
        relevant experience and accomplishments. Document your compensation philosophy with salary bands, equity
        guidelines, and benefit structures. Provide turnover data and explanations for any significant departures.
        Outline your recruiting plan with target hires, required skills, and timeline.
      </p>

      <h2 id="data-room">Building your data room</h2>

      <p>
        A well-organized data room demonstrates operational excellence and accelerates diligence. Create a logical
        folder structure that makes information easy to find. Use consistent naming conventions. Include table of
        contents documents in each section. Provide executive summaries for complex documents.
      </p>

      <p>
        Set up your data room using a professional virtual data room provider like DocSend, Carta, or Datasite. These
        platforms provide access controls, tracking analytics, and professional presentation. Avoid using Dropbox or
        Google Drive for sensitive diligence materials—they lack the security and professionalism investors expect.
      </p>

      <h3>Data room organization structure</h3>
      <ol>
        <li><strong>Company overview:</strong> Pitch deck, executive summary, company history</li>
        <li><strong>Financial information:</strong> Statements, projections, metrics, cap table</li>
        <li><strong>Legal documents:</strong> Formation docs, contracts, IP, compliance</li>
        <li><strong>Product &amp; technology:</strong> Architecture, roadmap, security, technical docs</li>
        <li><strong>Commercial:</strong> Customer data, market analysis, sales metrics</li>
        <li><strong>Team &amp; organization:</strong> Org chart, bios, compensation, recruiting</li>
        <li><strong>Operations:</strong> Processes, systems, vendor relationships</li>
      </ol>

      <h2 id="managing">Managing the diligence process</h2>

      <p>
        Due diligence is a two-way process. While investors are evaluating your company, you should be evaluating them
        as potential partners. Pay attention to how they conduct diligence—it reveals their values, decision-making
        process, and how they'll behave as board members.
      </p>

      <p>
        Respond to information requests promptly and completely. Track all requests in a shared spreadsheet to ensure
        nothing falls through the cracks. Be transparent about issues rather than trying to hide them—investors will
        find problems eventually, and honesty builds trust. Use diligence conversations to build relationships with the
        investment team and demonstrate your operational sophistication.
      </p>

      <h2 id="red-flags">Red flags that kill deals</h2>

      <p>
        Certain discoveries during diligence can derail otherwise promising fundraises. The most common deal-killers
        include revenue recognition issues that inflate reported performance, IP ownership problems where key technology
        isn't properly assigned to the company, undisclosed litigation or regulatory issues, customer concentration
        where top customers represent excessive revenue percentage, and team issues like undisclosed conflicts or
        pending departures.
      </p>

      <p>
        Address potential red flags proactively. If you know about issues, disclose them early with context and
        remediation plans. Investors can work through most problems if they're disclosed transparently. What kills deals
        is discovering material issues late in the process that weren't disclosed earlier.
      </p>

      <h2 id="how-nexdyne">How NexDyne prepares companies for diligence</h2>

      <p>
        At NexDyne, we help companies build comprehensive due diligence readiness before they start fundraising
        conversations. Our approach includes organizing financial records and creating investor-ready reporting
        packages, building data rooms with professional structure and documentation, identifying and remediating
        potential red flags before investors discover them, and preparing management teams for diligence conversations
        and presentations.
      </p>

      <p>
        Our clients move through diligence 40-50% faster than typical companies because they've anticipated investor
        questions and prepared thorough responses. This speed creates competitive tension, strengthens negotiating
        positions, and increases the probability of successful closes.
      </p>
    </InsightArticleV2>
  );
}
