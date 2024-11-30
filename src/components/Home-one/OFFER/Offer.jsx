import { useEffect } from "react";
import IMG1 from "../../../assets/images/Home1/offer-1.webp";
import IMG2 from "../../../assets/images/Home1/offer-2.webp";
import IMG3 from "../../../assets/images/Home1/offer-3.avif";
import Aos from "aos";
function Offer() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <section className="w-full h-auto py-32 grid grid-cols-1 lg:grid-cols-2 px-5 gap-x-12 gap-y-16">
        <div className="relative h-auto sm:h-[500px] md:h-[650px] lg:h-auto">
          <div className="w-full sm:w-[50%]  sm:absolute mt-4 right-0 -top-20">
            <img
              data-aos="fade-up"
              src={IMG1}
              alt=""
              className="rounded-md shadow-2xl shadow-gray-400"
            />
          </div>
          <div className="w-full sm:w-[50%]  sm:absolute mt-4 left-5 top-20">
            <img
              data-aos="fade-up"
              src={IMG2}
              alt=""
              className="rounded-md shadow-2xl shadow-gray-400"
            />
          </div>
          <div className="w-full sm:w-[50%]   sm:absolute mt-4 left-20 -top-12 lg:-top-10">
            <img
              data-aos="fade-up"
              src={IMG3}
              alt=""
              className="rounded-md shadow-2xl shadow-gray-400"
            />
          </div>
        </div>
        <div className="text-center lg:text-start" data-aos="fade-up">
          <h1 className="uppercase font-sans font-medium text-main-colo-1">
            what we Offer
          </h1>
          <p className="text-3xl md:text-5xl font-sans font-semibold my-4">
            Personalized learning for your ambitions
          </p>
          <p className="text-gray-500 font-sans font-medium my-4 tracking-widest">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>
          <div className="flex items-center justify-center gap-20  my-6">
            <ul className="list-disc font-sans font-medium text-main-colo-1 flex flex-col gap-2">
              <li>Skill-based instruction</li>
              <li>Global certification</li>
            </ul>
            <ul className="list-disc font-sans font-medium text-main-colo-1 flex flex-col gap-2">
              <li>Analytics and insights</li>
              <li>Customizable courses</li>
            </ul>
          </div>
          <div className="bg-main-colo-3 p-8 rounded-md grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-5">
            <div>
              <h1 className="text-2xl font-sans font-medium">
                Still have questions?
              </h1>
              <p className="text-gray-500 font-sans mt-5">
                Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
              </p>
            </div>
            <div className="text-center">
              <button className="px-10 py-3 bg-main-colo-1 text-white rounded-md hover:scale-95 duration-300 cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Offer;
