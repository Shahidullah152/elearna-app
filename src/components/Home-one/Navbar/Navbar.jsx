import Logo from "../../../assets/images/Home1/main-logo.svg";
import cart from "../../../assets/images/Home1/Cart-icon.svg";
import curruncy from "../../../assets/images/Home1/curruncy.svg";
import { FaAngleDown, FaAngleRight, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  // collapse state
  const [isOpen, setIsOpen] = useState(false);
  //   Cart Stare
  const [Cart, setCart] = useState(false);
  //   Courses State
  const [CourseDropdown, setCourseDropdown] = useState(false);
  //   Pages State
  const [PagesDropdown, setPagesDropdown] = useState(false);
  //   Free State
  const [isFree, setIsFree] = useState(false);
  //   Paid State
  const [isPaid, setIsPaid] = useState(false);
  // scroll state
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function ScrollFun() {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", ScrollFun);

    return () => {
      window.removeEventListener("scroll", ScrollFun);
    };
  }, []);

  //   Courses Dropdown Func
  function CourseDropdownShow() {
    setCourseDropdown(true);
  }
  function CourseDropdownHide() {
    setCourseDropdown(false);
  }

  //   Pages Dropdown Func
  function PagesDropdownShow() {
    setPagesDropdown(true);
  }
  function PagesDropdownHide() {
    setPagesDropdown(false);
  }

  return (
    <>
      {/* Navbar section start */}
      <nav
        className={` duration-500 ${
          isScrolled ? "bg-main-colo-1" : "bg-transparent"
        } fixed top-0 left-0 w-full p-5 flex items-center justify-between z-50`}
      >
        {/* logo div start*/}
        <div>
          <img src={Logo} alt="" />
        </div>
        {/* logo div end*/}

        {/* menus start  */}
        <ul className="hidden lg:flex items-center justify-center gap-12 text-white font-sans font-medium">
          <li className="relative cursor-pointer group hover:text-main-colo-2 duration-300">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-main-colo-2" : "")}
            >
              Home
            </NavLink>
          </li>
          <li
            className="relative cursor-pointer group hover:text-main-colo-2 duration-300"
            onMouseOver={() => CourseDropdownShow()}
            onMouseLeave={() => CourseDropdownHide()}
          >
            <div className="flex items-center justify-center gap-1">
              Courses
              <FaAngleDown
                className={`mt-1 duration-500 ${
                  CourseDropdown ? "translate-y-1" : ""
                }`}
              />
            </div>

            <div
              className={`absolute shadow-md -left-64 flex mt-5 -z-10  bg-white overflow-hidden w-[900px]  border-main-colo-2 rounded-md  ${
                CourseDropdown ? "h-96 border-b-4" : "h-0"
              }   duration-500`}
            >
              <div className="bg-main-colo-3 w-[330px] h-full p-4 ">
                <div className="w-full bg-white rounded-md text-black flex flex-col p-5 gap-2">
                  <h1 className="text-md font-sans font-normal">
                    Free courses
                  </h1>
                  <p className="text-sm font-normal text-gray-400">
                    Free learning resources for skill development.
                  </p>
                </div>

                <div className="w-full  rounded-md text-black flex flex-col p-5 gap-2">
                  <h1 className="text-md font-sans font-normal">
                    Paid courses
                  </h1>
                  <p className="text-sm font-normal text-gray-400">
                    Courses are available upon purchase.(Requires login)
                  </p>
                </div>
              </div>
              <div className="w-full h-full px-6 py-2">
                <div className="flex">
                  <div className="w-full bg-white rounded-md text-black flex flex-col p-5 gap-2">
                    <h1 className="text-md font-sans font-normal">Finance</h1>
                    <p className="text-sm font-normal text-gray-400">
                      Understanding corporate finance and investments
                    </p>
                  </div>

                  <div className="w-full  rounded-md text-black flex flex-col p-5 gap-2">
                    <h1 className="text-md font-sans font-normal">Design</h1>
                    <p className="text-sm font-normal text-gray-400">
                      Advanced photoshop techniques for designers
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full bg-white rounded-md text-black flex flex-col p-5 gap-2">
                    <h1 className="text-md font-sans font-normal">
                      {" "}
                      Management
                    </h1>
                    <p className="text-sm font-normal text-gray-400">
                      Crisis management and problem-solving strategies
                    </p>
                  </div>

                  <div className="w-full  rounded-md text-black flex flex-col p-5 gap-2">
                    <h1 className="text-md font-sans font-normal">
                      {" "}
                      Development
                    </h1>
                    <p className="text-sm font-normal text-gray-400">
                      Building single page applications with angular
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-main-colo-3 text-black w-full p-5 gap-8 mt-5 rounded-md">
                  <div className="flex gap-8">
                    <img src={curruncy} alt="" />
                    <div>
                      <h1 className="text-md font-sans font-normal">
                        Increase your potential earnings
                      </h1>
                      <p className="text-sm font-normal text-gray-400">
                        {" "}
                        Lorem ipsum dolor sit amet scelerisque <br /> integer
                        adipiscing velit sem sed.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className=" bg-main-colo-2 px-3 py-2 rounded-[4px] text-sm">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className="relative cursor-pointer group hover:text-main-colo-2 duration-300"
            onMouseOver={() => PagesDropdownShow()}
            onMouseLeave={() => PagesDropdownHide()}
          >
            <div className="flex items-center justify-center gap-1">
              Pages
              <FaAngleDown
                className={`mt-1 duration-500 ${
                  PagesDropdown ? "translate-y-1" : ""
                }`}
              />
            </div>

            <div
              className={`absolute mt-5 overflow-hidden w-auto -left-7 ${
                PagesDropdown ? "h-[290px]" : "h-0"
              } duration-500`}
            >
              <ul className="bg-white shadow-md flex flex-col gap-3 text-black w-44 py-5 px-10 rounded-md group-hover:border-b-4   border-main-colo-2">
                <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-normal">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-main-colo-2" : ""
                    }
                    onClick={() => setPagesDropdown(!PagesDropdown)}
                  >
                    About
                  </NavLink>
                </li>
                <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-normal">
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      isActive ? "text-main-colo-2" : ""
                    }
                    onClick={() => setPagesDropdown(!PagesDropdown)}
                  >
                    {" "}
                    Course
                  </NavLink>
                </li>
                <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-normal">
                  <NavLink
                    to="/FAQ"
                    className={({ isActive }) =>
                      isActive ? "text-main-colo-2" : ""
                    }
                    onClick={() => setPagesDropdown(!PagesDropdown)}
                  >
                    FAQ
                  </NavLink>
                </li>
                <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-normal">
                  <NavLink
                    to="/pricing"
                    className={({ isActive }) =>
                      isActive ? "text-main-colo-2" : ""
                    }
                    onClick={() => setPagesDropdown(!PagesDropdown)}
                  >
                    Pricing
                  </NavLink>
                </li>
                <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-normal">
                  <NavLink
                    to="/career"
                    className={({ isActive }) =>
                      isActive ? "text-main-colo-2" : ""
                    }
                    onClick={() => setPagesDropdown(!PagesDropdown)}
                  >
                    Career
                  </NavLink>
                </li>
                <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-normal">
                  <NavLink
                    to="/event"
                    className={({ isActive }) =>
                      isActive ? "text-main-colo-2" : ""
                    }
                    onClick={() => setPagesDropdown(!PagesDropdown)}
                  >
                    {" "}
                    Events
                  </NavLink>
                </li>
                <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-normal">
                  <NavLink
                    to="/team"
                    className={({ isActive }) =>
                      isActive ? "text-main-colo-2" : ""
                    }
                    onClick={() => setPagesDropdown(!PagesDropdown)}
                  >
                    {" "}
                    Team
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative cursor-pointer group hover:text-main-colo-2 duration-300">
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-main-colo-2" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li className="relative cursor-pointer group hover:text-main-colo-2 duration-300">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-main-colo-2" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* menus end */}

        {/* btn div start */}
        <div className="flex items-center justify-between gap-5 md:gap-10">
          <div className="relative cursor-pointer group">
            <img
              src={cart}
              alt=""
              onClick={() => setCart(!Cart)}
              className="w-4 md:w-auto group-hover:scale-95 duration-300"
            />
            <div className="absolute top-0 -right-3 cursor-pointer w-4 h-4 md:w-5 md:h-5 bg-main-colo-2 text-black flex items-center justify-center rounded-full text-sm">
              0
            </div>
          </div>
          {/* Cart Div start */}
          {Cart && (
            <div className="absolute w-full h-screen bg-black/30 top-0 left-0 flex justify-end z-50">
              <div className="w-full sm:w-[40%] h-full bg-main-colo-3 ">
                <div className="w-full p-5  border-b-[1px] border-gray-400 flex items-center justify-between">
                  <h1 className="text-2xl font-serif font-bold">Your Cart</h1>
                  <svg
                    className="w-6 h-6 text-gray-800 cursor-pointer"
                    onClick={() => setCart(!Cart)}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="n"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                </div>

                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-md font-sans font-medium py-3 text-gray-400">
                    No item Found
                  </h1>
                </div>
              </div>
            </div>
          )}
          {/* Cart Div end */}

          {/* login & register btn start */}
          <div className="flex items-center justify-center gap-2 text-white font-sans font-medium">
            <button className="text-white text-sm md:text-[1rem] hover:text-main-colo-2 duration-300">
              Login
            </button>{" "}
            |
            <button className="text-white text-sm md:text-[1rem] hover:text-main-colo-2 duration-300">
              Register
            </button>
          </div>
          {/* login & register btn start */}

          {/* collapse btn start */}
          <div
            className="text-white  lg:hidden flex flex-col gap-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`border-[1px] border-white w-7 transform transition-all duration-700 ${
                isOpen ? "-rotate-45 translate-y-[5px]" : ""
              }`}
            ></div>
            <div
              className={`border-[1px] border-white w-7 transform transition-all duration-700 ${
                isOpen ? "rotate-45 -translate-y-[5px]" : ""
              }`}
            ></div>
          </div>
          {/* collapse btn end */}
        </div>
        {/* btn div end */}
      </nav>
      {/* Navbar section end */}

      {/* Menus with collapse start */}
      <div
        className={`w-full px-6 fixed top-16 z-50 left-0  overflow-hidden transition-all duration-300 ${
          isOpen ? "h-screen py-5" : "h-0"
        } bg-white  `}
      >
        {/* menus start  */}
        <ul className="flex flex-col  items-start gap-6  font-sans font-medium w-full ">
          <li className="relative cursor-pointer group hover:text-main-colo-2 duration-300">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-main-colo-2" : "")}
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </NavLink>
          </li>
          <li
            className="relative cursor-pointer group hover:text-main-colo-2 duration-300 w-full"
            onMouseOver={() => CourseDropdownShow()}
            onMouseLeave={() => CourseDropdownHide()}
          >
            <div className="flex items-center justify-between gap-1 w-full">
              Courses
              <FaAngleDown
                className={`mt-1 ${
                  CourseDropdown ? "rotate-180" : ""
                } duration-500`}
              />
            </div>

            <div
              className={`overflow-hidden w-auto  ${
                CourseDropdown ? "h-auto" : "h-0"
              } duration-500`}
            >
              <ul className="bg-white flex flex-col gap-3 text-black w-full py-5 px-10 rounded-sm group-hover:border-b-2   border-main-colo-2">
                <li
                  className="hover:text-main-colo-2 duration-300"
                  onClick={() => setIsFree(!isFree)}
                >
                  <div className="flex items-center justify-between gap-1 w-full">
                    Free
                    <FaAngleRight
                      className={`mt-1  duration-500 ${
                        isFree ? "rotate-90" : ""
                      } `}
                    />
                  </div>

                  <div
                    className={`w-full  ms-2 overflow-hidden ${
                      isFree ? "h-32 mt-3" : "h-0"
                    } duration-300`}
                  >
                    <ul className="w-full flex flex-col gap-3">
                      <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-medium text-black text-sm">
                        Corporate Finance And Investments
                      </li>
                      <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-medium text-black text-sm">
                        Advanced Photoshop Techniques
                      </li>
                      <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-medium text-black text-sm">
                        Crisis Management
                      </li>
                      <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-medium text-black text-sm">
                        Single Page Applications With Angular
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className="hover:text-main-colo-2 duration-500"
                  onClick={() => setIsPaid(!isPaid)}
                >
                  <div className="flex items-center justify-between gap-1 w-full">
                    Paid
                    <FaAngleRight
                      className={`mt-1  duration-500 ${
                        isPaid ? "rotate-90" : ""
                      } `}
                    />
                  </div>

                  <div
                    className={`w-full  ms-2 overflow-hidden ${
                      isPaid ? "h-54 mt-3" : "h-0"
                    } duration-700`}
                  >
                    <ul className="w-full flex flex-col gap-3">
                      <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-medium text-black text-sm">
                        Personal And Business Finance
                      </li>
                      <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-medium text-black text-sm">
                        Management And Process Improvement
                      </li>
                      <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-medium text-black text-sm">
                        Interactive Web Design
                      </li>
                      <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-medium text-black text-sm">
                        Design Systems And Pattern Libraries
                      </li>
                      <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-medium text-black text-sm">
                        Grow Your Brand And Reach Your Audience
                      </li>
                      <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-medium text-black text-sm">
                        Risk Management
                      </li>
                      <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-medium text-black text-sm">
                        Database Integration With MongoDB
                      </li>
                      <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-medium text-black text-sm">
                        Full-Stack Development with MERN Stack
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li
            className="relative cursor-pointer group hover:text-main-colo-2 duration-300 w-full"
            onClick={() => setPagesDropdown(!PagesDropdown)}
          >
            <div className="flex items-center justify-between gap-1">
              Pages
              <FaAngleDown
                className={`mt-1 ${
                  PagesDropdown ? "rotate-180" : ""
                } duration-500`}
              />
            </div>

            <div
              className={` overflow-hidden w-auto ${
                PagesDropdown ? "h-[290px]" : "h-0"
              } duration-500`}
            >
              <ul className="bg-white flex flex-col gap-3 text-black w-full py-5 px-10 rounded-sm group-hover:border-b-2   border-main-colo-2">
                <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-normal">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-main-colo-2" : ""
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    About
                  </NavLink>
                </li>
                <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-normal">
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      isActive ? "text-main-colo-2" : ""
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {" "}
                    Course
                  </NavLink>
                </li>
                <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-normal">
                  <NavLink
                    to="/FAQ"
                    className={({ isActive }) =>
                      isActive ? "text-main-colo-2" : ""
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    FAQ
                  </NavLink>
                </li>
                <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-normal">
                  <NavLink
                    to="/pricing"
                    className={({ isActive }) =>
                      isActive ? "text-main-colo-2" : ""
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Pricing
                  </NavLink>
                </li>
                <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-normal">
                  <NavLink
                    to="/career"
                    className={({ isActive }) =>
                      isActive ? "text-main-colo-2" : ""
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Career
                  </NavLink>
                </li>
                <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-normal">
                  <NavLink
                    to="/event"
                    className={({ isActive }) =>
                      isActive ? "text-main-colo-2" : ""
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {" "}
                    Events
                  </NavLink>
                </li>
                <li className="hover:text-main-colo-2 duration-300 hover:translate-x-1 font-sans font-normal">
                  <NavLink
                    to="/team"
                    className={({ isActive }) =>
                      isActive ? "text-main-colo-2" : ""
                    }
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {" "}
                    Team
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative cursor-pointer group hover:text-main-colo-2 duration-300">
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-main-colo-2" : "")}
              onClick={() => setIsOpen(!isOpen)}
            >
              Blog
            </NavLink>
          </li>
          <li className="relative cursor-pointer group hover:text-main-colo-2 duration-300">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-main-colo-2" : "")}
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* menus end */}
      </div>
      {/* Menus with collapse end */}
    </>
  );
}

export default Navbar;
