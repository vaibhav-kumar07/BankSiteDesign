// import { feedback } from "../Constants"
import { feedback } from "../Constants";
import styles from "../style"
import FeedbackCard from "./FeedBackCard"

export default function Testimonials() {
  return (
    <section
      id="clients"
      className={`${styles.padding} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[80%] h-[70%] -right-[50%] rounded-full blue__gradient"/>
      <div className="w-full flex justify-between items-center md:flex-col flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          {" "}
          what people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            consequuntur molestias praesentium voluptatem sed illo natus quas et
            minima, qui minus expedita magni sunt facere vitae doloremque
            aspernatur nisi deleniti.
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap sm:justify-start justify-center w-full feeback-container relative z-[1] ">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
