import Button from "../Components/Button";

export default function Subscribe() {
  return (
    <section
      id="contact-us"
      className="max-container padding-x py-16 sm:py-32 w-full flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h2 className="heading-section leading-[68px] lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates </span> &
        NewsLetter
      </h2>
      <div className="lg:max-w-[40%] w-full rounded-full flex items-center max-sm:flex-col gap-5 p-2.5  sm:border sm:border-slate-gray">
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Subscribe@nike.com"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
}
