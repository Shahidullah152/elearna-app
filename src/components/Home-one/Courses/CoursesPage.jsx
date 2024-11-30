import { useState } from "react";
import Category1 from "../../../assets/images/Home1/category1.svg";
import Category2 from "../../../assets/images/Home1/category2.svg";
import Category3 from "../../../assets/images/Home1/category3.svg";
import Category4 from "../../../assets/images/Home1/category4.svg";
import Category5 from "../../../assets/images/Home1/category5.svg";
import manage1 from "../../../assets/images/Home1/manage-1.webp";
import manage2 from "../../../assets/images/Home1/manage-2.webp";
import devlopment1 from "../../../assets/images/Home1/development-1.webp";
import devlopment2 from "../../../assets/images/Home1/development-2.webp";
import devlopment3 from "../../../assets/images/Home1/development-3.webp";
import finance1 from "../../../assets/images/Home1/finance-1.webp";
// import finance2 from "../../../assets/images/Home1/finance-3.webp";
import design1 from "../../../assets/images/Home1/design-1.webp";
import design2 from "../../../assets/images/Home1/design-2.webp";
import design3 from "../../../assets/images/Home1/design-3.webp";
import stars from "../../../assets/images/Home1/stars.svg";

function CoursesPage() {
  //   array of object
  const categories = [
    {
      id: 1,
      img: Category1,
      title: "Creative web design",
      courses: "8 Courses",
    },
    {
      id: 2,
      img: Category2,
      title: "Finance accounting",
      courses: "10 Courses",
    },
    {
      id: 3,
      img: Category1,
      title: "IT and software",
      courses: "5 Courses",
    },
    {
      id: 4,
      img: Category3,
      title: "Digital marketing",
      courses: "4 Courses",
    },
    {
      id: 5,
      img: Category4,
      title: "Web development",
      courses: "8 Courses",
    },
    {
      id: 6,
      img: Category5,
      title: "Content writing",
      courses: "3 Courses",
    },
  ];
  // Seleced Tabs State
  const [selectedTab, setselectedTab] = useState("1");

  //   Categories Data
  const categories2 = {
    1: [
      {
        id: 1,
        img: manage1,
        title: "Management",
        descrip: "Crisis management and problem-solving strategies",
        stars: stars,
        starsText: "4.88 (210)",
        action: "Free",
      },
      {
        id: 2,
        img: design1,
        title: "Design",
        descrip: "Advanced photoshop techniques for designers",
        stars: stars,
        starsText: "5.00 (1.2K)",
        action: "Free",
      },
      {
        id: 3,
        img: finance1,
        title: "Finance",
        descrip: "Operations management and process improvement",
        stars: stars,
        starsText: "5.00 (812)",
        action: "Free",
      },
      {
        id: 4,
        img: devlopment1,
        title: "Development",
        descrip: "Database integration with MongoDB",
        stars: stars,
        starsText: "4.49 (756)",
        action: "$59",
      },
      {
        id: 5,
        img: manage2,
        title: "Management",
        descrip: "Risk management and business continuity",
        stars: stars,
        starsText: "4.88 (210)",
        action: "$49 ",
      },
      {
        id: 6,
        img: devlopment2,
        title: "Development",
        descrip: "Full-stack development with the MERN stack",
        stars: stars,
        starsText: "5.00 (985)",
        action: "$72",
      },
    ],
    2: [
      {
        id: 1,
        img: design3,
        title: "Design",
        descrip: "Design systems and pattern libraries",
        stars: stars,
        starsText: "5.00 (1.2K)",
        action: "$99",
      },
      {
        id: 2,
        img: design2,
        title: "Design",
        descrip: "Learn interactive Web Design by building real projects",
        stars: stars,
        starsText: "4.49 (756)",
        action: "$79",
      },
      {
        id: 3,
        img: design1,
        title: "Design",
        descrip: "Advanced photoshop techniques for designers",
        stars: stars,
        starsText: "5.00 (1.2K)",
        action: "Free",
      },
      {
        id: 4,
        img: devlopment3,
        title: "Management",
        descrip: "Building single page applications with angular",
        stars: stars,
        starsText: "5.00 (328)",
        action: "Free ",
      },
      {
        id: 5,
        img: devlopment1,
        title: "Development",
        descrip: "Database integration with MongoDB",
        stars: stars,
        starsText: "4.49 (756)",
        action: "$59",
      },

      {
        id: 6,
        img: devlopment2,
        title: "Development",
        descrip: "Full-stack development with the MERN stack",
        stars: stars,
        starsText: "5.00 (985)",
        action: "$72",
      },
    ],
  };

  return (
    <>
      {/* courses hero section start */}
      <section className="w-full relative h-[32rem] bg-main-colo-1 bg-about-bg bg-cover flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="uppercase font-sans font-medium" data-aos="fade-up">
            START WITH
          </h1>
          <h2
            className="text-3xl md:text-4xl lg:text-6xl my-2 text-main-colo-3 duration-300 font-medium"
            data-aos="fade-up"
          >
            Professional online <br /> courses
          </h2>
        </div>
      </section>
      {/* courses hero section end */}

      {/* Online courses section start */}

      <section className="w-full bg-main-colo-3 pt-12 pb-60 px-5 relative pb-">
        {/* Top Categories section start */}
        <section className="w-[95%] px-5 absolute -top-16 right-1/2 bg-white transform translate-x-1/2 z-10 rounded-lg">
          {/* cards */}
          <div
            className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6   gap-5 items-center"
            data-aos="fade-up"
          >
            {categories.map((items) => (
              <div
                key={items.id}
                className="w-full  lg:h-56 p-5 cursor-pointer  duration-500 rounded-md  flex flex-col items-center justify-center gap-3 "
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-main-colo-3 ">
                  <img src={items.img} alt={items.title} />
                </div>
                <h2 className="text-[13px] font-medium font-sans text-center">
                  {items.title}
                </h2>
                <p className="text-lg font-sans text-center text-gray-500">
                  {items.courses}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Top Categories section end */}

        {/* courses text start */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-[40rem] sm:mt-[28rem] lg:mt-44">
          <div className="text-center md:text-start" data-aos="fade-up">
            <h1 className="text-md font-medium font-sans uppercase">
              Online learning
            </h1>
            <h1 className="text-3xl  lg:text-5xl font-sans font-semibold my-4">
              Top online courses
            </h1>
          </div>
        </div>
        {/* courses text end */}

        {/* Cards start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-auto mt-16 gap-5">
          {categories2[selectedTab].map((card) => (
            <div
              className="bg-white group hover:shadow-2xl "
              key={card.id}
              data-aos="fade-up"
            >
              <div className="overflow-hidden">
                <img
                  src={card.img}
                  alt=""
                  className="group-hover:scale-110 duration-500 w-full"
                />
              </div>
              <div className="px-8 pt-6 pb-4 relative">
                <div className="w-[4.5rem] h-[4.5rem] bg-[#254edb] rounded-full absolute right-8 -top-8 flex items-center justify-center text-xl text-white font-sans group-hover:scale-125 duration-700">
                  {card.action}
                </div>
                <h1 className="uppercase text-sm font-sans text-gray-700">
                  {" "}
                  {card.title}
                </h1>
                <p className="text-2xl font-sans font-semibold my-3">
                  {card.descrip}
                </p>
                <div className="flex my-6">
                  <img src={card.stars} alt="" />
                  <span className="text-sm text-gray-500 ms-2 font-sans">
                    {card.starsText}
                  </span>
                </div>
                <div>
                  <div className="border-t-[1px] border-gray-200   px-3 group-hover:px-5  grid grid-cols-3 group-hover:grid-cols-1 place-items-center gap-5">
                    <div className="py-4 group-hover:hidden duration-500 font-medium flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-gray-800"
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
                          d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
                        />
                      </svg>
                      6 Lessons
                    </div>
                    <div className="border-[1px] border-gray-200 w-0 h-full group-hover:hidden duration-500"></div>
                    <div className="font-medium group-hover:hidden duration-500 flex items-center justify-center text-sm">
                      <svg
                        className="w-4 h-4 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      8k Enrolled
                    </div>
                  </div>

                  <div className="w-full px-5 bg-main-colo-2 py-3 mt-2  rounded-md text-center  cursor-pointer hover:scale-95   hidden group-hover:block duration-500 ">
                    Course Detils
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Cards end */}

        <div className="flex justify-center  my-10">
          <ul
            className="flex gap-5 font-sans text-sm lg:text-lg flex-wrap justify-center mt-5 md:mt-0"
            data-aos="fade-up"
          >
            {Object.keys(categories2).map((category) => (
              <li
                key={category}
                onClick={() => setselectedTab(category)}
                className={` font-sans font-medium w-8 h-8  rounded-full flex items-center justify-center ${
                  selectedTab === category
                    ? "text-main-colo-1 bg-main-colo-2 w-9 h-9"
                    : "text-gray-500 bg-white"
                } duration-300 cursor-pointer `}
              >
                {category}
              </li>
            ))}
          </ul>
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

      {/* Online courses section end */}
    </>
  );
}

export default CoursesPage;
