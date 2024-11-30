import Career1 from "../../../assets/images/Home1/finance-1.webp";
import Career2 from "../../../assets/images/Home1/career-1.webp";
function Career() {
  // Cards Data
  const CardData = [
    {
      id: 1,
      title: "Software development instructor",
      text1: "50 Posts available",
      text2: "4367 Lula Shores, Derekton 48438",
      button1: "$23k - $35k",
      button2: "Apply Now",
      ulData: [
        "Job Description :Lorem ipsum dolor sit amet consectetur.",
        "Job Type :Full-time, Permanent",
        "Experience :2 years",
      ],
    },
    {
      id: 2,
      title: "Machine learning educator",
      text1: "35 Posts available",
      text2: "4367 Lula Shores, Derekton 48438",
      button1: "$20K - $35K",
      button2: "Apply Now",
      ulData: [
        "Job Description :Lorem ipsum dolor sit amet consectetur.",
        "Job Type :Full-time, Permanent",
        "Experience :2 years",
      ],
    },
    {
      id: 3,
      title: "Blockchain Technology Instructor",
      text1: "47 Posts available",
      text2: "4367 Lula Shores, Derekton 48438",
      button1: "$26K - $40K",
      button2: "Apply Now",
      ulData: [
        "Job Description :Lorem ipsum dolor sit amet consectetur.",
        "Job Type :Full-time, Permanent",
        "Experience :2 years",
      ],
    },
    {
      id: 4,
      title: "Digital Design and UX Instructor",
      text1: "50 Posts available",
      text2: "4367 Lula Shores, Derekton 48438",
      button1: "$23K - $35K",
      button2: "Apply Now",
      ulData: [
        "Job Description :Lorem ipsum dolor sit amet consectetur.",
        "Job Type :Full-time, Permanent",
        "Experience :2 years",
      ],
    },
  ];
  return (
    <>
      {/* Creer hero section start */}
      <section className="w-full relative h-[34rem] bg-pricing-bg bg-cover bg-center">
        <div className="text-start text-white bg-main-colo-1/60 w-full h-full flex items-center justify-start px-5">
          <div>
            <h1 data-aos="fade-up" className="uppercase mb-4">
              We are hiring
            </h1>
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl lg:text-6xl my-2 text-main-colo-3 duration-300 font-medium"
            >
              Begin your journey as <br /> an instructor
            </h2>
          </div>
        </div>
      </section>
      {/* Creer hero section end */}

      {/* Whay We Are section start */}
      <section className="w-full px-5 py-20 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="relative h-[28rem] lg:h-[25rem]">
          <img
            src={Career1}
            alt=""
            className="absolute left-0 w-[60%] h-[80%] object-cover rounded-md"
            data-aos="fade-up"
          />
          <img
            src={Career2}
            alt=""
            className="absolute -right-0 -bottom-20 w-[30%] h-[90%] object-cover rounded-md"
            data-aos="fade-up"
          />
        </div>

        <div>
          <h1
            data-aos="fade-up"
            className="font-sans uppercase font-medium my-2"
          >
            Why we are
          </h1>
          <p
            data-aos="fade-up"
            className="text-2xl md:text-4xl lg:text-5xl font-sans font-medium my-5 text-main-colo-1"
          >
            We help connectivity <br /> across the world
          </p>
          <p data-aos="fade-up" className="text-gray-500 my-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusm
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div
            data-aos="fade-up"
            className="flex items-start justify-start gap-5 mb-5 mt-8"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div>
              <h1 className="text-xl md:text-2xl font-sans font-medium mb-2">
                Full network visibility worldwide
              </h1>
              <p className="text-gray-500">
                Amet consectetur adipiscing elit sed eiusmod tempor <br />{" "}
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex items-start justify-start gap-5"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div>
              <h1 className="text-xl md:text-2xl font-sans font-medium mb-2">
                Supported the use of fiber optic cable
              </h1>
              <p className="text-gray-500">
                Amet consectetur adipiscing elit sed eiusmod tempor <br />{" "}
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Whay We Are section end */}

      {/* job opening section start  */}
      <section className="w-full px-5 bg-main-colo-3 py-20">
        {/* content box start */}
        <div className="text-center" data-aos="fade-up">
          <h1 className="uppercase font-sans font-medium">job opening</h1>
          <p className="text-3xl md:text-5xl font-sans font-medium my-4 text-main-colo-1 duration-300">
            Be a part of our faculty
          </p>
        </div>
        {/* content box end */}

        {/* cards start */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {CardData.map((values, index) => (
            <div
              className="bg-white shadow-xl p-12 flex flex-col gap-5 rounded-md hover:shadow-2xl duration-300"
              key={index}
              data-aos="fade-up"
            >
              <h1 className="text-2xl font-sans font-medium text-main-colo-1">
                {values.title}
              </h1>
              <div className="uppercase">
                <p className="text-gray-500">{values.text1}</p>
                <p className="text-gray-500">{values.text2}</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-10 md:text-sm font-sans font-medium hover:scale-95 duration-300 py-3 bg-main-colo-2 text-main-colo-1 rounded-md">
                  {values.button1}
                </button>
                <button className="px-10 md:text-sm font-sans font-medium hover:scale-95 duration-300 py-3 bg-main-colo-1 text-main-colo-3 rounded-md">
                  {values.button2}
                </button>
              </div>

              <ul className="list-disc text-gray-500 ms-4 flex flex-col gap-2">
                {values.ulData.map((li, index) => (
                  <li key={index}>{li}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* cards end */}
      </section>
      {/* job opening section end */}

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

export default Career;
