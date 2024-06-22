import { services } from "../constants/index";

export default function Services() {
  return (
    <section className="max-container padding-x py-10 grid gap-9 lg:grid-cols-3 md:grid-cols-2">
      {services.map((service) => (
        <div
          key={service.label}
          className="px-10 py-16 group rounded-[20px] shadow-3xl bg-white overflow-hidden"
        >
          <div className="w-11 h-11 flex justify-center transition-all duration-1000 ease-in-out items-center bg-coral-red group-hover:shadow-coral rounded-full">
            <img
              src={service.imgURL}
              alt="service image"
              width={24}
              height={24}
            />
          </div>
          <h2 className="font-palanquin font-bold leading-normal delay-200 text-3xl mt-5 group-hover:text-white">
            {service.label}
          </h2>
          <p className="text-slate-gray font-montserrat leading-normal delay-200 break-words text-lg mt-3 group-hover:text-white">
            {service.subtext}
          </p>
        </div>
      ))}
    </section>
  );
}
