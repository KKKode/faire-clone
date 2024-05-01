import { EXPLORE_ARR } from "@/constants";
import { useRef } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";

const ExploreSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };
  const navigationRef = useRef<any>(null);
  const handlePrev = () => {
    navigationRef?.current?.slickPrev();
  };
  const handleNext = () => {
    navigationRef?.current?.slickNext();
  };
  return (
    <section className="main-container top-spacing">
      <aside className="w-full flex items-center justify-between">
        <div></div>
        <h2 className="title">Keep exploring</h2>
        <button className="underline text-sm">All Brands</button>
      </aside>
      <aside className="relative top-spacing">
        <button
          onClick={handlePrev}
          type="button"
          className=" absolute top-[55%] -translate-y-1/2 right-full z-20"
        >
          <MdArrowForwardIos className="rotate-180" />
        </button>
        <button onClick={handleNext} type="button">
          <MdArrowForwardIos className=" absolute top-1/2 -translate-y-1/2 left-full z-20" />
        </button>
        <div className="w-full overflow-hidden explore-slick-slider">
          <Slider ref={navigationRef} {...settings}>
            {EXPLORE_ARR?.map((item: IExploreCardType) => (
              <div key={item?._id}>
                <div className="w-full flex flex-col items-center text-center gap-4">
                  <img
                    src={item?.imageUrl}
                    alt={item?.title}
                    className="w-full px-2"
                  />
                  <button className="underline">{item?.title}</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </aside>
    </section>
  );
};

export default ExploreSection;
