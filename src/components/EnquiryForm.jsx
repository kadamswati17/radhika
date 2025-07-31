const EnquiryForm = () => {
  return (
    <section className="bg-[#7E9E86] w-full py-12  h-[#702px]">
      <div className="max-w-4xl mx-auto bg-[#7E9E86] rounded-xl px-6 py-8 pb-28">
        <h2
          className="text-white text-xl md:text-3xl font-semibold text-center mb-2"
          style={{ fontFamily: "Lora" }}
        >
          Send Us Your Enquiry
        </h2>
        <p className="text-white text-center mb-8">
          We will get back to you within 24 hours.
        </p>

        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="flex-1 px-4 py-3 rounded-md focus:outline-none w-full placeholder-[#A9B6A2]"
            />
            <input
              type="email"
              placeholder="Email*"
              className="flex-1 px-4 py-3 rounded-md focus:outline-none w-full placeholder-[#A9B6A2]"
            />
          </div>

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-md focus:outline-none placeholder-[#A9B6A2]"
          />

          <select className="w-full px-4 py-3 rounded-md focus:outline-none text-[#A9B6A2]">
            <option>Our Products*</option>
            <option>Skin Care</option>
            <option>Hair Care</option>
            <option>Wellness</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
