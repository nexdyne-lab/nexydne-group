import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, Clock, DollarSign, Smartphone, Target, Star } from "lucide-react";

export default function GovernmentDigitalServices() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Making Everyday Services Simple for a County's Residents | Public Sector Case Study"
      seoDescription="A county government made residents navigate a different website and process for every service. Bringing those services together behind one front door lifted satisfaction by 40% and saved millions."
      canonical="/cases/city-digital-services"
      industry="Public Sector"
      industryLink="/industries/public-sector"
      title="How a County Made Everyday Services Simple for 450,000 Residents"
      subtitle="Renewing a permit, applying for assistance or reporting a problem each meant learning a different website and starting over. Bringing those services together behind a single front door changed how residents experienced their government."
      heroImage="/images/industries/city-digital.jpg"
      metrics={[
        { value: "40%", label: "Higher Satisfaction" },
        { value: "70%", label: "Services Used Online" },
        { value: "60%", label: "Faster Processing" },
        { value: "$6M", label: "Saved Each Year" }
      ]}
      clientContextTitle="When Every Department Is Its Own Island"
      clientContextIntro="A county government served around 450,000 residents through dozens of separate departments, and each one had grown up on its own. A resident who wanted to renew a permit, apply for assistance and report a pothole had to find three different websites, create three different logins and learn three different processes — none of which spoke to one another. For anything complicated, the reliable path was still a phone call or a trip downtown."
      clientContextBody="The services existed online, but they had been built department by department, so they looked and behaved differently and often could not be finished without an in-person visit. Barely a quarter of routine transactions were completed digitally. The rest flowed into call centers and service counters that were expensive to run and frustrating to use — and every difficult interaction chipped away a little more at residents' faith that their government could get the simple things right."
      clientProfile={{
        industry: "County Government",
        companySize: "~450,000 Residents",
        projectDuration: "18 Months",
        additionalInfo: "Dozens of Departments",
        additionalLabel: "Government Scope"
      }}
      challengeTitle="Why Simple Things Felt Hard"
      challenges={[
        {
          icon: Users,
          title: "A Different Front Door Everywhere",
          description: "Each department had its own website, login and way of working, so residents had to relearn the process for every service they needed."
        },
        {
          icon: Clock,
          title: "Slow, Paper-Bound Processing",
          description: "Applications that should have taken minutes took weeks, because the work behind the counter still moved on paper from desk to desk."
        },
        {
          icon: Smartphone,
          title: "Most People Never Got Online",
          description: "Only about a quarter of transactions were completed digitally — everyone else was pushed toward call centers and in-person visits."
        },
        {
          icon: Star,
          title: "Eroding Trust",
          description: "Satisfaction with county services sat around a third, and each frustrating experience made residents a little less confident their government worked for them."
        }
      ]}
      approachTitle="Designing Around the Resident, Not the Org Chart"
      approachIntro="Working alongside the county's staff, we set out to organize services around what residents were actually trying to do rather than around which department happened to own them — so that getting something done no longer required knowing how the county was structured."
      steps={[
        {
          step: "01",
          title: "One Front Door for Everything",
          description: "We built a single place for residents to reach every county service, with one login and one profile. A resident could apply, pay and check on things without ever having to work out which department was responsible."
        },
        {
          step: "02",
          title: "Rebuilding the Services People Use Most",
          description: "We took the most common services and redesigned them around the resident, cutting away needless steps and questions and making each one work well on a phone. The average application went from close to an hour of effort to under ten minutes."
        },
        {
          step: "03",
          title: "Moving the Work Off Paper",
          description: "Behind the counter, we replaced hand-carried paperwork with straightforward digital steps, so routine cases moved through on their own and staff time went to the ones that genuinely needed judgment. Work that used to take weeks now cleared in a day or two."
        },
        {
          step: "04",
          title: "Telling People Where Things Stand",
          description: "We added plain updates that let residents know when an application was received, approved or due for renewal — so they no longer had to call and wait on hold simply to find out what was happening."
        }
      ]}
      resultsTitle="A County That Feels Easier to Deal With"
      results={[
        {
          icon: Star,
          value: "40%",
          label: "Higher satisfaction",
          detail: "From around a third to nearly three quarters of residents satisfied"
        },
        {
          icon: Smartphone,
          value: "70%",
          label: "Services now used online",
          detail: "Up from about a quarter — residents choosing digital"
        },
        {
          icon: Clock,
          value: "60%",
          label: "Faster processing",
          detail: "Most routine cases now settled in a day or two, not weeks"
        },
        {
          icon: DollarSign,
          value: "$6M",
          label: "Saved each year",
          detail: "From lighter call-center and service-counter volumes"
        }
      ]}
      quote="We stopped asking residents to understand how the county is organized and started meeting them where they already are. One front door means a person doesn't need to know which department does what — they just get what they came for. That is how you earn back a little trust: by making the ordinary things work."
      quoteAuthor="Chief Information Officer"
      quoteRole="County government"
      relatedStudies={[
        {
          title: "Getting Traffic Moving Again for a Growing City",
          metric: "30%",
          label: "less congestion",
          link: "/cases/smart-city-platform",
          image: "/images/industries/transport-traffic.jpg"
        },
        {
          title: "Getting Benefits to Residents Weeks Sooner",
          metric: "50%",
          label: "faster processing",
          link: "/cases/government-benefits-modernization",
          image: "/images/industries/people-commute.jpg"
        }
      ]}
      ctaTitle="Ready to make your services easier to use?"
      ctaDescription="Let's talk about what one front door could mean for the people you serve."
    />
  );
}
