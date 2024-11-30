import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function FAQ() {
  // FAQ state
  const [isFAQ, setIsFAQ] = useState("Enrollment and registration");
  const [openIndexes, setOpenIndexes] = useState([]); // Array to track open questions

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index)); // Close the question
    } else {
      setOpenIndexes([...openIndexes, index]); // Open the question
    }
  };

  // FAQ Data
  const faqData = {
    "Enrollment and registration": [
      {
        Q1: "How do I enroll in the course?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
      {
        Q1: "What is the registration process?",
        A1: "You can register by filling out the form available on our website. Follow the instructions provided in the email confirmation.",
      },
      {
        Q1: "How do I enroll in the course?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
      {
        Q1: "What is the registration process?",
        A1: "You can register by filling out the form available on our website. Follow the instructions provided in the email confirmation.",
      },
      {
        Q1: "How do I enroll in the course?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
    ],
    "Technical requirements": [
      {
        Q1: "What technical skills are needed?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
      {
        Q1: "What technical skills are needed?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
      {
        Q1: "What technical skills are needed?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
      {
        Q1: "What technical skills are needed?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
    ],
    "Assessments and grading": [
      {
        Q1: "How are assessments graded?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
      {
        Q1: "How are assessments graded?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
      {
        Q1: "How are assessments graded?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
    ],
    "Communication and support": [
      {
        Q1: "How are assessments graded?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
      {
        Q1: "How are assessments graded?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
      {
        Q1: "How are assessments graded?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
      {
        Q1: "How are assessments graded?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
      {
        Q1: "How are assessments graded?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
    ],
    "Certificates and degrees": [
      {
        Q1: "How are assessments graded?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
      {
        Q1: "How are assessments graded?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
      {
        Q1: "How are assessments graded?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
      {
        Q1: "How are assessments graded?",
        A1: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
      },
    ],
  };

  return (
    <>
      {/* FAQ hero section start */}
      <section className="w-full relative h-[39rem] bg-FAQ-bg bg-cover bg-center">
        <div className="text-center text-white bg-black/70 w-full h-full flex items-center justify-center">
          <div>
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl lg:text-6xl my-2 text-main-colo-3 duration-300 font-medium"
            >
              Frequently Asked Questions
            </h2>
            <p data-aos="fade-up" className="font-sans font-medium my-5">
              Find answers to the most common questions below.
            </p>
          </div>
        </div>
      </section>
      {/* FAQ hero section end */}

      {/* FAQ section start */}
      <section className="w-full px-5 py-28 grid grid-cols-1 lg:grid-cols-2  items-center gap-5 lg:gap-0">
        {/* Left menu */}
        <div className="flex flex-col lg:w-[400px]">
          {Object.keys(faqData).map((key) => (
            <div
              key={key}
              className={`cursor-pointer duration-300 flex items-center justify-between p-5 border-b-[1px] border-gray-200 ${
                isFAQ === key
                  ? "bg-main-colo-1 text-main-colo-3"
                  : "bg-main-colo-3 text-gray-400"
              }`}
              onClick={() => setIsFAQ(key)}
              data-aos="fade-up"
            >
              <h1 className="text-lg font-sans font-medium">{key}</h1>
              <FaArrowRight className="text-sm" />
            </div>
          ))}
        </div>

        {/* Right FAQ content */}
        <div className="">
          {faqData[isFAQ].map((FAQ, index) => (
            <div
              className="border-b-[1px] border-gray-400 group"
              key={index}
              data-aos="fade-up"
            >
              {/* Question */}
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h1 className="sm:text-xl font-sans font-medium text-main-colo-1">
                  {FAQ.Q1}
                </h1>
                <div className="cursor-pointer">
                  <div
                    className={`border-[1.5px] w-4 border-gray-800 mb-1 transform ${
                      openIndexes.includes(index) ? "rotate-90" : "rotate-0"
                    } translate-y-[7px] duration-500`}
                  ></div>
                  <div className="border-[1.5px] w-4 border-gray-800"></div>
                </div>
              </div>
              {/* Answer */}
              <div
                className={`${
                  openIndexes.includes(index) ? "max-h-[200px] py-2" : "max-h-0"
                } overflow-hidden duration-500 px-4`}
              >
                <p className="text-gray-500 font-sans">{FAQ.A1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* FAQ section end */}

      {/* are you ready start */}
      <section
        className="w-full bg-about2-bg  bg-cover object-cover bg-no-repeat bg-center"
        data-aos="fade-up"
      >
        <div className="w-full px-20 py-32 bg-black/35 grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start gap-5">
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

export default FAQ;
