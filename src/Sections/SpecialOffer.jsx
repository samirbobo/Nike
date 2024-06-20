import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

export default function SpecialOffer() {
  return (
    <section className="padding flex justify-center items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <article className="flex-1">
        <h2 className="font-palanquin capitalize font-bold text-4xl">
          <span className="text-coral-red"> Special </span> Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex flex-wrap gap-4 mt-12">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </article>
    </section>
  );
}
