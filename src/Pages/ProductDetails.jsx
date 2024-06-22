import { useParams } from "react-router-dom";
import Button from "../Components/Button";
import { products } from "../constants";
import { star } from "../assets/icons";
import { useEffect } from "react";

export default function ProductDetails() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="padding-x pt-12 sm:pt-24 flex max-lg:flex-col items-center gap-10 w-full max-container">
      <article className="flex-1">
        <h2 className="heading-section lg:max-w-lg mb-4">
          {products[id - 1].name}
        </h2>

        <div className="mt-8 flex items-center justify-start gap-2.5">
          <p className="font-semibold text-2xl font-montserrat leading-normal">
            Rating:
          </p>
          <img src={star} alt="star" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>

        <p className="font-semibold text-2xl font-montserrat leading-normal my-4">
          Price:
          <span className="text-coral-red ml-3">{products[id - 1].price}</span>
        </p>

        <p className="lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="lg:max-w-lg mt-6 mb-12 info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button label="Go Back" link2="/" />
      </article>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={products[id - 1].imgURL}
          alt="product detail"
          width={450}
          height={400}
          className="object-contain"
        />
      </div>
    </section>
  );
}
