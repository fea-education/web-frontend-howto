export default function WhyChooseUs() {
  const features = [
    {
      emoji: "🚚",
      title: "Free Shipping",
      description:
        "Free shipping on orders over $50. Fast and reliable delivery worldwide.",
    },
    {
      emoji: "🔒",
      title: "Secure Payments",
      description:
        "Your payment information is encrypted and secure with industry-standard protection.",
    },
    {
      emoji: "🔄",
      title: "Easy Returns",
      description:
        "30-day return policy. No questions asked if you're not completely satisfied.",
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose ShopHub?</h2>
          <p className="section-subtitle">
            We're committed to providing the best shopping experience
          </p>
        </div>

        <div className="grid grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <span className="text-6xl">{feature.emoji}</span>
              </div>
              <h3 className="mb-3">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
