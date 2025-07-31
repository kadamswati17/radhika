import blogImg from "../assests/goal1.png";

const blogPosts = [
  {
    id: 1,
    title: "Ayurvedic + Scientific Formulation Synergy",
    description:
      "We don’t just follow trends — our R&D process combines traditional Ayurvedic knowledge with modern lab testing to ensure efficacy and safety.",
    date: "Radhika Herbals | July 23, 2024",
    image: blogImg,
  },
  {
    id: 2,
    title: "GMP & ISO-Certified Facility",
    description:
      "Our production facilities are certified, monitored, and designed for safe and hygienic operations — from sourcing to sealing.",
    date: "Radhika Herbals | July 23, 2024",
    image: blogImg,
  },
  {
    id: 3,
    title: "Herbal Ingredient Integrity",
    description:
      "We source ingredients like Neem, Aloe Vera, and Turmeric from trusted farms, tested for potency, stability, and purity at every stage.",
    date: "Radhika Herbals | July 23, 2024",
    image: blogImg,
  },
  {
    id: 4,
    title: "Custom Branding, Packaging & Labelling",
    description:
      "We offer full flexibility in packaging materials, label designs, and finishing — including eco-friendly, minimalistic, and luxe options to suit your market.",
    date: "Radhika Herbals | July 23, 2024",
    image: blogImg,
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32">
        <div className="text-center mb-12">
          <h2
            className="text-[28px]  text-gray-700 text-center"
            style={{ fontFamily: "Lora" }}
          >
            Why Brands Trust Our Manufacturing Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 border border-[#A9B6A2] flex flex-col"
            >
              <div className="px-6 pt-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div
                  className="text-sm text-gray-500 mb-3"
                  style={{ fontFamily: "Open Sans", fontSize: "14px" }}
                >
                  {post.date}
                </div>

                <h3
                  className="mb-3 leading-tight"
                  style={{
                    color: "#264653",
                    fontFamily: "Lora",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {post.title}
                </h3>

                <p
                  className="mb-4 text-[#4B6570] text-[16px] leading-relaxed"
                  style={{ fontFamily: "Mulish" }}
                >
                  {post.description}
                </p>

                <div className="mt-auto text-center">
                  <button
                    className="group inline-flex items-center font-semibold text-white px-14 py-2 rounded-[8px] transition"
                    style={{
                      backgroundColor: "#A9B6A2",
                      border: "2px solid #A9B6A2",
                    }}
                  >
                    Read More<span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
