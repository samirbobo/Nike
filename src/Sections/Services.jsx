import { services } from "../constants/index";

export default function Services() {
  return (
    <section className="max-container padding-x py-10 grid gap-9 lg:grid-cols-3 md:grid-cols-2">
      {services.map((service) => (
        <div
          key={service.label}
          className="px-10 py-16 rounded-[20px] shadow-3xl bg-white"
        >
          <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <img
              src={service.imgURL}
              alt="service image"
              width={24}
              height={24}
            />
          </div>
          <h2 className="font-palanquin font-bold leading-normal text-3xl mt-5">
            {service.label}
          </h2>
          <p className="text-slate-gray font-montserrat leading-normal break-words text-lg mt-3">
            {service.subtext}
          </p>
        </div>
      ))}
    </section>
  );
}
