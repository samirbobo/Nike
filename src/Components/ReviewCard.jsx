import { star } from "../assets/icons";

export default function ReviewCard({ customerName, imgURL, feedback, rating }) {
  return (
    <div
      key={customerName}
      className="flex justify-center items-center flex-col gap-4"
    >
      <img
        src={imgURL}
        alt="img of person"
        className="rounded-full object-cover w-40 h-40"
      />
      <p className="info-text text-center max-w-sm">{feedback}</p>
      <div className="flex gap-2.5">
        <img
          src={star}
          alt="star icon"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <span className="text-xl font-montserrat text-slate-gray">
          ({rating})
        </span>
      </div>
      <h3 className="heading-section text-3xl">{customerName}</h3>
    </div>
  );
}
