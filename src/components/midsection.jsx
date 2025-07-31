const steps = [
  {
    step: "Step-1",
    titleLine1: "Choose Your Cosmetic",
    titleLine2: "Products 🛒",
    description:
      "Explore our curated catalogue of herbal formulations — from face cleansers to spa kits. Add them to your cart to show interest.",
  },
  {
    step: "Step-2",
    title: "Fill A Form With Your Brand Details ✍️",
    description:
      "Let us know your branding, packaging preferences, and MOQ expectations. A quick form and you're done.",
  },
  {
    step: "Step-3",
    title: "Sit Back & Relax ⏳",
    description:
      "Our R&D and account team will reach out to finalize samples, timelines, and pricing. We handle the rest while you build your brand.",
  },
];

const Midsection = () => {
  return (
    <div
      className="flex justify-center p-6 bg-[#f9f9f9] overflow-x-auto"
    >
      <div className="flex gap-6 flex-nowrap max-w-[1400px] w-full justify-center custom-no-wrap">
        {steps.map((item, index) => (
          <div
            key={index}
            className="w-[389px] h-[268px] bg-white rounded-[16px] p-5 overflow-hidden z-10 flex flex-col gap-[14px] border border-[#E6E6E6] shadow-sm"
          >
            <p className="text-[24px] leading-[1.2em] font-bold text-[#2B7A78] font-[Lora]">
              {item.step}
            </p>

            {index === 0 ? (
              <p className="text-[22px] leading-[1.2em] font-medium text-black font-[Lora] opacity-90">
                {item.titleLine1}
                <br />
                {item.titleLine2}
              </p>
            ) : (
              <p className="text-[22px] leading-[1.2em] font-medium text-black font-[Lora] opacity-90">
                {item.title}
              </p>
            )}

            <p className="text-[18px] leading-[1.5em] font-normal text-black font-[Mulish] opacity-90">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Midsection;
