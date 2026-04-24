import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';

export function LogisticsDriverExperience() {
  return (
    <CaseStudyTemplate
      client="Global Logistics Firm"
      industry="Logistics & Supply Chain"
      title="Empowering the Last Mile: Driver Experience Overhaul"
      subtitle="Reducing delivery errors and improving retention by treating drivers as the primary user."
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop"
      challenge={`In the high-pressure world of last-mile delivery, driver retention is a constant struggle. Our client was facing a turnover rate of 60% annually, costing millions in recruitment and training.
      
      Drivers reported that their delivery app was clunky, inaccurate, and disconnected from the reality of their routes. It forced them to switch between multiple devices for navigation, scanning, and proof-of-delivery, leading to errors and frustration. The disconnect between the digital tools and the physical warehouse operations meant that drivers often spent unpaid time searching for packages that were loaded incorrectly.`}
      solution={`We applied a "Driver-First" design philosophy. Our team rode along with drivers for weeks to understand their cognitive load and physical workflow.
      
      We rebuilt the driver app from the ground up, integrating route optimization, scanning, and communication into a single, intuitive interface. But we didn't stop at the screen. We worked with warehouse operations to redesign the loading process, ensuring that packages were organized in "reverse-drop" order, matching the app's route manifest.
      
      We also introduced a "Driver Voice" feedback loop, allowing drivers to flag route issues (like incorrect gate codes or dangerous dogs) that would permanently update the system for future drivers.`}
      impact={`The impact on the workforce was immediate. By reducing the cognitive load and physical friction of the job, the client saw a dramatic improvement in morale and performance.
      
      Delivery errors dropped by 28% as the new app guided drivers more effectively. Driver retention improved by 40% year-over-year, saving the company over $3M in recruitment costs. The "Driver Voice" feature alone corrected over 50,000 address data points in the first six months.`}
      metrics={[
        { value: "28%", label: "Reduction in delivery errors" },
        { value: "40%", label: "Improvement in driver retention" },
        { value: "$3M+", label: "Annual savings in recruitment costs" }
      ]}
      quote={{
        text: "For the first time, I feel like the technology is working for me, not against me. It makes the hard days much easier.",
        author: "James M.",
        role: "Senior Delivery Driver"
      }}
      tags={["Service Design", "Logistics", "Employee Experience", "Mobile App"]}
      relatedCapability={{
        title: "Service Design",
        link: "/capabilities/growth-marketing-sales/service-design"
      }}
    />
  );
}

export default LogisticsDriverExperience;
