import { FaQuoteLeft } from "react-icons/fa6";
const Testimonial = () => {
  return (
    <section>
      <div className="max-w-360 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-20 justify-between items-center">
        <img
          src="/images/testimonial.png"
          alt="testimonial image"
          className="rounded-2xl"
        />
        <div>
          <FaQuoteLeft className="size-15 lg:size-25 text-blue-500" />
          <h3 className="text-2xl lg:text-4xl font-bold">
            Essential for my graphic design business!
          </h3>
          <p className="md:text-sm lg:text-base my-5">
            Switching to Adobe Creative Cloud has been a complete game-changer
            for my agency. Having Photoshop, Illustrator, and Premiere Pro
            seamlessly integrated under one subscription saves us hours of
            workflow every single week. The cloud storage and instant asset
            sharing make collaboration with clients completely effortless. It's
            an absolute must-have for any serious creative professional.
          </p>
          <em className="opacity-50">Eric Mathews | Graphic Designer</em>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
