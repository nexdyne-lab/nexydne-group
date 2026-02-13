import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';

export default function StreamingRecommendationEngine() {
  return (
    <CaseStudyTemplate
      client="Global Streaming Service"
      industry="Media & Entertainment"
      title="Real-Time Relevance at Scale"
      subtitle="Building a recommendation engine that processes 50,000 events per second to keep viewers watching."
      heroImage="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2669&auto=format&fit=crop"
      challenge={`In the streaming wars, content is king, but discovery is queen. Our client had a massive library of premium content, but users were spending more time scrolling than watching.
      
      Their existing recommendation system was batch-processed nightly, meaning it couldn't react to what a user was watching *right now*. If a user finished a gritty crime drama, the system might still recommend a romantic comedy based on their viewing history from last week. This latency was causing "decision fatigue" and high abandonment rates.`}
      solution={`NexDyne engineered a real-time decision engine capable of ingesting and acting on user signals in milliseconds.
      
      We moved from a batch-based architecture to a stream-processing model using Apache Flink and Kafka. This allowed us to update user profiles instantly. If a user started watching a sci-fi movie, the "Because You Watched" row would update immediately to show similar titles.
      
      We also implemented "Contextual Bandits," a machine learning approach that balances exploitation (showing what we know you like) with exploration (testing new genres) to prevent filter bubbles and keep the discovery experience fresh.`}
      impact={`The shift to real-time personalization fundamentally changed user behavior.
      
      Viewer retention increased by 18% as users found their next watch faster. Average watch time per session grew by 12 minutes, a massive aggregate increase in engagement. The new engine also successfully surfaced "long-tail" content that had previously been buried, increasing the ROI on the client's content library.`}
      metrics={[
        { value: "18%", label: "Increase in viewer retention" },
        { value: "+12m", label: "Increase in average watch time per session" },
        { value: "50k", label: "Events processed per second" }
      ]}
      tags={["Personalization", "AI/ML", "Big Data", "Media"]}
      relatedCapability={{
        title: "Personalization at Scale",
        link: "/capabilities/growth-marketing-sales/personalization-at-scale"
      }}
    />
  );
}
