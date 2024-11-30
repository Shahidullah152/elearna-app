import Marquee from "react-fast-marquee";
import Event1 from "../../../assets/images/Home1/event-1.webp";
import Event2 from "../../../assets/images/Home1/event-2.webp";
import Event3 from "../../../assets/images/Home1/event-3.webp";
import Event4 from "../../../assets/images/Home1/event-4.webp";
import Event5 from "../../../assets/images/Home1/event-5.webp";
import Event6 from "../../../assets/images/Home1/event-6.webp";
function Event() {
  // events card data
  const Carddate = [
    {
      img: Event1,
      date: "4",
      month: "OCT",
      year: "2024",
      title: "Leadership strategies for higher education institutions",
      address: " New York,USA 9:00 am - 7:00 pm",
    },

    {
      img: Event2,
      date: "18",
      month: "OCT",
      year: "2024",
      title: "Professional development for online educators and trainers",
      address: "Kansas City,USA10:00 am - 3:00 pm",
    },

    {
      img: Event3,
      date: "20",
      month: "OCT",
      year: "2024",
      title: "Navigating the future of online education platforms",
      address: "Kansas City,USA10:00 am - 3:00 pm",
    },
    {
      img: Event4,
      date: "4",
      month: "OCT",
      year: "2024",
      title: "Leadership strategies for higher education institutions",
      address: " New York,USA 9:00 am - 7:00 pm",
    },

    {
      img: Event5,
      date: "18",
      month: "OCT",
      year: "2024",
      title: "Professional development for online educators and trainers",
      address: "Kansas City,USA10:00 am - 3:00 pm",
    },

    {
      img: Event6,
      date: "20",
      month: "OCT",
      year: "2024",
      title: "Navigating the future of online education platforms",
      address: "Kansas City,USA10:00 am - 3:00 pm",
    },
  ];
  return (
    <>
      {/* Creer hero section start */}
      <section className="w-full relative h-[38rem] bg-event-bg bg-cover bg-center">
        <div className="text-start text-white bg-black/60 w-full h-full flex items-center justify-start px-5">
          <div>
            <h1 data-aos="fade-up" className="uppercase mb-4">
              enjoy with
            </h1>
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl lg:text-6xl my-2 text-main-colo-3 duration-300 font-medium"
            >
              Great upcoming events <br /> for our institute
            </h2>
          </div>
        </div>
      </section>
      {/* Creer hero section end */}

      {/* event cards section start */}
      <section className="w-full px-5 py-20 relative ">
        {/* content box start */}
        <div className="text-main-colo-1 text-center" data-aos="fade-up">
          <h1 className="uppercase font-sans font-medium">Our event</h1>
          <p className="text-2xl md:text-5xl font-sans font-medium my-4">
            Professional online events
          </p>
          <p className="text-gray-400 font-sans font-medium">
            Lorem ipsum dolor sit amet consectetur. Congue sit pellentesque eu
            scelerisque urna a <br /> porttitor. Massa nec ipsum sed etiam et
            facilisis bibendum.
          </p>
        </div>
        {/* content box end */}

        {/* Cards start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 mb-56 sm:mb-32">
          {Carddate.map((values, index) => (
            <div
              className="relative overflow-hidden group cursor-pointer"
              key={index}
              data-aos="fade-up"
            >
              <img src={values.img} alt="" className="rounded-md" />
              <div className="absolute -bottom-44 bg-white h-44 group-hover:bottom-0 duration-500">
                <ul className="list-disc bg-main-colo-2 font-sans font-medium p-1">
                  <Marquee speed={30} gradient={false}>
                    <li className="me-20">See Event Details</li>
                    <li>See Event Details</li>
                  </Marquee>
                </ul>
                <div className="text-center py-3 px-2">
                  <h1 className="text-gray-500 font-sans uppercase">
                    {" "}
                    {values.address}
                  </h1>
                  <p className="text-2xl font-sans font-medium">
                    {values.title}
                  </p>
                </div>
              </div>

              <div className="bg-white absolute top-0 -right-32 group-hover:right-0 duration-500 px-4 py-1 rounded-bl-md flex items-center gap-3">
                <h1 className="text-5xl font-sans font-medium">
                  {values.date}
                </h1>{" "}
                <div className="flex flex-col text-gray-500">
                  <span className="text-sm">{values.month}</span>{" "}
                  <span className="text-sm">{values.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Cards end */}

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
      {/* event cards section end */}
    </>
  );
}

export default Event;
