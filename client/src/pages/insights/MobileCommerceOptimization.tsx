import InsightArticleV2 from "@/components/InsightArticleV2";

export function MobileCommerceOptimization() {
  const sections = [
    { id: "speed", label: "Speed first" },
    { id: "thumb-ux", label: "Thumb-friendly UX" },
    { id: "checkout", label: "Frictionless checkout" },
    { id: "pwa", label: "PWA vs. native" },
  ];

  const relatedInsights = [
    { title: "The Headless Commerce Guide", category: "E-Commerce", link: "/insights/headless-commerce-guide", image: "/images/capabilities/cap-retail-data.jpg" },
    { title: "The Economics of E-Commerce", category: "Growth & Marketing", link: "/insights/ecommerce-economics", image: "/images/case-bb-ecommerce-platform-launch.jpg" },
    { title: "AI in E-Commerce", category: "Growth & Marketing", link: "/insights/ai-in-ecommerce", image: "/images/case-data-retail.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Mobile Strategy"
      title="Optimizing for the Mobile-First Shopper"
      subtitle="Mobile traffic has overtaken desktop, but conversion rates still lag. Here are the technical strategies to close the gap and capture revenue on the small screen."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      publishDate="September 28, 2025"
      readTime="6 min"
      sections={sections}
      keyTakeaways={[
        "The 'Mobile Gap' is real: a large share of traffic arrives on mobile, yet it converts to far less revenue—usually because of friction.",
        "Speed is the first feature. On mobile, every second of load time reduces conversion, so image optimization, code splitting, and lazy loading are non-negotiable.",
        "Design for the thumb: place primary CTAs at the bottom, size touch targets to at least 44x44 pixels, and drop hover states that don't exist on touch screens.",
        "Minimize typing at checkout with digital wallets, guest checkout, address auto-complete, and the right keyboards—and consider a high-performance PWA over a native app.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        It's a common story: 70% of your traffic is mobile, but it only accounts for 40% of your revenue.
        The "Mobile Gap" is real, and it's usually caused by friction. Mobile users are impatient,
        distracted, and dealing with smaller screens and spotty connections.
      </p>

      <h2 id="speed">Speed is feature #1</h2>
      <p>
        On mobile, every second of load time reduces conversion by 20%. You cannot afford bloat.
      </p>
      <ul>
        <li><strong>Image optimization:</strong> Serve next-gen formats (WebP, AVIF) sized specifically for mobile viewports.</li>
        <li><strong>Code splitting:</strong> Only load the JavaScript needed for the current view.</li>
        <li><strong>Lazy loading:</strong> Defer off-screen images and heavy scripts until the user scrolls.</li>
      </ul>

      <h2 id="thumb-ux">Thumb-friendly UX</h2>
      <p>
        The "Thumb Zone" is the area of the screen a user can easily reach with one hand.
      </p>
      <h3>Design rules</h3>
      <ul>
        <li>Place primary CTAs (Add to Cart, Checkout) at the bottom of the screen.</li>
        <li>Ensure touch targets are at least 44x44 pixels to prevent "fat finger" errors.</li>
        <li>Avoid hover states; they don't exist on touch screens.</li>
      </ul>

      <h2 id="checkout">Frictionless checkout</h2>
      <p>
        Typing on a phone is a pain. Minimize it.
      </p>
      <ul>
        <li><strong>Digital wallets:</strong> Apple Pay and Google Pay are mandatory. They reduce checkout to a fingerprint scan.</li>
        <li><strong>Guest checkout:</strong> Don't force account creation before purchase.</li>
        <li><strong>Address auto-complete:</strong> Use the Google Places API to fill addresses with a few keystrokes.</li>
        <li><strong>Numeric keypads:</strong> Trigger the right keyboard for phone and credit card fields.</li>
      </ul>

      <h2 id="pwa">PWA vs. native app</h2>
      <p>
        Do you need an app? Maybe not. Progressive Web Apps (PWAs) offer an app-like experience
        (offline mode, push notifications, home screen icon) directly in the browser, without the
        friction of an app store download. For many retailers, a high-performance PWA yields better ROI
        than a native app.
      </p>
    </InsightArticleV2>
  );
}
