import { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    product: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://script.google.com/macros/s/AKfycbwANqdVLwh4i2aKL9OQdDIiN8C2ZEL0WV5rJTxRwQYk/dev", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("Enquiry submitted successfully!");
          setFormData({ fullName: "", email: "", phone: "", product: "" });
        } else {
          alert("Error submitting enquiry.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Submission failed.");
      });
  };

  return (
    <section className="bg-[#7E9E86] w-full py-12">
      <div className="max-w-4xl mx-auto bg-[#7E9E86] rounded-xl px-6 py-8 pb-28">
        <h2 className="text-white text-xl md:text-3xl font-semibold text-center mb-2" style={{ fontFamily: "Lora" }}>
          Send Us Your Enquiry
        </h2>
        <p className="text-white text-center mb-8">We will get back to you within 24 hours.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded-md focus:outline-none w-full placeholder-[#A9B6A2]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded-md focus:outline-none w-full placeholder-[#A9B6A2]"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md focus:outline-none placeholder-[#A9B6A2]"
          />

          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md focus:outline-none text-[#A9B6A2]"
          >
            <option value="">Our Products*</option>
            <option value="Skin Care">Skin Care</option>
            <option value="Hair Care">Hair Care</option>
            <option value="Wellness">Wellness</option>
          </select>

          <button
            type="submit"
            className="w-full bg-white text-[#7E9E86] font-semibold py-3 px-6 rounded-md mt-4 hover:bg-gray-100 transition-all"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
