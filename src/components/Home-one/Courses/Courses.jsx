import { useState } from "react";
import manage1 from "../../../assets/images/Home1/manage-1.webp";
import manage2 from "../../../assets/images/Home1/manage-2.webp";
import devlopment1 from "../../../assets/images/Home1/development-1.webp";
import devlopment2 from "../../../assets/images/Home1/development-2.webp";
import devlopment3 from "../../../assets/images/Home1/development-3.webp";
import finance1 from "../../../assets/images/Home1/finance-1.webp";
import finance2 from "../../../assets/images/Home1/finance-3.webp";
import design1 from "../../../assets/images/Home1/design-1.webp";
import design2 from "../../../assets/images/Home1/design-2.webp";
import design3 from "../../../assets/images/Home1/design-3.webp";
import stars from "../../../assets/images/Home1/stars.svg";

function Courses() {
  // Seleced Tabs State
  const [selectedTab, setselectedTab] = useState("All Categories");

  //   Categories Data
  const categories = {
    "All Categories": [
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
    Design: [
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
    ],
    Development: [
      {
        id: 1,
        img: devlopment3,
        title: "Management",
        descrip: "Building single page applications with angular",
        stars: stars,
        starsText: "5.00 (328)",
        action: "Free ",
      },
      {
        id: 2,
        img: devlopment1,
        title: "Development",
        descrip: "Database integration with MongoDB",
        stars: stars,
        starsText: "4.49 (756)",
        action: "$59",
      },

      {
        id: 3,
        img: devlopment2,
        title: "Development",
        descrip: "Full-stack development with the MERN stack",
        stars: stars,
        starsText: "5.00 (985)",
        action: "$72",
      },
    ],
    Management: [
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
        img: manage2,
        title: "Management",
        descrip: "Risk management and business continuity",
        stars: stars,
        starsText: "4.88 (210)",
        action: "$49 ",
      },
    ],
    Finance: [
      {
        id: 1,
        img: finance1,
        title: "Finance",
        descrip: "Operations management and process improvement",
        stars: stars,
        starsText: "5.00 (812)",
        action: "Free",
      },
      {
        id: 2,
        img: finance2,
        title: "Finance",
        descrip: "The complete guide to personal and business finance",
        stars: stars,
        starsText: "4.88 (210)",
        action: "$99",
      },
    ],
  };

  return (
    <>
      {/* Online courses section start */}

      <section className="w-full bg-main-colo-3 pt-12 pb-4 px-5">
        {/* courses text start */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="text-center md:text-start" data-aos="fade-up">
            <h1 className="text-md font-medium font-sans uppercase">
              Online learning
            </h1>
            <h1 className="text-3xl  lg:text-5xl font-sans font-semibold my-4">
              Top online courses
            </h1>
          </div>
          <div className="flex justify-center lg:justify-end">
            <ul
              className="flex gap-5 font-sans text-sm lg:text-lg flex-wrap justify-center mt-5 md:mt-0"
              data-aos="fade-up"
            >
              {Object.keys(categories).map((category) => (
                <li
                  key={category}
                  onClick={() => setselectedTab(category)}
                  className={` font-sans font-medium ${
                    selectedTab === category
                      ? "text-main-colo-1"
                      : "text-gray-500"
                  } duration-100 cursor-pointer `}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* courses text end */}

        {/* Cards start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-auto mt-16 gap-5">
          {categories[selectedTab].map((card) => (
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
                  <div className="border-t-[1px] border-gray-200  px-0 sm:px-3 group-hover:px-5  grid grid-cols-3 group-hover:grid-cols-1 place-items-center gap-5">
                    <div className="py-1 sm:py-4 group-hover:hidden duration-500 font-medium flex flex-wrap sm:flex-nowrap items-center justify-center">
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
                    <div className="font-medium group-hover:hidden duration-500 flex flex-wrap sm:flex-nowrap items-center justify-center text-sm">
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

        {/* cards text div start */}
        <div className="flex items-center justify-center text-center my-20">
          <div className="bg-main-colo-1 text-white  font-sans font-medium rounded-lg md:rounded-full px-20 py-5">
            We assist you in finding the ideal tutor at no cost. Browse all
            available courses
          </div>
        </div>
        {/* cards text div end */}
      </section>

      {/* Online courses section end */}
    </>
  );
}

export default Courses;
