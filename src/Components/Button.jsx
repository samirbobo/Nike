export default function Button({ label, iconURL }) {
  return (
    <button className="py-4 px-7 rounded-full text-lg leading-none border-coral-red justify-center items-center text-white font-montserrat bg-coral-red flex gap-2">
      {label}

      <img
        src={iconURL}
        alt="icon img"
        className="ml-2 w-5 h-5 bg-white rounded-full"
      />
    </button>
  );
}
