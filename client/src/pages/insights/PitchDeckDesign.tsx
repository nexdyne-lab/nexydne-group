import { Link } from "wouter";
import ReadingProgress from "@/components/ReadingProgress";
import InlineTableOfContents from "@/components/InlineTableOfContents";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PitchDeckDesign() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Navigation />
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container max-w-4xl">
          <Link href="/insights" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Tag className="w-4 h-4" />
              Capital Raising
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Calendar className="w-4 h-4" />
              December 16, 2025
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Clock className="w-4 h-4" />
              11 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            How to Design Pitch Decks That Close Institutional Rounds
          </h1>
          
          <p className="text-xl text-slate-300">
            The difference between pitch decks that generate term sheets and those that generate polite passes often comes down to narrative structure, visual clarity, and strategic emphasis rather than the underlying business quality.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <div className="w-full h-96 bg-slate-100 overflow-hidden">
        <img 
          src="/images/insights/pitch-deck-design.jpg" 
          alt="Pitch Deck Design" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Institutional investors review hundreds of pitch decks annually. Most receive less than three minutes of attention before being discarded. The decks that break through this filter share common characteristics: they tell compelling stories, present information with visual clarity, and demonstrate deep understanding of what investors care about. Building these decks requires both art and science.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Narrative Arc That Resonates
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The most effective pitch decks follow a narrative structure that builds tension and resolution. Start by establishing a significant problem that's costing customers real money or preventing them from achieving critical objectives. Make the problem visceral and urgent—investors should feel the pain your customers experience. Then introduce your solution as the inevitable answer, not just one option among many.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The narrative should flow naturally: Problem → Solution → Market Opportunity → Product → Traction → Business Model → Competition → Team → Financials → Ask. Each slide should build on the previous one, creating momentum toward your funding request. Avoid the common mistake of jumping between topics or presenting information in random order.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">The Essential Slide Sequence</h3>
              <ul className="space-y-3 text-slate-700">
                <li><strong>Slide 1 - Cover:</strong> Company name, tagline, contact info</li>
                <li><strong>Slide 2 - Problem:</strong> The urgent pain you're solving</li>
                <li><strong>Slide 3 - Solution:</strong> Your unique approach</li>
                <li><strong>Slide 4 - Market:</strong> TAM/SAM/SOM with bottoms-up validation</li>
                <li><strong>Slide 5 - Product:</strong> How it works, key features</li>
                <li><strong>Slide 6 - Traction:</strong> Growth metrics, customer logos</li>
                <li><strong>Slide 7 - Business Model:</strong> How you make money</li>
                <li><strong>Slide 8 - Competition:</strong> Why you win</li>
                <li><strong>Slide 9 - Team:</strong> Why you're uniquely qualified</li>
                <li><strong>Slide 10 - Financials:</strong> Revenue, growth, unit economics</li>
                <li><strong>Slide 11 - Ask:</strong> How much, use of funds, milestones</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Visual Design Principles That Work
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Visual design either amplifies or undermines your message. The goal is clarity, not creativity. Use consistent fonts, colors, and layouts throughout the deck. Limit each slide to one key message supported by minimal text and strong visuals. If a slide requires more than 30 seconds to understand, it's too complex.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Charts and graphs should tell stories at a glance. Use color strategically to highlight key data points. Avoid 3D charts, excessive gradients, and decorative elements that distract from your message. Every visual element should serve a purpose—if it doesn't support your narrative, remove it.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Problem Slide: Making Pain Tangible
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Your problem slide is the foundation of your entire pitch. Weak problem slides lead to weak pitches. Avoid generic statements like "businesses struggle with inefficiency." Instead, quantify the problem with specific data: "Mid-market logistics companies lose $2.3M annually to manual shipment coordination errors, affecting 23% of all orders."
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Use customer quotes to bring the problem to life. Show the current broken process with a simple workflow diagram. Make investors feel the urgency that drives your customers to seek solutions. The stronger your problem slide, the more inevitable your solution appears.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Traction Slide: Proving Product-Market Fit
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Traction is the most important slide in your deck after the problem. This is where you prove that customers actually want what you're building. Show growth metrics that demonstrate momentum: revenue growth, customer acquisition, usage metrics, or retention rates. Use a simple line chart showing upward trajectory over time.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Include recognizable customer logos if you have them, but only if they're truly impressive. Ten unknown companies don't build credibility. Three well-known brands do. Add a brief customer quote that captures the value you deliver. Quantify the impact: "Reduced processing time by 73%" or "Generated $1.2M in additional revenue."
            </p>

            <div className="bg-slate-50 border-l-4 border-slate-500 p-6 my-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Traction Metrics That Matter</h3>
              <p className="text-slate-700 mb-4">Choose metrics that demonstrate sustainable growth:</p>
              <ul className="space-y-3 text-slate-700">
                <li><strong>Revenue growth:</strong> MRR/ARR trajectory with month-over-month rates</li>
                <li><strong>Customer acquisition:</strong> Number of customers, growth rate, quality indicators</li>
                <li><strong>Retention metrics:</strong> Churn rate, net revenue retention, cohort analysis</li>
                <li><strong>Usage metrics:</strong> DAU/MAU, engagement rates, feature adoption</li>
                <li><strong>Unit economics:</strong> CAC, LTV, payback period, gross margins</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Market Slide: Sizing Opportunity Credibly
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Market sizing is where most decks lose credibility. Avoid the temptation to claim massive TAMs based on analyst reports. Investors have seen too many "$500B market opportunity" slides to take them seriously. Instead, build your market size bottoms-up from your actual customer data.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Start with your serviceable addressable market (SAM): the specific segment you can realistically reach with your current product and go-to-market approach. Show how you calculated it: number of target companies × average contract value × penetration rate. Then show your serviceable obtainable market (SOM): what you can capture in 3-5 years given realistic growth assumptions.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Competition Slide: Demonstrating Differentiation
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Never claim you have no competition. This signals either naivety or dishonesty. Every problem has existing solutions, even if they're manual processes or indirect competitors. The question is why your approach is superior for your target customers.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Use a positioning matrix that shows competitors along two key dimensions where you have clear advantages. Avoid generic axes like "quality" and "price." Instead, use specific differentiators: "Implementation time" vs "Feature depth" or "Ease of use" vs "Enterprise capabilities." Place yourself in the ideal quadrant and explain why that positioning matters to customers.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Team Slide: Building Credibility
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Investors back teams, not just ideas. Your team slide should demonstrate that you have the specific experience and capabilities required to execute this particular business. Highlight relevant domain expertise, previous company-building experience, and technical capabilities that give you unfair advantages.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Include headshots, names, titles, and 1-2 bullet points of relevant experience for each key team member. Focus on accomplishments that relate directly to your business: "Built and scaled operations at [relevant company]" or "PhD in [relevant field] from [prestigious institution]." Avoid generic credentials that don't support your specific narrative.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Financials Slide: Showing the Path to Scale
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Financial projections should tell a story of efficient growth. Show 3-5 years of revenue projections with key assumptions clearly stated. Include gross margin progression and path to profitability if relevant. Avoid showing detailed P&L statements—they're too complex for a pitch deck.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Focus on the metrics investors care about: revenue growth rate, gross margins, sales efficiency (CAC payback), and burn rate. Show that you understand your unit economics and have a plan to reach profitability or the next major milestone. Conservative projections build more credibility than hockey stick forecasts.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Financial Slide Best Practices</h3>
              <ul className="space-y-3 text-slate-700">
                <li><strong>Show historical performance:</strong> Build credibility with actual results</li>
                <li><strong>Use reasonable growth rates:</strong> 3-4x year-over-year is aggressive but believable</li>
                <li><strong>Highlight key milestones:</strong> When you reach profitability, break-even, or next funding</li>
                <li><strong>Include unit economics:</strong> CAC, LTV, gross margin by cohort</li>
                <li><strong>State assumptions clearly:</strong> Average deal size, sales cycle, retention rate</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Ask Slide: Making Your Request Clear
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Your final slide should clearly state how much you're raising, what you'll use it for, and what milestones you'll achieve. Break down the use of funds into 3-5 major categories: product development, sales and marketing, operations, team expansion. Show that you've thought carefully about capital allocation.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Include the milestones you'll reach with this capital: revenue targets, customer acquisition goals, product launches, or market expansion plans. This demonstrates that you understand what success looks like and have a clear plan to achieve it. End with a strong call to action that invites further conversation.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Common Pitch Deck Mistakes to Avoid
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Even experienced founders make critical pitch deck errors. The most common include too many slides (keep it to 11-15), too much text (use bullet points sparingly), weak problem definition (the foundation of your entire pitch), generic market sizing (build bottoms-up from real data), and burying key metrics (put your best numbers front and center).
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Remember that your pitch deck is a storytelling tool, not a comprehensive business plan. Its job is to generate interest and secure a follow-up meeting, not to answer every possible question. Keep it focused, visual, and compelling.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              How NexDyne Helps Build Winning Pitch Decks
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              At NexDyne, we work with founders to craft pitch decks that resonate with institutional investors. Our approach combines strategic narrative development, data-driven storytelling, and visual design excellence. We help companies articulate their value proposition clearly, present traction compellingly, and structure their ask strategically.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our clients consistently generate higher investor interest and close rounds faster because their decks cut through the noise. We understand what institutional investors look for and how to present your story in the most compelling light.
            </p>
          </div>
        </div>
      </article>

      {/* Newsletter Subscribe */}
      <div className="bg-slate-50 py-16">
        <div className="container max-w-3xl">
          <NewsletterSubscribe />
        </div>
      </div>

      <Footer />
    </div>
  );
}
