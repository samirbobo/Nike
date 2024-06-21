import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../constants";

export default function CustomerReviews() {
  return (
    <section className="padding bg-pale-blue">
      <h2 className="heading-section text-center">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h2>
      <p className="m-auto info-text text-center max-w-lg mt-4 ">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <article className="mt-24 flex justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            customerName={review.customerName}
            imgURL={review.imgURL}
            feedback={review.feedback}
            rating={review.rating}
          />
        ))}
      </article>
    </section>
  );
}
