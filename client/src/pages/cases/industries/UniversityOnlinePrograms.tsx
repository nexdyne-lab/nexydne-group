import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Monitor, Users, TrendingUp, Globe, DollarSign, Award, Target, Zap } from "lucide-react";

export default function UniversityOnlinePrograms() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Online Programs Transformation | Education Case Study"
      seoDescription="How a university achieved 3x enrollment growth in online programs through digital transformation and enhanced student experience."
      canonical="/cases/university-online-programs"
      industry="Education"
      industryLink="/industries/education"
      title="University Achieves 3x Growth in Online Programs"
      subtitle="How digital transformation, enhanced student experience, and strategic marketing scaled online enrollment from 5,000 to 15,000 students."
      heroImage="/images/industries/edu-whiteboard.jpg"
      metrics={[
        { value: "3x", label: "Enrollment Growth" },
        { value: "88%", label: "Completion Rate" },
        { value: "$45M", label: "New Revenue" },
        { value: "4.6/5", label: "Student Satisfaction" }
      ]}
      clientContextTitle="A University Lagging in Online Education"
      clientContextIntro="A respected regional university had built its reputation on residential education, but the world was changing. Working adults wanted flexible online options. Competitors were capturing market share with polished online programs. The university's online offerings were an afterthought—recorded lectures, clunky LMS, and minimal student support."
      clientContextBody="Online enrollment had stagnated at 5,000 students while competitors grew 20%+ annually. Completion rates were poor—only 60% of online students finished their programs. The university was losing a generation of learners who couldn't or wouldn't come to campus."
      clientProfile={{
        industry: "Higher Education",
        companySize: "Regional University",
        projectDuration: "24 Months",
        additionalInfo: "5,000 Online Students",
        additionalLabel: "Starting Point"
      }}
      challengeTitle="Online as Afterthought"
      challenges={[
        {
          icon: Monitor,
          title: "Poor Experience",
          description: "Recorded lectures and clunky LMS—not designed for online-first learning."
        },
        {
          icon: Users,
          title: "Low Completion",
          description: "60% completion rate—students dropping out from lack of engagement and support."
        },
        {
          icon: TrendingUp,
          title: "Stagnant Growth",
          description: "Enrollment flat while competitors grew 20%+ annually—losing market share."
        },
        {
          icon: Globe,
          title: "Limited Reach",
          description: "No brand awareness beyond regional market—missing national opportunity."
        }
      ]}
      approachTitle="Online Excellence"
      approachIntro="NexDyne led a comprehensive transformation of online programs: redesigned learning experience, enhanced student support, and strategic marketing to establish the university as an online education leader."
      steps={[
        {
          step: "01",
          title: "Learning Experience Redesign",
          description: "Rebuilt online courses with engaging, interactive content designed for digital delivery. Short video modules, interactive exercises, peer collaboration, and mobile-first design. Not recorded lectures—purpose-built online learning."
        },
        {
          step: "02",
          title: "Student Success Infrastructure",
          description: "Implemented proactive student support: dedicated success coaches, 24/7 tutoring, early warning systems, and community building. Online students received more support than on-campus students, not less."
        },
        {
          step: "03",
          title: "Technology Platform",
          description: "Deployed a modern learning platform with seamless user experience, mobile apps, and integration with career services. Students could learn anywhere, anytime, on any device."
        },
        {
          step: "04",
          title: "Growth Marketing",
          description: "Built a data-driven marketing engine targeting working adults nationally. Personalized outreach, streamlined enrollment, and employer partnerships expanded reach beyond the regional market."
        }
      ]}
      resultsTitle="Online Leadership Achieved"
      results={[
        {
          icon: Users,
          value: "3x",
          label: "Enrollment growth",
          detail: "From 5,000 to 15,000 online students"
        },
        {
          icon: Award,
          value: "88%",
          label: "Completion rate",
          detail: "Up from 60%—industry leading"
        },
        {
          icon: DollarSign,
          value: "$45M",
          label: "New annual revenue",
          detail: "From expanded online programs"
        },
        {
          icon: Target,
          value: "4.6/5",
          label: "Student satisfaction",
          detail: "Online students more satisfied than on-campus"
        }
      ]}
      quote="We transformed online from an afterthought to our growth engine. The new experience is what online learning should be—engaging, supportive, and flexible. Our completion rates are now higher online than on-campus. We're not just competing in online education—we're leading."
      quoteAuthor="Dr. James Wilson"
      quoteRole="Provost"
      relatedStudies={[
        {
          title: "Student Success Platform for University",
          metric: "18%",
          label: "higher graduation rate",
          link: "/cases/university-student-success",
          image: "/images/industries/team-strategy-board.jpg"
        },
        {
          title: "Adaptive Learning for K-12 District",
          metric: "25%",
          label: "improvement in learning outcomes",
          link: "/cases/k12-adaptive-learning",
          image: "/images/industries/women-laptops.jpg"
        }
      ]}
      ctaTitle="Ready to Transform Online Education?"
      ctaDescription="Let's discuss how we can help you build world-class online programs."
    />
  );
}
