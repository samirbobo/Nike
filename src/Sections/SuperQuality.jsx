import { shoe8 } from "../assets/images";
import Button from "../Components/Button";

export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className="padding flex max-lg:flex-col items-center gap-10 w-full max-container"
    >
      <article className="flex-1">
        <h2 className="font-palanquin capitalize font-bold lg:max-w-lg text-4xl mb-4">
          We Provide You
          <span className="text-coral-red"> Super Quality </span> Shoes
        </h2>
        <p className="lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="lg:max-w-lg mt-6 mb-12 info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button label="View details" />
      </article>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}
