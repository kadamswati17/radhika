const EnquiryForm = () => {
  return (
    <section className="bg-[#7E9E86] w-full py-12">
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

        {/* Netlify form setup */}
        <form
          name="enquiry"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-4"
        >
          {/* Hidden input for Netlify bot field */}
          <input type="hidden" name="form-name" value="enquiry" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              required
              className="flex-1 px-4 py-3 rounded-md focus:outline-none w-full placeholder-[#A9B6A2]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className="flex-1 px-4 py-3 rounded-md focus:outline-none w-full placeholder-[#A9B6A2]"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-md focus:outline-none placeholder-[#A9B6A2]"
          />

          <select
            name="product"
            className="w-full px-4 py-3 rounded-md focus:outline-none text-[#A9B6A2]"
            required
          >
            <option value="">Our Products*</option>
            <option value="Skin Care">Skin Care</option>
            <option value="Hair Care">Hair Care</option>
            <option value="Wellness">Wellness</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-white text-[#7E9E86] px-6 py-2 rounded-md font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
