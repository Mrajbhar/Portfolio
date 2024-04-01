import "./App.css";
import "./RainbowText.css";
import Porfile from "./assets/Photo.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";


function App() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    // Retrieve theme preference from local storage, defaulting to "light" if not available
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    // Toggle theme and store preference in local storage
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleHireMe = () => {
    // Replace 'your.email@example.com' with your actual email address
    const email = "m.rajbhar1235@gmail.com";
    // Replace 'subject' and 'body' with your desired subject and message body
    const subject = encodeURIComponent("Job Opportunity");
    const body = encodeURIComponent(
      "Hello,\n\nI am interested in discussing a job opportunity with you. Please let me know when we can connect.\n\nBest regards,\n[Your Name]"
    );

    // Construct the mailto URI
    const mailtoURI = `mailto:${email}?subject=${subject}&body=${body}`;

    // Open default email client with pre-filled email
    window.location.href = mailtoURI;
  };

  return (
    <div className="max-w-4xl m-auto relative">
      <nav
        className={`${
          scrolling ? "border-b border-gray-900" : ""
        } fixed left-0 right-0 top-0 z-20`}
        id="home"
      >
        <div
          className={`container m-auto px-4 py-6 max-w-4xl ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <h1
                className={`font-bold text-2xl ${
                  theme === "dark" ? "text-cyan-500" : "text-cyan-500"
                }`}
              >
                Portfolio
              </h1>
              
            </div>
            <div className="sm:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`font-bold text-2xl ${
                  theme === "dark" ? "text-cyan-500" : "text-cyan-500"
                }`}
              >
                {menuOpen ? "Close" : "Menu"}
              </button>
            </div>
            <div
              className={`sm:flex flex-grow items-center justify-end ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col sm:flex-row gap-4">
                <li>
                  <a
                    href="#projects"
                    className={`font-bold text-2xl${
                      theme === "dark"
                        ? "hover:text-white"
                        : "hover:text-black"
                    }`}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className={`font-bold  ${
                      theme === "dark"
                        ? "hover:text-white"
                        : "hover:text-black"
                    }`}
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutme"
                    className={`font-bold ${
                      theme === "dark"
                        ? "hover:text-white"
                        : "hover:text-black"
                    }`}
                  >
                    About me
                  </a>
                </li>
                <li>
                  <a
                    href="#hireme"
                    className={`font-bold ${
                      theme === "dark"
                        ? "hover:text-white"
                        : "hover:text-black"
                    }`}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <button
                    onClick={toggleTheme}
                    className="text-gray-600 hover:text-white focus:outline-none"
                  >
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
  <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
    <div>
      <h2 className="font-bold text-4xl rainbow-text">
        Hello, I'm Mohan Rajbhar,
      </h2>
      <div>
        <h2 className="font-bold text-4xl mt-1 gradiant-text">
          FullStack developer
        </h2>
      </div>
      <div>
        <p className="mt-4 text-gray-400">
          As a Full Stack Developer, I bring a comprehensive skill set
          that covers both front-end and back-end development. My
          expertise lies in crafting seamless user experiences and
          robust server-side applications. With a passion for coding and
          problem-solving, I deliver end-to-end solutions that drive
          business success. Let’s build the future of web technology
          together
        </p>
        <div className="mt-4 flex justify-center sm:justify-start">
          <a href="https://www.linkedin.com/in/mohan-rajbhar/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaLinkedin size={32} />
          </a>
          <a href="https://github.com/Mrajbhar" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaGithub size={32} />
          </a>
          <a href="https://leetcode.com/user6413eN/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <SiLeetcode  size={32} />
          </a>
          <a href="https://www.hackerrank.com/profile/m_rajbhar1235" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaHackerrank size={32} />
          </a>
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1LjUolJwqZ51ZYsZmXLq0B2pqO2HWHPZp"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
            Download resume
          </button>
        </a>
      </div>
    </div>
    <div className="relative">
      <div className="profile-container after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
        <img
          src={Porfile}
          className="relative z-10 w-[280px] m-auto sm:w-[600px]"
        />
      </div>
    </div>
  </div>
</section>

        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold text-cyan-500">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  E-Commerce Application
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for E-commerce Appliactions.
                  Reactjs, Nodejs,Mongodb,expressjs
                </p>
                <div className="flex mt-12 gap-2">
                  <a
                    href="https://markethub-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-block"
                  >
                    <button className="w-full text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                    </button>
                  </a>
                  <a
                    href="https://github.com/Mrajbhar/E-Commerce_marn_stack_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-block"
                  >
                    <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout GitHub
                    </button>
                  </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8 ">Portfolio</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for My Portfolio, Reactjs
                </p>
                <div className="flex mt-12 gap-2">
                  <a
                    href="https://portfolio-pink-delta-49.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-block"
                  >
                    <button className="w-full text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                    </button>
                  </a>
                  <a
                    href="https://github.com/Mrajbhar/Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-block"
                  >
                    <button className="w-full text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold text-cyan-500">Technologies</h2>

            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Dot Net</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">C#</h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
              </div>

              <div className="mt-8">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">MVC</h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
              </div>

              <div className="mt-8">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">SQL</h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
              </div>

              <div className="mt-8">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">JAVA</h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
              </div>
              <div className="mt-8">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">HTML</h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Sass & Bootstrap</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript, TypeScript, JQuery
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Nodejs</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Expressjs</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Reactjs</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Mongodb</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold text-cyan-500">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  GitHub
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Entity framework
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Docker
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold text-cyan-500">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
                <p>
                  Graduating from Mumbai University with a BSc in Computer
                  Science, I’ve honed my analytical and technical skills. My
                  education has equipped me with a solid foundation in both
                  theory and practical application. I am eager to leverage my
                  expertise in technology to solve complex problems. With a
                  blend of academic knowledge and hands-on experience, I am
                  prepared to tackle the challenges of the tech industry.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                <p>
                  Embarking on my career journey in 2022, I joined Gretrix Pvt
                  Ltd as a Junior Software Engineer. My role revolves around
                  developing dynamic web applications using .NET MVC, SQL
                  Server, and Core API. I am committed to delivering
                  high-quality software solutions and continuously expanding my
                  technical expertise. At Gretrix, I am not just coding; I’m
                  shaping the future of digital solutions.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
                  After eight enriching months at Gretrix Pvt Ltd , I
                  transitioned to Osource Global Pvt Ltd, where I continue to
                  evolve as a Full Stack Developer. My toolkit includes .NET C#,
                  Oracle SQL, Core API, and MVC, enabling me to deliver robust
                  and scalable solutions. My journey reflects a commitment to
                  growth and a passion for technology. At Osource Global, I am
                  not just coding; I’m innovating for tomorrow’s challenges.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
                  With two years of experience as a Full Stack Developer, I’ve
                  mastered technologies like .NET MVC, C#, Core API, SQL, and
                  JavaScript. My journey has been marked by continuous learning
                  and applying cutting-edge solutions to complex problems. I am
                  dedicated to delivering high-quality, user-centric
                  applications that drive innovation and efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="hireme">
          <div className="container m-auto px-4 py-8">
            <h2 className="text-2xl font-semibold text-cyan-500">Hire Me</h2>
            <p className="mt-4 text-gray-400 typewriter-text">
              If you are interested in discussing a job opportunity with me,
              feel free to reach out via email.
            </p>
            {/* Button to trigger hiring */}
            <button
              className="px-8 py-3 mt-4 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-white"
              onClick={handleHireMe}
            >
              Contact Me
            </button>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="https://www.facebook.com">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mohan-rajbhar/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://github.com/Mrajbhar">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;
