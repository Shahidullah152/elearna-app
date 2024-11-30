import team1 from "../../../assets/images/Home1/team-1.webp";
import team2 from "../../../assets/images/Home1/team-2.webp";
import team3 from "../../../assets/images/Home1/team-3.webp";
import team4 from "../../../assets/images/Home1/team-4.webp";
import team5 from "../../../assets/images/Home1/team-5.webp";
import team6 from "../../../assets/images/Home1/team-6.webp";
import team7 from "../../../assets/images/Home1/team-7.webp";
import team8 from "../../../assets/images/Home1/team-8.webp";
function Team() {
  // Team Cards Data
  const TeamData = [
    {
      img: team1,
      name: "Leslie Upton",
      action: "instructor",
    },
    {
      img: team2,
      name: "Darnell Kuphal",
      action: "instructor",
    },
    {
      img: team3,
      name: "Steven Roob",
      action: "instructor",
    },
    {
      img: team4,
      name: "Wanda Abshire",
      action: "instructor",
    },
    {
      img: team5,
      name: "Lee Schmitt",
      action: "instructor",
    },
    {
      img: team6,
      name: "Jasmine Konopelski",
      action: "instructor",
    },
    {
      img: team7,
      name: "Tonya Flatley",
      action: "instructor",
    },
    {
      img: team8,
      name: "Colin Fay",
      action: "instructor",
    },
  ];
  return (
    <>
      {/* Team hero section start */}
      <section className="w-full relative h-[35rem] bg-team-bg bg-cover bg-center">
        <div className="text-center text-white bg-black/70 w-full h-full flex items-center justify-center px-5">
          <div>
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl lg:text-6xl my-2 text-main-colo-3 duration-300 font-medium"
            >
              Our experts
            </h2>
          </div>
        </div>
      </section>
      {/* Team hero section end */}

      {/* event cards section start */}
      <section className="w-full px-5 py-20 relative ">
        {/* content box start */}
        <div className="text-main-colo-1 text-center" data-aos="fade-up">
          <h1 className="uppercase font-sans font-medium">Contact Us</h1>
          <p className="text-2xl md:text-5xl font-sans font-medium my-4">
            Know our expert team agents, <br /> they solve your questions
          </p>
          <p className="text-gray-400 font-sans font-medium">
            Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
            nam id
          </p>
        </div>
        {/* content box end */}

        {/* Team cards start */}
        <div className="w-full my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center justify-items-center">
          {TeamData.map((values, index) => (
            <div
              className="flex items-center justify-center flex-col group"
              key={index}
              data-aos="fade-up"
            >
              <div className="w-full bg-main-colo-3  flex items-center justify-center px-12 pt-16 rounded-lg overflow-hidden">
                <img
                  src={values.img}
                  alt=""
                  className="w-64 scale-110 group-hover:scale-125 duration-500"
                />
              </div>
              <h1 className="text-xl font-sans font-medium mt-2">
                {values.name}
              </h1>
              <p className="text-gray-500 uppercase text-sm">{values.action}</p>
            </div>
          ))}
        </div>
        {/* Team cards end */}
      </section>
      {/* event cards section end */}
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

export default Team;
