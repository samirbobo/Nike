import { Link } from "react-router-dom";
import { star } from "../assets/icons";

export default function PopularProductCard({ imgURL, name, price, id }) {
  return (
    <div>
      <Link to={`/products/${id}`}>
        <img
          src={imgURL}
          alt="img of shoe"
          className="w-[282px] h-[282px] hover:scale-110 transition-transform duration-200"
        />
      </Link>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="star" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="my-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <span className="text-coral-red font-semibold text-2xl font-montserrat leading-normal">
        {price}
      </span>
    </div>
  );
}
