import Category1 from "../../../assets/images/Home1/category1.svg";
import Category2 from "../../../assets/images/Home1/category2.svg";
import Category3 from "../../../assets/images/Home1/category3.svg";
import Category4 from "../../../assets/images/Home1/category4.svg";
import Category5 from "../../../assets/images/Home1/category5.svg";
import Girl from "../../../assets/images/Home1/category-girl.webp";
import Video from "../../../assets/images/Home1/category-video.mp4";
import videoIcons from "../../../assets/images/Home1/video-icons.svg";

function Category() {
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

  return (
    <>
      {/* Top Categories section start */}
      <section className="w-full px-5 py-20">
        {/* content start*/}
        <div className="w-full text-center" data-aos="fade-up">
          <h1 className="font-medium font-sans uppercase">Top Categories</h1>
          <p className="text-4xl font-sans font-medium my-3">
            Discover leading categories to <br /> elevate your journey
          </p>
        </div>
        {/* content end*/}

        {/* cards */}
        <div
          className="w-full flex items-center justify-center lg:justify-between mt-16 flex-wrap lg:flex-nowrap gap-5"
          data-aos="fade-up"
        >
          {categories.map((items) => (
            <div
              key={items.id}
              className="w-full sm:w-[250px] md:w-64 lg:w-[11.5rem] h-56 p-5 cursor-pointer hover:border-none hover:shadow-xl hover:shadow-sky-100 duration-500 rounded-md border-[1px] border-gray-200 flex flex-col items-center justify-center gap-3 "
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-main-colo-3 ">
                <img src={items.img} alt={items.title} />
              </div>
              <h2 className="text-[18px] font-medium font-sans text-center">
                {items.title}
              </h2>
              <p className="text-lg font-sans text-center text-gray-500">
                {items.courses}
              </p>
            </div>
          ))}
        </div>

        {/* video call div start */}
        <div
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10"
          data-aos="fade-up"
        >
          {/* girl div start  */}
          <div className="grid  grid-cols-1 md:grid-cols-2 bg-main-colo-3 rounded-lg">
            <div className="bg-main-colo-3 my-10 md:my-0  flex items-center md:items-start ps-5  justify-center flex-col gap-4 rounded-lg">
              <h1 className="text-2xl font-sans font-medium">
                Quick access to the <br /> popular courses
              </h1>
              <button className="px-10 py-3 hover:scale-95 duration-300 rounded-md text-lg font-sans font-medium bg-main-colo-2 text-main-colo-1">
                View Courses
              </button>
            </div>

            <img
              src={Girl}
              alt=""
              className="object-cover  h-72 w-full rounded-e-lg"
            />
          </div>
          {/* girl div end */}

          {/* video   start */}
          <div className=" bg-[#f1f1e9] rounded-md grid grid-cols-1 md:grid-cols-2 px-8 items-center py-4 gap-5 ">
            <div className="text-center md:text-start">
              <h1 className="text-2xl font-sans font-medium my-4 text-main-colo-1">
                Develop your <br /> skills online!
              </h1>
              <button className="px-10 py-3 bg-main-colo-1 text-white font-sans font-medium rounded-md hover:scale-95 duration-300">
                Apply Now
              </button>
            </div>
            <div className="">
              <div className="relative">
                <video
                  src={Video}
                  className="rounded-md h-full w-full"
                  autoPlay
                  muted
                  loop
                ></video>
                <img
                  src={videoIcons}
                  className="absolute bottom-2  translate-x-1/2 left-1/1 right-1/2  lg:w-28"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* video   end */}
        </div>
        {/* video call div end */}
      </section>
      {/* Top Categories section end */}
    </>
  );
}

export default Category;
