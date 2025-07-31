import { useRef } from "react";

import Midsection from "../components/midsection";
import BlogSection from "../components/blogstrend";
import EnquiryForm from "../components/EnquiryForm";
import PageContract from "./pageContract";
import OurProducts from "../components/ourproducts";
import ProductsGrid from "../components/ProductsGrid";

const Contract = () => {
  const productRef = useRef(null);
  const enquiryRef = useRef(null);

  return (
    <div>
      <PageContract
        scrollToEnquiry={() =>
          enquiryRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToProduct={() =>
          productRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <Midsection />

      <div ref={productRef}>
        <OurProducts />
        <ProductsGrid />
      </div>

      <div ref={enquiryRef}>
        <EnquiryForm />
      </div>

      <BlogSection />
    </div>
  );
};

export default Contract;

// const Contract = () => {
//   return (
//     <section className="py-16 px-6 text-center">
//       <h2 className="text-3xl font-bold text-[#264653] mb-4">About Us</h2>
//       <p className="text-gray-700 max-w-2xl mx-auto">
//         We are committed to delivering high-quality herbal and skincare
//         manufacturing services tailored to your brand needs.
//       </p>
//     </section>
//   );
// };

// export default Contract;
