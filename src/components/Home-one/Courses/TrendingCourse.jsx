import { useEffect } from "react";
import devlopment1 from "../../../assets/images/Home1/development-1.webp";
import devlopment2 from "../../../assets/images/Home1/development-2.webp";
import devlopment3 from "../../../assets/images/Home1/development-3.webp";
import manage1 from "../../../assets/images/Home1/manage-2.webp";
import stars from "../../../assets/images/Home1/stars.svg";
import we1 from "../../../assets/images/Home1/we-1.svg";
import we2 from "../../../assets/images/Home1/we-2.svg";
import we3 from "../../../assets/images/Home1/we-3.svg";
import we4 from "../../../assets/images/Home1/we-4.svg";
import Aos from "aos";

function TrendingCourse() {
  //  array of object
  // Card Data
  const CardData = [
    {
      id: 1,
      img: devlopment3,
      title: "Development",
      disc: "Building single page applications with angular",
      price: "Free",
      star: stars,
      starText: "5.00 (300)",
      li1: "6 Lessons",
      li2: "12k Enrolled",
      text: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      check: (
        <svg
          className="w-6 h-6 text-gray-500 "
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
            d="M5 11.917 9.724 16.5 19 7.5"
          />
        </svg>
      ),
      list: {
        li3: "Lorem ipsum dolor sit amet consectetur",
        li4: "Lorem ipsum dolor",
        li5: "Lorem ipsum dolor sit",
      },
      btnText: {
        btn2: "Course Details",
      },
    },
    {
      id: 2,
      img: devlopment1,
      title: "Development",
      disc: "Database integration with MongoDB",
      price: "$59",
      star: stars,
      starText: "4.00 (300)",
      li1: "10 Lessons",
      li2: "8k Enrolled",
      text: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      check: (
        <svg
          className="w-6 h-6 text-gray-500 "
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
            d="M5 11.917 9.724 16.5 19 7.5"
          />
        </svg>
      ),
      list: {
        li3: "Lorem ipsum dolor sit amet consectetur",
        li4: "Lorem ipsum dolor",
        li5: "Lorem ipsum dolor sit",
      },
      btnText: {
        btn1: "Enroll",
        btn2: "Course Details",
      },
    },
    {
      id: 3,
      img: manage1,
      title: "management",
      disc: "Risk management and business continuity",
      price: "$49",
      star: stars,
      starText: "3.00 (300)",
      li1: "3 Lessons",
      li2: "8k Enrolled",
      text: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      check: (
        <svg
          className="w-6 h-6 text-gray-500 "
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
            d="M5 11.917 9.724 16.5 19 7.5"
          />
        </svg>
      ),
      list: {
        li3: "Lorem ipsum dolor sit amet consectetur",
        li4: "Lorem ipsum dolor",
        li5: "Lorem ipsum dolor sit",
      },
      btnText: {
        btn1: "Enroll",
        btn2: "Course Details",
      },
    },
    {
      id: 4,
      img: devlopment2,
      title: "Development",
      disc: "Full-stack development with the MERN stack",
      price: "$72",
      star: stars,
      starText: "4.00 (300)",
      li1: "12 Lessons",
      li2: "22k Enrolled",
      text: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      check: (
        <svg
          className="w-6 h-6 text-gray-500 "
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
            d="M5 11.917 9.724 16.5 19 7.5"
          />
        </svg>
      ),
      list: {
        li3: "Lorem ipsum dolor sit amet consectetur",
        li4: "Lorem ipsum dolor",
        li5: "Lorem ipsum dolor sit",
      },
      btnText: {
        btn1: "Enroll",
        btn2: "Course Details",
      },
    },
  ];

  //   We are CardData
  const WeAreCardDate = [
    {
      img: we1,
      title: "Learn anything",
      disc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    },
    {
      img: we2,
      title: "Save money",
      disc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    },
    {
      img: we3,
      title: "Flexible courses",
      disc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    },
    {
      img: we4,
      title: "Unlimited certificate",
      disc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <section className="w-full bg-main-colo-3 px-5 py-16 ">
        {/* text div start */}
        <div className="w-full text-center">
          <h1 className="uppercase font-sans font-medium">Trending courses</h1>
          <p className="font-sans font-medium text-4xl text-main-colo-1 mt-4 mb-12">
            Explore our top programs
          </p>
        </div>
        {/* text div end */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 w-full h-auto">
          {CardData.map((data) => (
            <div
              className="bg-white group hover:shadow-2xl  relative  hover:h-[27rem] rounded-lg"
              key={data.id}
              data-aos="fade-up"
            >
              <div className="w-full h-[95%] bg-white p-6 flex flex-col gap-4 justify-center absolute z-50 top-3    shadow-xl rounded-lg  duration-500 opacity-0 group-hover:opacity-100">
                <h1 className="text-[20px] font-sans   font-medium">
                  {data.disc}
                </h1>
                <ul className="flex list-disc gap-6 items-center justify-center text-gray-500">
                  <li>{data.li1} </li>
                  <li>{data.li2}</li>
                </ul>
                <p className="text-sm text-gray-500">{data.text}</p>

                <ul>
                  {Object.values(data.list).map((li, index) => (
                    <li
                      className="flex text-sm text-gray-500 gap-1"
                      key={index}
                    >
                      {data.check}
                      {li}
                    </li>
                  ))}
                </ul>

                <div
                  className={`grid  gap-2 ${
                    Object.keys(data.btnText).length === 1
                      ? "grid-cols-1"
                      : "grid-cols-2"
                  }`}
                >
                  {Object.values(data.btnText).map((btn, index) => (
                    <button
                      key={index}
                      className={`px-2 py-3  rounded-md  hover:scale-95 duration-300 text-sm ${
                        btn === "Enroll"
                          ? "bg-main-colo-1 text-white"
                          : "text-main-colo-1 bg-main-colo-2"
                      } `}
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden group-hover:w-full group-hover:h-full group-hover:rounded-lg">
                <img
                  src={data.img}
                  alt=""
                  className="group-hover:scale-110 group-hover:rounded-lg duration-500 w-full h-full object-cover"
                />
              </div>
              <div className="px-8 pt-6 pb-4 group-hover:bg-transparent group-hover:absolute group-hover:bottom-1">
                <div className="w-[4.5rem] h-[4.5rem] bg-[#254edb] rounded-full absolute right-6 top-6 flex items-center justify-center text-xl text-white font-sans group-hover:hidden duration-700 ">
                  {data.price}
                </div>
                <h1 className="uppercase text-sm font-sans text-gray-600">
                  {data.title}
                </h1>
                <p className="text-2xl font-sans font-semibold my-3 group-hover:text-white">
                  {data.disc}
                </p>
                <div className="flex my-6">
                  <img src={data.star} alt="" />
                  <span className="text-sm text-gray-600 ms-2 font-sans">
                    {data.starText}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WE are section start */}
      <section className="px-5 w-full bg-main-colo-3 py-16 relative">
        {/* text div start */}
        <div className="w-full text-center">
          <h1 className="uppercase font-sans font-medium">Why we are</h1>
          <p className="font-sans font-medium text-4xl text-main-colo-1 my-4">
            Elevate your professional journey
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris{" "}
            <br />
            mus. Vitae diam dolor lacus amet integer ut.
          </p>
        </div>
        {/* text div end */}

        <div className="w-full h-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-44 sm:mb-32">
          {WeAreCardDate.map((data, index) => (
            <div
              className="text-center flex items-center justify-center flex-col gap-3"
              key={index}
            >
              <img src={data.img} alt="" />
              <h1 className="text-xl font-sans font-medium">{data.title}</h1>
              <p className="font-sans  text-gray-500">{data.disc}</p>
            </div>
          ))}
        </div>

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
      {/* WE are section end */}
    </>
  );
}

export default TrendingCourse;
