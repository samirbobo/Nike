import { products } from "../constants";
import PopularProductCard from "../Components/PopularProductCard";
export default function PopularProduct() {
  return (
    <section id="products" className="padding max-container max-sm:mt-12">
      <h2 className="heading-section">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>

      <p className="text-slate-gray mt-2 font-montserrat lg:max-w-lg">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>

      <article className="mt-16 flex sm:gap-6 gap-14 justify-center flex-wrap">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </article>
    </section>
  );
}
