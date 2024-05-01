import FilterSection from "./FilterSection";
import { ProductCard } from "../cards";
import { PRODUCT_ARR } from "@/constants";
import { Fragment } from "react";
import { SignupButton } from "../core";

const FeatureSection = () => {
  return (
    <section className="main-container">
      <div className="top-spacing bottom-spacing flex flex-col justify-center text-center">
        <h2 className="title mb-2">All European brands</h2>
        <p className="description">
          Shop independent brands from around the world at <br /> wholesale
          prices.
        </p>
      </div>
      <FilterSection />
      <section className="w-full grid grid-cols-2 lg:grid-cols-5 gap-x-2.5 gap-y-4 pt-4">
        {PRODUCT_ARR?.map((item) => (
          <Fragment key={item._id}>
            {item?.class ? (
              <div className="w-full flex flex-col items-center justify-center text-center gap-3 col-span-2 border p-4">
                <h2 className="title">Get 50% off your first order</h2>
                <p className="description">
                  Shop from more than 100,000 independent brands.
                </p>
                <SignupButton title="Sign Up to Shop" className="btn-primary" />
                <p className="text-xs text-gray-700 tracking-wider">
                  Maximum discount $100. Offer ends 7 days after signup.
                </p>
              </div>
            ) : (
              <ProductCard productData={item} />
            )}
          </Fragment>
        ))}
      </section>
    </section>
  );
};

export default FeatureSection;
