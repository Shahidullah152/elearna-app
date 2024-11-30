import Logo from "../../../assets/images/Home1/main-logo.svg";

function Footer() {
  return (
    <>
      {/* footer start */}
      <footer className="w-full px-5 bg-main-colo-1 pt-32 bg-footer-bg bg-cover bg-no-repeat ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10  ">
          <div>
            <img src={Logo} alt="" />
            <p className="text-gray-500 font-sans font-medium mt-5">
              Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
              eget amet ut tristique cras.
            </p>
          </div>
          <div className="text-gray-500 font-sans font-medium">
            <h1 className="text-white text-2xl mb-5">Quick links</h1>
            <ul className="flex flex-col gap-4">
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Home
              </li>
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Events
              </li>
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Caleer
              </li>
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Instructor
              </li>
            </ul>
          </div>
          <div className="text-gray-500 font-sans font-medium">
            <h1 className="text-white text-2xl mb-5">Popular courses</h1>
            <ul className="flex flex-col gap-4">
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Finance
              </li>
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Management
              </li>
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Design
              </li>
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Web development
              </li>
            </ul>
          </div>
          <div className="text-gray-500 font-sans font-medium">
            <h1 className="text-white text-2xl mb-5">Company</h1>
            <ul className="flex flex-col gap-4">
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                About
              </li>
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Courses
              </li>
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Blog
              </li>
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Contact
              </li>
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                License
              </li>
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Pricing
              </li>
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                404
              </li>
            </ul>
          </div>
          <div className="text-gray-500 font-sans font-medium">
            <h1 className="text-white text-2xl mb-5">CMS</h1>
            <ul className="flex flex-col gap-4">
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Course details
              </li>
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Instructor details
              </li>
              <li className="hover:text-main-colo-2 duration-300 cursor-pointer">
                Blog details
              </li>
            </ul>
          </div>
        </div>

        {/* sub footer start */}
        <div className="mx-5 border-t-[1px] border-gray-300 mt-5 flex items-center justify-between py-5 flex-wrap gap-5">
          <h1 className="uppercase text-white font-sans font-medium ">
            <span className="text-gray-500">Design by</span>{" "}
            <span className="hover:text-main-colo-2 duration-300 cursor-pointer">
              AZ Coder
            </span>
          </h1>
          <h1 className="uppercase text-white font-sans font-medium ">
            <span className="text-gray-500">Powered by</span>{" "}
            <span className="hover:text-main-colo-2 duration-300 cursor-pointer">
              Upskil
            </span>
          </h1>
        </div>
        {/* sub footer end */}
      </footer>
      {/* footer end */}
    </>
  );
}

export default Footer;
