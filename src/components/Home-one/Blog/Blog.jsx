import manage1 from "../../../assets/images/Home1/manage-1.webp";
import manage2 from "../../../assets/images/Home1/manage-2.webp";
import devlopment1 from "../../../assets/images/Home1/development-1.webp";
import devlopment2 from "../../../assets/images/Home1/development-2.webp";
import devlopment3 from "../../../assets/images/Home1/development-3.webp";
// import finance1 from "../../../assets/images/Home1/finance-1.webp";
// import finance2 from "../../../assets/images/Home1/finance-3.webp";
import design1 from "../../../assets/images/Home1/design-1.webp";
// import design2 from "../../../assets/images/Home1/design-2.webp";
// import design3 from "../../../assets/images/Home1/design-3.webp";
import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

function Blog() {
  // pagination state
  const [SelectedPage, setSelectedPage] = useState("Previous");

  //   page change
  const handlePageChange = (index) => {
    setSelectedPage(index);
  };

  // Blog Cards Data
  const CardData = {
    Previous: [
      {
        img: design1,
        title: "Career",
        desc: "Improve knowledge retention with visual learning",
        data: "October 4, 2024",
      },
      {
        img: manage1,
        title: "Development",
        desc: "Master online learning with proven strategies",
        data: "October 4, 2024",
      },
      {
        img: manage2,
        title: "Teaching",
        desc: "How to enhance your learning experience today",
        data: "October 4, 2024",
      },
      {
        img: devlopment1,
        title: "Career",
        desc: "Improve knowledge retention with visual learning",
        data: "October 4, 2024",
      },
      {
        img: manage2,
        title: "Teaching",
        desc: "How to enhance your learning experience today",
        data: "October 4, 2024",
      },
      {
        img: devlopment1,
        title: "Career",
        desc: "Improve knowledge retention with visual learning",
        data: "October 4, 2024",
      },
    ],
    Next: [
      {
        img: devlopment2,
        title: "Teaching",
        desc: "How to enhance your learning experience today",
        data: "October 4, 2024",
      },
      {
        img: devlopment3,
        title: "Career",
        desc: "Improve knowledge retention with visual learning",
        data: "October 4, 2024",
      },
      {
        img: manage2,
        title: "Teaching",
        desc: "How to enhance your learning experience today",
        data: "October 4, 2024",
      },
      {
        img: devlopment1,
        title: "Career",
        desc: "Improve knowledge retention with visual learning",
        data: "October 4, 2024",
      },
    ],
  };
  return (
    <>
      {/* Team hero section start */}
      <section className="w-full relative h-[38rem] bg-blog-bg bg-cover bg-center">
        <div className="text-start text-white bg-black/70 w-full h-full flex items-center justify-start px-5">
          <div>
            <p data-aos="fade-up" className="uppercase">
              News and journals
            </p>
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl lg:text-6xl my-2 text-main-colo-3 duration-300 font-medium"
            >
              Planning to transition <br /> to a new career?
            </h2>
          </div>
        </div>
      </section>
      {/* Team hero section end */}

      {/* Blog Cards start */}
      <section className="w-full px-5 py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CardData[SelectedPage].map((values, index) => (
            <div
              className="border-[1.5px] border-gray-200 rounded-md group"
              key={index}
              data-aos="fade-up"
            >
              <div className="w-full overflow-hidden rounded-t-md">
                <img
                  src={values.img}
                  alt=""
                  className="w-full group-hover:scale-105 duration-500 rounded-t-md"
                />
              </div>
              <div className="flex flex-col gap-3 px-7 py-5">
                <h1 className="uppercase">{values.title}</h1>
                <p className="text-2xl font-sans font-medium">{values.desc}</p>
                <p className="font-sans  text-lg text-gray-500">
                  {" "}
                  {values.data}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* pagination btns start */}
        <div className="my-5 w-full flex items-center justify-center gap-5">
          {Object.keys(CardData).map((keys, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(keys)}
              className={` px-5 py-2  text-white  duration-500 rounded-lg  ${
                SelectedPage === keys ? "bg-main-colo-1/25" : "bg-main-colo-1"
              }`}
              disabled={SelectedPage === keys ? true : false}
              data-aos="fade-up"
            >
              {keys}
            </button>
          ))}
        </div>
        {/* pagination btns end */}
      </section>
      {/* Blog Cards end */}

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

export default Blog;
