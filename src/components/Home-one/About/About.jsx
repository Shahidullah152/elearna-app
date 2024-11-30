import { useState } from "react";
import about1 from "../../../assets/images/Home1/about-1.webp";
import about2 from "../../../assets/images/Home1/about-2.avif";
import about3 from "../../../assets/images/Home1/about-3.webp";
import about4 from "../../../assets/images/Home1/about-4.webp";
// import about5 from "../../../assets/images/Home2/about-5.webp";
import review from "../../../assets/images/Home1/review.webp";
import orangeDott from "../../../assets/images/Home1/orange-ball.svg";
import Vedio from "../../../assets/images/Home1/category-video.mp4";
import icon1 from "../../../assets/images/Home1/about-icon-1.svg";
import icon2 from "../../../assets/images/Home1/about-icon-2.svg";
import icon3 from "../../../assets/images/Home1/about-icon-3.svg";
import Logo1 from "../../../assets/images/Home1/logo1.svg";
import Logo2 from "../../../assets/images/Home1/logo2.svg";
import Logo3 from "../../../assets/images/Home1/logo3.svg";
import Logo4 from "../../../assets/images/Home1/logo4.svg";
import Logo5 from "../../../assets/images/Home1/logo5.svg";
import Logo6 from "../../../assets/images/Home1/logo6.svg";
import handfree from "../../../assets/images/Home1/handfree.svg";
import Marquee from "react-fast-marquee";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function About() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Flexibility and convenience",
      content:
        "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    },
    {
      id: 2,
      title: "Course accessibility",
      content:
        "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    },
    {
      id: 3,
      title: "Cost-effectiveness",
      content:
        "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    },
    {
      id: 4,
      title: "Personalized learning",
      content:
        "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    },
  ];
  return (
    <>
      {/* about hero section start */}
      <section className="w-full h-[34rem] bg-main-colo-1 bg-about-bg bg-cover flex items-center justify-center">
        <div className="text-center text-white" data-aos="fade-up">
          <h1 className="uppercase font-sans font-medium">About us</h1>
          <h2 className="text-2xl md:text-4xl lg:text-6xl my-2 text-main-colo-3 duration-300">
            You’re sincerely <br /> determined to grow
          </h2>
        </div>
      </section>
      {/* about hero section end */}

      {/* about story section start */}
      <section className="px-5 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 py-16">
        <div className="relative h-[30rem] md:h-[33rem]" data-aos="fade-up">
          <img
            src={about1}
            alt=""
            className="absolute w-full h-full object-cover -top-40 rounded-md shadow-xl"
          />

          <div className="absolute  bottom-20 right-1/2 translate-x-1/2 md:translate-x-0 md:right-10">
            <img src={about2} alt="" className="rounded-3xl w-64 shadow-xl" />
          </div>
        </div>
        <div className="" data-aos="fade-up">
          <h1 className="uppercase font-sans font-medium text-main-colo-1">
            Our Story
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl  font-sans font-semibold my-5">
            Limitless learning and <br /> get more possibilities
          </p>
          <p className="text-gray-500 font-sans font-medium my-5 tracking-wider">
            Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in
            maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula
            eget malesuada ullamcorper nibh. Etiam suspendisse pretium est
            elementum elementum rhoncus.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <div className="border-e-[2px] border-gray-800 text-center uppercase">
              <h1 className="text-2xl md:text-4xl lg:text-5xl duration-300 font-sans font-medium">
                1.5k
              </h1>
              <h1 className="font-medium text-sm mt-2 me-1">Finish seasons</h1>
            </div>
            <div className="border-e-[2px] border-gray-800 text-center uppercase">
              <h1 className="text-2xl md:text-4xl lg:text-5xl duration-300 font-sans font-medium">
                7.8k
              </h1>
              <h1 className="font-medium text-sm mt-2 me-1">enrolled</h1>
            </div>
            <div className=" text-center uppercase">
              <h1 className="text-2xl md:text-4xl lg:text-5xl duration-300 font-sans font-medium">
                100%
              </h1>
              <h1 className="font-medium text-sm mt-2 me-1">Job placement</h1>
            </div>
          </div>
        </div>
      </section>
      {/* about story section end */}

      {/* other black div start */}
      <div className="px-5 w-full h-full " data-aos="fade-up">
        <div className="w-full bg-main-colo-1 px-10 py-16 mb-5 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 md:place-items-center ">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-main-colo-3">
            <img src={icon1} alt="" />
            <div>
              <h1 className="text-2xl font-sans font-medium">
                150+ online courses
              </h1>
              <p className="font-sans font-medium">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-main-colo-3">
            <img src={icon2} alt="" />
            <div>
              <h1 className="text-2xl font-sans font-medium">
                Personalized learning
              </h1>
              <p className="font-sans font-medium">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-main-colo-3">
            <img src={icon3} alt="" />
            <div>
              <h1 className="text-2xl font-sans font-medium">
                Lifetime update
              </h1>
              <p className="font-sans font-medium">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* other black div end */}

      {/* Why we are section start */}
      <section className="w-full px-5 py-16" data-aos="fade-up">
        {/* content start */}
        <div className="text-center mt-10 mb-20" data-aos="fade-up">
          <h1 className="uppercase font-sans font-medium text-main-colo-1">
            Why we are
          </h1>
          <p className="text-sm md:text-3xl lg:text-4xl font-sans font-medium my-4 text-main-colo-1 duration-300">
            We believe in our good education and development <br /> system and
            we know how to work together to reach <br /> greater success
          </p>
        </div>
        {/* content end */}

        {/* cards start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 items-center justify-center">
          {cards.map((card, index) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(index)}
              className={`relative bg-main-colo-3 shadow-xl rounded-sm overflow-hidden transition-all duration-500 ${
                hoveredIndex === index ? "h-80" : "h-72"
              }`}
            >
              <div className="p-6">
                <h3 className="text-blue-600 font-bold text-xl mb-2">{`0${card.id}`}</h3>
                <h4 className="text-gray-900 font-semibold text-lg mb-4 ">
                  {card.title}
                </h4>
                <p className="text-gray-600">{card.content}</p>
              </div>

              {/* Button */}
              {hoveredIndex === index && (
                <button className="absolute bottom-6 left-6 right-6 bg-main-colo-1 text-white py-3 rounded-md mt-4 duration-300 hover:scale-95">
                  Get Started
                </button>
              )}
            </div>
          ))}
        </div>
        {/* cards end */}
      </section>
      {/* Why we are section end */}

      {/* We Offer Section Start  */}
      <section className="w-full px-5 py-16  grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="relative h-[30rem]" data-aos="fade-up">
          <img
            src={about3}
            alt=""
            className="absolute right-0 w-[55%] h-full object-cover z-10 rounded-md"
          />
          <img
            src={orangeDott}
            alt=""
            className="w-44 absolute top-2 left-24 z-0 "
          />
          <video
            src={Vedio}
            autoPlay
            muted
            loop
            className="w-[40%] h-[300px] object-cover rounded-tl-[4rem] absolute left-0 top-20"
          ></video>
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
      {/* We Offer Section end */}

      {/* brind logo start */}
      <div className="bg-main-colo-1 py-7 my-5" data-aos="fade-up">
        <h1 className="text-center font-sans font-medium text-gray-500">
          Learn from 350+ leading universities and companies with us
        </h1>
        <Marquee speed={50} gradient={false} className="my-10">
          <div className="flex items-center justify-between gap-10">
            <img src={Logo1} alt="Logo 1" style={{ margin: "0 30px" }} />
            <img src={Logo2} alt="Logo 1" style={{ margin: "0 30px" }} />
            <img src={Logo3} alt="Logo 1" style={{ margin: "0 30px" }} />
            <img src={Logo4} alt="Logo 1" style={{ margin: "0 30px" }} />
            <img src={Logo5} alt="Logo 1" style={{ margin: "0 30px" }} />
            <img src={Logo6} alt="Logo 1" style={{ margin: "0 30px" }} />
          </div>
        </Marquee>
      </div>
      {/* brind logo end */}

      {/* instructor section start */}
      <section className="px-5 py-16 w-full h-full grid grid-cols-1 lg:grid-cols-2  place-items-center gap-5">
        <div
          className="lg:text-end text-center   flex flex-col gap-5 items-center lg:items-end"
          data-aos="fade-up"
        >
          <h1 className="md:text-5xl text-3xl font-sans font-medium ">
            Became an instructor
          </h1>
          <p className="text-gray-400 font-sans font-medium">
            Lorem ipsum dolor sit amet consectetur. Sed ultricies fames
            scelerisque urna quis semper amet. Nisl tincidunt tortor nullam est
            nec commodo orci dictum in. Lorem consectetur donec purus sagittis.
          </p>
          <button className="px-10 py-3 bg-main-colo-1 text-main-colo-3 duration-300 hover:scale-95 rounded-md font-sans font-medium">
            Start Teaching Today
          </button>
        </div>
        <div className="relative" data-aos="fade-up">
          <img src={about4} alt="" className="w-[26rem]" />
          <img
            src={review}
            alt=""
            className="absolute bottom-0 sm:top-28 sm:-left-20 w-60 shadow-xl rounded-full"
          />
        </div>
      </section>
      {/* instructor section end */}

      {/* Testimonial Start */}
      <section className="px-5 w-full bg-main-colo-3 py-16 grid grid-cols-1 place-items-center">
        <div
          className="w-[80%] items-center justify-center flex flex-col gap-6 text-center"
          data-aos="fade-up"
        >
          <img src={handfree} alt="" />
          <p className="font-sans font-medium text-gray-500">
            "Lorem ipsum dolor sit amet consectetur. Est felis pulvinar tortor
            ut nibh montes ante gravida velit. Facilisi posuere in sed mattis
            blandit duis aliquet. Molestie faucibus nibh felis tempor vel
            aliquet cursus placerat duis."
          </p>
          <div>
            <h1 className="text-xl font-sans font-medium text-main-colo-1">
              Jim Adams
            </h1>
            <h2 className="uppercase font-sans font-medium text-gray-500 mt-2">
              Designer
            </h2>
          </div>
          <div>
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
      {/* Testimonial end */}

      {/* are you ready start */}
      <section className="w-full bg-about2-bg  bg-cover object-cover bg-no-repeat bg-center">
        <div
          data-aos="fade-up"
          className="w-full px-20 py-32 bg-black/35 grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start gap-5"
        >
          <h1 className="text-xl sm:text-3xl lg:text-4xl text-white font-sans font-medium">
            Are you ready to start <br /> your journey?
          </h1>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-4 justify-center">
            <button className="px-10 py-3 bg-transparent border-2 border-gray-200 rounded-md text-white font-sans font-medium hover:scale-95 duration-300">
              Browse courses
            </button>
            <button className="px-5 sm:px-10 py-3 bg-main-colo-2 rounded-md text-main-colo-1 font-sans font-medium hover:scale-95 duration-300">
              Became an instructor
            </button>
          </div>
        </div>
      </section>
      {/* are you ready end */}
    </>
  );
}

export default About;
