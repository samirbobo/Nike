import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";
import { useState } from "react";
export default function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section className="xl:padding-l wide:padding-r padding-b">
      <section
        id="home"
        className="w-full min-h-screen max-container justify-center flex xl:flex-row flex-col gap-10"
      >
        <article className="relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer collections
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:whitespace-nowrap xl:bg-white relative lg:z-10 pr-10">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray mt-6 mb-14 text-lg leading-8 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button label="Shop Now" iconURL={arrowRight} link="#products" />
          <div className="flex flex-wrap justify-start items-start mt-20 gap-16 w-full">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="font-montserrat text-slate-gray leading-8">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </article>

        <div className="relative flex flex-1 justify-center items-center bg-cover bg-center bg-hero bg-primary xl:min-h-screen max-xl:py-40">
          <img
            src={bigShoeImg}
            alt="big show img"
            width={610}
            height={502}
            className="object-contain relative z-10"
          />

          <div className="flex absolute -bottom-[5%] sm:left-[10%] sm:gap-6 gap-4 max-sm:px-6">
            {shoes.map((image, index) => (
              <ShoeCard
                key={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
