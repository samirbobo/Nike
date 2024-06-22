import { Link } from "react-router-dom";

export default function Button({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  link,
  link2,
}) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red hover:bg-[#DD3925] transition-colors duration-200 text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {link ? (
        <a href={link}>{label}</a>
      ) : link2 ? (
        <Link to={link2}>{label}</Link>
      ) : (
        label
      )}

      {iconURL && (
        <img
          src={iconURL}
          alt="icon img"
          className="ml-2 w-5 h-5 bg-white rounded-full"
        />
      )}
    </button>
  );
}
