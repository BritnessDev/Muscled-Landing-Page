function PricingQuestion() {
  const questions = [
    "What is the price of a personalized social media strategy?",
    "How much does it cost to advertise on various social media platforms?",
    "How much money should you invest in social media marketing?",
    "What is the cost of social media marketing?",
    "Pricing for Muscled social media management",
    "FAQs about social media pricing",
  ];

  return (
    <section className="my-28 p-4 md:p-[100px] flex flex-col gap-8 items-center bg-accent">
      <h3 className="text-center">
        Pricing Questions in Social Media Management
      </h3>

      <div className="grid gap-8 mt-6 md:mt-8 w-full md:grid-cols-2">
        {questions.map((q, i) => (
          <div
            key={i}
            className="text-grey text-[20px] leading-[30px] underline"
          >
            {q}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingQuestion;
