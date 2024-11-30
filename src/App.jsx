import "./App.css";
import Category from "./components/Home-one/Categories/Category";
import Courses from "./components/Home-one/Courses/Courses";
import Hero from "./components/Home-one/Hero/Hero";
import Navbar from "./components/Home-one/Navbar/Navbar";
import "aos/dist/aos.css";
import Offer from "./components/Home-one/OFFER/Offer";
import Testimonials from "./components/Home-one/testimonials/Testimonials";
import TrendingCourse from "./components/Home-one/Courses/TrendingCourse";
import Footer from "./components/Home-one/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Home-one/About/About";
import CoursesPage from "./components/Home-one/Courses/CoursesPage";
import FAQ from "./components/Home-one/FAQ/FAQ";
import Pricing from "./components/Home-one/Pricing/Pricing";
import Career from "./components/Home-one/Career/Career";
import Event from "./components/Home-one/Event/Event";
import Team from "./components/Home-one/Team/Team";
import Blog from "./components/Home-one/Blog/Blog";
import { useEffect } from "react";
import Aos from "aos";
import Contact from "./components/Home-one/Contact/Contact";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Category />
                <Courses />
                <Offer />
                <Testimonials />
                <TrendingCourse />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/courses"
            element={
              <>
                <CoursesPage />
              </>
            }
          />
          <Route
            path="/FAQ"
            element={
              <>
                <FAQ />
              </>
            }
          />
          <Route
            path="/pricing"
            element={
              <>
                <Pricing />
              </>
            }
          />
          <Route
            path="/career"
            element={
              <>
                <Career />
              </>
            }
          />
          <Route
            path="/event"
            element={
              <>
                <Event />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Team />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Blog />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
