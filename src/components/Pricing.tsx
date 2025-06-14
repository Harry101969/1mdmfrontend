import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Standard",
      price: "$3,499",
      period: "/year",
      monthlyPrice: "$291.5",
      monthlyPeriod: "/month",
      features: [
        { name: "Post products", value: "Unlimited" },
        { name: "Receive & respond to inquiries", value: "Unlimited" },
        { name: "Keyword ad spend", value: "USD 500" },
        { name: "Showcased products", value: "20" },
        { name: "Respond to RFQs", value: "60/month" },
        { name: "Keywords Trends", value: false },
        { name: "180 day traffic accelerator", value: false },
        { name: "Sub accounts", value: "5" },
        { name: "Worldwide Shipping (over 60+ countries)", value: "Yes" },
        { name: "Onboarding (for free)", value: true },
        { name: "Product posting service", value: "75" },
        { name: "Minisite creation", value: "Yes" },
        { name: "Feature configuration", value: false },
      ],
      customerService: "Dedicated account manager",
      keySuccessProgram: "Not available",
      buttonText: "Select & Pay",
      buttonClass: "bg-red-500 hover:bg-red-600 text-white",
    },
    {
      name: "Standard Extended",
      price: "$5,299",
      period: "/year",
      monthlyPrice: "$441.5",
      monthlyPeriod: "/month",
      badge: "2-year with 20% Savings",
      badgeClass: "bg-red-500 text-white",
      popular: true,
      features: [
        { name: "Post products", value: "Unlimited" },
        { name: "Receive & respond to inquiries", value: "Unlimited" },
        { name: "Keyword ad spend", value: "USD 500+50" },
        { name: "Showcased products", value: "20" },
        { name: "Respond to RFQs", value: "60/month" },
        { name: "Keywords Trends", value: true },
        { name: "180 day traffic accelerator", value: true },
        { name: "Sub accounts", value: "5" },
        { name: "Worldwide Shipping (over 60+ countries)", value: "Yes" },
        { name: "Onboarding (for free)", value: true },
        { name: "Product posting service", value: "75" },
        { name: "Minisite creation", value: "Yes" },
        { name: "Feature configuration", value: true },
      ],
      customerService: "Dedicated account manager",
      keySuccessProgram: "Not available",
      buttonText: "Select & Pay",
      buttonClass: "bg-red-500 hover:bg-red-600 text-white",
    },
    {
      name: "Premium",
      price: "$6,999",
      period: "/year",
      monthlyPrice: "$583.2",
      monthlyPeriod: "/month",
      features: [
        { name: "Post products", value: "Unlimited" },
        { name: "Receive & respond to inquiries", value: "Unlimited" },
        { name: "Keyword ad spend", value: "USD 100+150" },
        { name: "Showcased products", value: "20" },
        { name: "Respond to RFQs", value: "60/month" },
        { name: "Keywords Trends", value: true },
        { name: "180 day traffic accelerator", value: true },
        { name: "Sub accounts", value: "5" },
        { name: "Worldwide Shipping (over 60+ countries)", value: "No" },
        { name: "Onboarding (for free)", value: true },
        { name: "Product posting service", value: "100" },
        { name: "Minisite creation", value: "Yes" },
        { name: "Feature configuration", value: true },
      ],
      customerService: "NYC Based Key Account Manager",
      keySuccessProgram: "Not available",
      buttonText: "Select & Pay",
      buttonClass: "bg-red-500 hover:bg-red-600 text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Reach millions of B2B buyers globally
          </h1>
          <p className="text-xl text-gray-600">
            Choose an 1mdm.com seller plan to launch your new business growth
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 rounded-lg p-8 ${
                  plan.popular ? "border-red-500" : "border-gray-200"
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-semibold ${plan.badgeClass}`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">{plan.monthlyPrice}</span>
                    <span>{plan.monthlyPeriod}</span>
                  </div>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-colors ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Platform features
                    </h4>
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className="text-gray-700">{feature.name}</span>
                          <span className="font-medium text-gray-900">
                            {typeof feature.value === "boolean" ? (
                              feature.value ? (
                                <Check size={16} className="text-green-500" />
                              ) : (
                                <span className="text-gray-400">-</span>
                              )
                            ) : (
                              feature.value
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Customer service
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-700">Account Manager</span>
                        <span className="font-medium text-gray-900">
                          {plan.customerService}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-700">
                          US-based Key Success Program (KSP)
                        </span>
                        <span className="font-medium text-gray-900">
                          {plan.keySuccessProgram}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold mt-8 transition-colors ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
