import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import IMG1 from "../../../assets/images/Home1/testimonial-1.avif";
import Aos from "aos";
import { useEffect } from "react";
function Testimonials() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <section className="w-full  bg-hero-bg bg-cover bg-no-repeat bg-main-colo-1 px-5 py-12">
        {/* text div start */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-end"
          data-aos="fade-up"
        >
          <div className="text-center md:text-start">
            <h1 className="font-sans font-medium text-white uppercase">
              Our testimonials
            </h1>
            <h1 className="text-2xl md:text-5xl font-sans font-medium text-white my-5">
              Trusted by our <br /> successful students
            </h1>
          </div>
          <div className="flex items-center justify-center gap-10 md:gap-20 flex-wrap">
            <div className="flex items-center justify-center gap-3">
              <div>
                <h1 className="text-4xl font-sans font-semibold text-white">
                  70M
                </h1>
              </div>
              <span className="text-gray-300">|</span>
              <div>
                <h1 className="uppercase text-gray-600 text-sm font-semibold">
                  Successful
                </h1>
                <h1 className="uppercase text-gray-600 text-sm font-semibold">
                  students
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div>
                <h1 className="text-4xl font-sans font-semibold text-white">
                  25k
                </h1>
              </div>
              <span className="text-gray-300">|</span>
              <div>
                <h1 className="uppercase text-gray-600 text-sm font-semibold">
                  Global job
                </h1>
                <h1 className="uppercase text-gray-600 text-sm font-semibold">
                  placements
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* text div end */}

        {/* card */}
        <div className="my-10 w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div data-aos="fade-up">
            <img src={IMG1} alt="" className="lg:w-[32rem]" />
          </div>
          <div className="text-center lg:text-start" data-aos="fade-up">
            <p className="text-xl text-gray-600 font-sans font-medium  text-center lg:text-start ">
              “Lorem ipsum dolor sit amet consectetur. Molestie faucibus nibh
              felis tempor vel aliquet cursus placerat duis. Est felis pulvinar
              tortor ut nibh montes ante gravida velit. Facilisi posuere in sed
              mattis blandit duis aliquet.”
            </p>
            <h1 className="text-2xl font-sans font-medium text-white mt-20">
              Jim Adams
            </h1>
            <h1 className="text-gray-600 font-sans font-medium uppercase">
              Designer
            </h1>
            <div className="flex  gap-3 my-4 w-full justify-center lg:justify-start">
              <div className="w-10 h-10 border-[1px] border-gray-500 rounded-full flex items-center justify-center text-gray-500">
                <FaArrowLeft />
              </div>
              <div className="w-10 h-10 border-[1px] border-gray-500 rounded-full flex items-center justify-center text-gray-500">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
