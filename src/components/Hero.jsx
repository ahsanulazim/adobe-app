const Hero = () => {
  return (
    <section className="bg-[url(/images/hero.png)] relative bg-no-repeat bg-cover">
      <img
        src="/images/hero.png"
        alt="Hero Image"
        className="w-full invisible"
      />
      <div className="max-w-360 mx-auto absolute top-0 bottom-0 left-0 right-0 w-full py-10 px-20 flex items-center justify-center">
        <div className="max-w-120 lg:max-w-190 mx-auto text-center">
          <h1 className="font-bold text-base md:text-xl lg:text-4xl xl:text-5xl leading-6 lg:leading-10 xl:leading-13">
            Adobe Creative Cloud <br /> All Your Creative Tools in One Place.
            <br />
            Unleash Your Imagination with 20+ Industry-Leading Apps.
          </h1>
          <p className="max-md:hidden md:text-sm lg:text-base xl:text-xl my-3 lg:my-5">
            Access the world's best creative apps for design, photo, video, web,
            UX, and more.
            <br /> All the tools, all in one subscription. Get started today
            with flexible plans.
          </p>
          <button className="btn btn-main rounded-full max-xs:btn-sm xl:btn-lg mt-2 xs:mt-5">
            View Plans and Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
