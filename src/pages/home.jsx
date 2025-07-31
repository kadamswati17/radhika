import LandingPage from "./landing";
import OurProducts from "../components/ourproducts";
import ProductsGrid from "../components/ProductsGrid";
import OurCertifications from "../components/ourcertifications";
import BlogSection from "../components/blogstrend";
import EnquiryForm from "../components/EnquiryForm";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <OurProducts />
      <ProductsGrid />
      <OurCertifications />
      <BlogSection />
      <EnquiryForm />
    </div>
  );
}
