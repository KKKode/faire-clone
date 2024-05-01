import { Breadcrumb } from "@/components/core";
import {
  Advertisement,
  ExploreSection,
  Faq,
  FeatureSection,
} from "@/components/home";
import { PublicLayout } from "@/layouts";

export default function Home() {
  return (
    <PublicLayout>
      <main>
        <Breadcrumb />
        <FeatureSection />
        <ExploreSection />
        <Faq />
        <Advertisement />
        <section className="main-container top-spacing bottom-spacing">
          <p className="text-sm tracking-wider pb-4">
            Discover products for your store on the Faire wholesale marketplace
          </p>
          <p className="description">
            At Faire, we are empowering small business owners and independent
            brands to buy and sell wholesale goods online. If you are a retailer
            shopping for wholesale products, Faire offers you straight-forward
            financial terms and logistics that were previously only available to
            large retail chains. We also provide powerful sales, marketing, and
            analytics tools for brands, so sellers can simplify their wholesale
            businesses and expand their reach of independent shop owners.
          </p>
        </section>
      </main>
    </PublicLayout>
  );
}
