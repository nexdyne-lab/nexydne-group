import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function HealthcarePatientPortal() {
  return (
    <CaseStudyTemplate
      client="Regional Hospital System"
      industry="Healthcare · Digital Health"
      title="Hospital Launches Patient Portal Reducing Administrative Calls 65%"
      subtitle="Regional hospital system builds mobile-first patient portal for appointment scheduling, test results, and prescription refills—cutting phone volume and improving satisfaction scores."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
      challenge={`A 450-bed regional hospital system serving 12 counties in the Midwest faced overwhelming administrative burden from patient phone calls. Their call center received 8,500 calls per week, with 65% related to appointment scheduling, test result inquiries, and prescription refill requests. Average hold times exceeded 12 minutes during peak hours, leading to patient frustration and staff burnout. The hospital's legacy patient portal, built on outdated technology, had only 18% adoption among patients and lacked mobile optimization.

The hospital needed a modern, mobile-first patient portal that would empower patients to manage their healthcare independently while reducing administrative workload. The solution had to integrate with their Epic EHR system, support biometric authentication for security, and provide intuitive navigation for patients of all ages and technical abilities. With patient satisfaction scores declining and staff turnover increasing due to call center stress, the hospital set an aggressive 6-month timeline to design, develop, and launch the new portal.`}
      solution={`NEXDYNE partnered with the hospital's IT and clinical teams to design and develop a comprehensive patient portal available as both a responsive web application and native iOS/Android mobile apps. We conducted extensive user research with 120 patients across different age groups and technical proficiency levels to inform the UX design. The portal featured appointment scheduling with real-time provider availability, secure messaging with care teams, test result viewing with plain-language explanations, prescription refill requests, and bill payment functionality.

Our development team built the portal using React Native for mobile apps and React for the web application, ensuring code reuse and consistent user experience across platforms. We implemented HL7 FHIR APIs to integrate seamlessly with the hospital's Epic EHR system, enabling real-time data synchronization for appointments, test results, and medical records. Biometric authentication (Face ID, Touch ID, fingerprint) provided secure yet convenient access. Push notifications alerted patients to new test results, upcoming appointments, and prescription refill statuses.`}
      impact={`The patient portal launched on schedule after 5 months of development and 1 month of pilot testing with 500 patients. Within 6 months of full launch, 72% of the hospital's 85,000 active patients had registered for the portal, far exceeding the initial 50% adoption target. Administrative phone calls dropped 65%, reducing average hold times from 12 minutes to under 3 minutes. Patient satisfaction scores increased 18 percentage points, with portal convenience cited as the primary driver.

The mobile apps achieved 4.7-star ratings on both iOS and Android app stores, with patients praising the intuitive interface and convenience of managing healthcare from their phones. The hospital reduced call center staffing costs by $420,000 annually while improving patient experience. Prescription refill turnaround time decreased from 48 hours to 6 hours due to automated routing and reduced phone tag.`}
      metrics={[
        { value: "65%", label: "Reduction in administrative calls" },
        { value: "72%", label: "Patient portal adoption rate" },
        { value: "4.7★", label: "App Store rating" }
      ]}
      tags={["Healthcare", "Mobile App", "Patient Portal", "Technology"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}
