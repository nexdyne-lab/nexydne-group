import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { FileCheck, Clock, Users, DollarSign, Target, Shield, Heart } from "lucide-react";

export default function GovernmentBenefitsAI() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Getting Benefits to Residents Weeks Sooner | Public Sector Case Study"
      seoDescription="A county agency took six weeks to decide a benefits application while a backlog of tens of thousands kept growing. Letting software handle the routine paperwork cut the wait in half."
      canonical="/cases/government-benefits-modernization"
      industry="Public Sector"
      industryLink="/industries/public-sector"
      title="Helping a County Get Benefits to Residents Weeks Sooner"
      subtitle="Deciding a single application meant a caseworker gathering documents and checking records by hand for hours. Letting software handle the routine paperwork freed staff to spend their time on the people who needed them most."
      heroImage="/images/industries/people-commute.jpg"
      metrics={[
        { value: "50%", label: "Faster Decisions" },
        { value: "95%", label: "Accuracy Rate" },
        { value: "40K", label: "More Residents Served" },
        { value: "$4M", label: "Saved Each Year" }
      ]}
      clientContextTitle="An Agency Buried in Paperwork"
      clientContextIntro="A county human-services agency handled roughly 180,000 applications a year for programs that people genuinely depend on — health coverage, food assistance, childcare support. But a decision that should have taken days was taking closer to six weeks, and a backlog of tens of thousands of cases kept growing. Behind every one of those cases was a family waiting on help they had already applied for and needed now."
      clientContextBody="The work was almost entirely manual. For each application, a caseworker gathered the documents a resident had submitted, keyed the details in, and checked them one by one against separate systems for income, identity and employment — several hours of careful effort per case. Skilled staff spent most of their day on data entry rather than on people, mistakes crept in under the sheer volume, and the residents who needed help most were the ones left waiting."
      clientProfile={{
        industry: "County Human Services",
        companySize: "~180,000 Applications a Year",
        projectDuration: "16 Months",
        additionalInfo: "~6 Weeks to Decide",
        additionalLabel: "Starting Point"
      }}
      challengeTitle="Manual Work at Volume"
      challenges={[
        {
          icon: Clock,
          title: "Long Waits for Help",
          description: "Decisions took close to six weeks, leaving families to wait on health coverage, food assistance and childcare support they had already applied for."
        },
        {
          icon: FileCheck,
          title: "Everything Checked by Hand",
          description: "Each case meant a caseworker reading documents and re-keying details for hours — slow, repetitive work that was easy to get wrong."
        },
        {
          icon: Users,
          title: "A Backlog That Kept Growing",
          description: "Tens of thousands of cases sat waiting, and no matter how hard staff worked, demand kept outrunning the capacity to keep up."
        },
        {
          icon: Target,
          title: "Deadlines at Risk",
          description: "Falling behind on the timelines these programs require put the county's standing — and its funding — under real pressure."
        }
      ]}
      approachTitle="Letting Software Do the Routine Work"
      approachIntro="We helped the agency hand the repetitive parts of the job to software that could read a submitted document and check the facts against the county's records — so caseworkers reviewed a decision that was already prepared rather than building each one from a blank page, and could give their real attention to the cases that needed judgment."
      steps={[
        {
          step: "01",
          title: "Reading the Documents Automatically",
          description: "We put in place software that reads a submitted document — a pay stub, a tax form, a proof of address — much as a person would, and pulls out the details that matter. For most applications, that first pass no longer needed a human at all."
        },
        {
          step: "02",
          title: "Checking the Facts on Their Own",
          description: "We connected the process to the county's existing records so that income, identity and employment could be confirmed automatically, sparing caseworkers the hours they used to spend logging into one system after another."
        },
        {
          step: "03",
          title: "Preparing the Decision in Advance",
          description: "For straightforward cases, the system pulled everything together and laid out a recommended decision. Caseworkers moved from assembling each case by hand to reviewing and confirming one that was already prepared."
        },
        {
          step: "04",
          title: "Sending the Hard Cases to People",
          description: "The system recognized when a case was complicated or unusual and routed it to an experienced caseworker, along with a clear summary of what it had found — so human judgment went where it was genuinely needed."
        }
      ]}
      resultsTitle="Help That Actually Reaches People"
      results={[
        {
          icon: Clock,
          value: "50%",
          label: "Faster decisions",
          detail: "The wait cut from roughly six weeks to about three"
        },
        {
          icon: Shield,
          value: "95%",
          label: "Accuracy on prepared decisions",
          detail: "Fewer errors than the old manual process produced"
        },
        {
          icon: Heart,
          value: "40K",
          label: "More residents served",
          detail: "Backlog cleared and capacity freed for new applications"
        },
        {
          icon: DollarSign,
          value: "$4M",
          label: "Saved each year",
          detail: "From work no longer done by hand"
        }
      ]}
      quote="Our caseworkers came here to help people, and they were spending their days keying in pay stubs instead. Handing the routine paperwork to software gave them their real job back — sitting with the families whose situations are complicated. We are deciding faster, getting it right more often, and helping more residents than we ever could before."
      quoteAuthor="Director of Human Services"
      quoteRole="County government"
      relatedStudies={[
        {
          title: "Making Everyday Services Simple for a County",
          metric: "40%",
          label: "higher satisfaction",
          link: "/cases/city-digital-services",
          image: "/images/industries/city-digital.jpg"
        },
        {
          title: "Getting Traffic Moving Again for a Growing City",
          metric: "30%",
          label: "less congestion",
          link: "/cases/smart-city-platform",
          image: "/images/industries/transport-traffic.jpg"
        }
      ]}
      ctaTitle="Ready to get help to people sooner?"
      ctaDescription="Let's talk about taking the routine paperwork off your caseworkers' desks."
    />
  );
}
