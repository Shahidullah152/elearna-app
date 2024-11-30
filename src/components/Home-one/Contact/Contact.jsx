import signiture from "../../../assets/images/Home1/signiture.svg";
import home from "../../../assets/images/Home1/home-icon.svg";
import book from "../../../assets/images/Home1/book-icon.svg";
import clock from "../../../assets/images/Home1/clock-icon.svg";
import FAQMan from "../../../assets/images/Home1/FAQ-man.svg";
import { useState } from "react";
function Contact() {
  //   FAQ isOpen State
  const [isFaqOpen, setIsFaqOpen] = useState(null);

  //   FAQ isOpen function
  function FaqIsOpenToggle(index) {
    setIsFaqOpen(isFaqOpen === index ? null : index);
  }

  //   FAQ Data
  const FAQDate = [
    {
      id: 1,
      FAQ1: "How do I enroll in the course?",
      A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
    {
      id: 2,
      FAQ1: "What is the registration process?",
      A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
    {
      id: 3,
      FAQ1: "How do I enroll in the course?",
      A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
    {
      id: 4,
      FAQ1: "What is the registration process?",
      A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
    {
      id: 5,
      FAQ1: "What is the registration process?",
      A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
  ];
  return (
    <>
      {/* FAQ hero section start */}
      <section className="w-full relative h-[30rem] bg-contact-bg bg-cover bg-center">
        <div className="text-start px-5 text-white bg-black/70 w-full h-full flex items-center justify-start">
          <div>
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl lg:text-6xl my-2 text-main-colo-3 duration-300 font-medium"
            >
              Contact us
            </h2>
          </div>
        </div>
      </section>
      {/* FAQ hero section end */}

      {/* Contact Form Section start */}
      <section className="px-5 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div
          className="flex flex-col gap-5 text-center lg:text-start items-center lg:items-start order-2 lg:order-1"
          data-aos="fade-up"
        >
          <h1 className="uppercase font-sans font-medium">Contact Us</h1>
          <p className="text-2xl md:text-4xl lg:text-[45px]  duration-300 font-sans font-medium">
            Are you interested in online learning? Contact us
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
            nam id purus suspendisse. Imperdiet nam lorem tempus in. Tristique
            nullam risus semper habitant urna nisl nam elit at.
          </p>
          <img src={signiture} alt="" className="w-56" />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-sans font-medium ">Brayden Backham</h1>
            <p className="text-gray-400 uppercase">Director</p>
          </div>
        </div>
        <div className="relative h-[32rem] sm:h-[30rem] order-1 lg:order-2">
          <form
            action=""
            className="shadow-2xl  p-10 absolute -top-44 bg-white right-0 w-full rounded-lg"
            data-aos="fade-up"
          >
            <div>
              <h1 className="text-2xl sm:text-4xl font-sans font-medium duration-300">
                Fill out for contact
              </h1>
              <p className="text-gray-500 my-2 ">
                Lorem ipsum dolor sit amet consectetur libero donec.
              </p>
            </div>
            <div className="flex flex-col gap-5 mt-7">
              <input
                type="text"
                placeholder="Your Name*"
                className="border border-gray-300 px-6 py-3 rounded-md outline-none text-gray-400"
              />
              <input
                type="text"
                placeholder="Your Email*"
                className="border border-gray-300 px-6 py-3 rounded-md outline-none text-gray-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 px-6 py-3 rounded-md outline-none text-gray-400"
              />
              <textarea
                placeholder="Your Message*"
                rows="5"
                className="border border-gray-300 px-6 py-3 rounded-md outline-none text-gray-400"
              ></textarea>
              <div className=" flex items-center gap-2 px-1">
                <input type="checkbox" className="p-4" id="check" />{" "}
                <label
                  htmlFor="check"
                  className="cursor-pointer text-gray-400 font-sans font-medium"
                >
                  Save information for the next time comment.
                </label>
              </div>
              <div>
                <button className="px-5 py-3 w-full sm:w-44 bg-main-colo-1 text-main-colo-3 rounded-md duration-300 hover:scale-95">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Contact Form Section end */}

      {/* Contact details section start */}
      <section className="px-5 w-full py-10">
        {/* content start */}
        <div className="text-center text-main-colo-1" data-aos="fade-up">
          <h1 className=" uppercase my-4 font-medium">Contact details</h1>
          <h1 className="md:text-5xl text-3xl duration-300 font-sans font-medium">
            Find our location
          </h1>
        </div>
        {/* content end */}

        {/* card start */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center  my-10"
          data-aos="fade-up"
        >
          <div className="flex gap-5 items-start border-gray-300 md:border-e-[1.8px]">
            <img src={home} alt="" />
            <div>
              <h1 className="text-[20px] font-sans font-medium">
                Area location
              </h1>
              <p className=" text-gray-400">410 Sandtown, California</p>
              <p className=" text-gray-400">94001, USA</p>
            </div>
          </div>
          <div className="flex gap-5 items-start md:justify-center border-gray-300 md:border-e-[1.8px]">
            <img src={book} alt="" />
            <div>
              <h1 className="text-[20px] font-sans font-medium">
                Contact details
              </h1>
              <p className=" text-gray-400">888-123-4567</p>
              <p className=" text-gray-400">info@example.com</p>
            </div>
          </div>
          <div className="flex gap-5 items-start md:justify-end ">
            <img src={clock} alt="" />
            <div>
              <h1 className="text-[20px] font-sans font-medium">
                Opening hours
              </h1>

              <p className=" text-gray-400"> Monday-Friday</p>
              <p className=" text-gray-400"> 10:30a.m-7:00p.m</p>
            </div>
          </div>
        </div>
        {/* card end */}
      </section>
      {/* Contact details section end */}
      {/* FAQ section start */}
      <section className="px-5 w-full bg-main-colo-3 pt-20 pb-96 sm:pb-64 relative">
        {/* Content box start */}
        <div
          className="flex items-center justify-evenly flex-wrap md:flex-nowrap gap-5"
          data-aos="fade-up"
        >
          <img src={FAQMan} alt="" />
          <div>
            <h1 className="uppercase font-sans font-medium">Contact Us</h1>
            <p className="text-2xl md:text-3xl lg:text-5xl duration-300 font-sans font-medium my-3 text-main-colo-1">
              Frequently asked <br /> questions
            </p>
          </div>
        </div>
        {/* Content box end */}

        {/* FAQ start */}

        {/* Right FAQ content */}
        <div className="md:px-40 mt-10" data-aos="fade-up">
          {FAQDate.map((values, index) => (
            <div
              className="border-b-[1px] border-gray-400 group"
              key={values.id}
            >
              {/* Question */}
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => FaqIsOpenToggle(index)}
              >
                <h1 className="sm:text-xl font-sans font-medium text-main-colo-1">
                  {values.FAQ1}
                </h1>
                <div className="cursor-pointer">
                  <div
                    className={`border-[1.5px] w-4 border-gray-800 mb-1 transform  ${
                      isFaqOpen === index ? "rotate-0" : "rotate-90"
                    }  translate-y-[7px] duration-500`}
                  ></div>
                  <div className="border-[1.5px] w-4 border-gray-800"></div>
                </div>
              </div>
              {/* Answer */}
              <div
                className={` overflow-hidden duration-500 px-4  ${
                  isFaqOpen === index ? "h-20" : "h-0"
                }`}
              >
                <p className="text-gray-500 font-sans">{values.A1}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ end */}

        {/* Yellow section start */}
        <div className="p-12 w-[95%]  md:p-20 bg-main-colo-2 flex items-center justify-center md:justify-between flex-wrap md:flex-nowrap gap-5 absolute -bottom-20 left-1/2 transform -translate-x-1/2  rounded-md">
          <h1 className="text-4xl text-main-colo-1 font-sans font-bold">
            Are you ready to start <br /> your journey?
          </h1>
          <div className="flex gap-4 flex-wrap md:flex-nowrap items-center justify-center">
            <button className="px-10 py-3 bg-main-colo-1 rounded-md text-white hover:scale-95 duration-300">
              Browse courses
            </button>
            <button className="px-10 py-3  rounded-md border-[1px] border-main-colo-1  hover:scale-95 duration-300">
              Became a teacher
            </button>
          </div>
        </div>
        {/* Yellow section send */}
      </section>
      {/* FAQ section end */}
    </>
  );
}

export default Contact;
