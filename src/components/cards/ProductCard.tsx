import { useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { MdArrowForwardIos } from "react-icons/md";
const ProductCard = ({ productData }: { productData: IProductType }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (type: string) => {
    if (type === "NEXT") {
      setActiveIndex((activeIndex + 1) % productData?.images?.length);
    } else {
      setActiveIndex(
        !activeIndex ? productData?.images?.length - 1 : activeIndex - 1
      );
    }
  };

  return (
    <div
      className={`flex flex-col items-center text-center border border-gray-300`}
    >
      <div className="group relative">
        {productData?.images?.map((url: string, i: number) => (
          <img
            key={i} //? I always use unique image-id(fetched from API) as key. But as it is a dummy data so i use "index" as a key. And i know Index is not recommended to use as a key.
            src={url}
            alt={productData?.title}
            className={`w-full h-full object-cover object-center border ${
              activeIndex === i ? "block" : "hidden"
            }`}
          />
        ))}
        <div className="absolute inset-0 z-10 w-full h-full flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500">
          <button
            className="bg-white/90 p-2 rounded-sm"
            onClick={() => handleClick("PREV")}
          >
            <MdArrowForwardIos className="rotate-180" />
          </button>
          <button
            className="bg-white/90 p-2 rounded-sm"
            onClick={() => handleClick("NEXT")}
          >
            <MdArrowForwardIos className="" />
          </button>
        </div>
        <div className="flex justify-center items-center gap-1 mt-2">
          {productData?.images.map((_, c) => (
            <span
              key={c} //? I always use unique image-id(fetched from API) as key. But as it is a dummy data so i use "index" as a key. And i know Index is not recommended to use as a key.
              className={`p-0.5 rounded-full ${
                activeIndex === c ? "bg-primary" : "bg-gray-200"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <h6 className="text-sm font-medium pt-5 pb-1">{productData?.title}</h6>
      <p className="flex items-center text-sm pb-2">
        <TiStarFullOutline />
        <span className="text-gray-700">{productData?.rating}</span>
      </p>
    </div>
  );
};

export default ProductCard;
