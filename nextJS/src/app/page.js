"use client";
import { CiMenuBurger } from "react-icons/ci";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeroInput from "./input";
import Planetimg from "../../public/planet_logo_image.png";
import Image from "next/image";
import Showcase from "./showcase";
import Logo from "../../public/logo.png";
import Data from "./data";
import { useState } from "react";
import AppStore from "../../public/apple-app-store.png";
import PlayStore from "../../public/goole-play-store.png";
import ProjectImg from "../../public/project-img.png";
import GradientSection from "./gradientSection";
import ApplicationDevelopment from "./applicationDevelopment";
import Team from "./team";
import FAQ from "./faq";
import Footer from "./footer";
import Phone1 from '../../public/applicationDevelopmentStage.png';

const projects = [
  {
    title: "Project 1",
    description:
      "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.",
    details: "Business analysis / iOS / Android / QA / UI/UX Design",
    location: "India",
    industry: "Real Estate",
    growth: "400%",
    users: "+ 200 000",
    images: [ProjectImg],
  },
  {
    title: "Project 2",
    description: "Description for Project 2",
    details: "Details for Project 2",
    location: "Location for Project 2",
    industry: "Industry for Project 2",
    growth: "Growth for Project 2",
    users: "Users for Project 2",
    images: [ProjectImg],
  },
  {
    title: "Project 3",
    description: "Description for Project 3",
    details: "Details for Project 3",
    location: "Location for Project 3",
    industry: "Industry for Project 3",
    growth: "Growth for Project 3",
    users: "Users for Project 3",
    images: [ProjectImg],
  },
  {
    title: "Project 4",
    description: "Description for Project 4",
    details: "Details for Project 4",
    location: "Location for Project 4",
    industry: "Industry for Project 4",
    growth: "Growth for Project 4",
    users: "Users for Project 4",
    images: [ProjectImg],
  },
];

const hero_section_input = [
  {
    inputtype: "text",
    inputFor: "fullname",
  },
  {
    inputtype: "number",
    inputFor: "Phone number",
  },
  {
    inputtype: "text",
    inputFor: "Business name",
  },
  {
    inputtype: "email",
    inputFor: "Business email",
  },
];

const links = [
  "iOS development",
  "Android development",
  "Web development",
  "UI/UX design",
  "Testing",
  "Launch",
  "IT consulting",
];

const safeData = Data || [];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <main className="">
      {/* Hero Section */}
      <div className="bg-slate-100 py-4">
        {/* navigation bar */}
        <nav className="rounded-lg bg-white flex justify-between shadow-md m-auto py-5 px-4 w-3/4 z-10">
          <div className="left flex space-x-10">
            <div>
              <Image className="w-28" src={Logo} />
            </div>
            <div className="hidden md:flex my-2 space-x-3">
              <div className="navigation-link-design">Services</div>
              <div className="navigation-link-design">Media</div>
              <div className="navigation-link-design">Cases</div>
              <div className="navigation-link-design">FAQ</div>
              <div className="navigation-link-design">Contacts</div>
            </div>
          </div>
          <div className="right hidden md:flex space-x-10">
            <div className="custom-green">+91 000000000</div>
            <div className="">
              <Dialog>
                <DialogTrigger>Sign up</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center">Sign Up</DialogTitle>
                    <DialogDescription>
                      <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
                        <form className="text-center">
                          <div className="space-y-5 text-center">
                            <input
                              className="p-2 border border-gray-300 rounded"
                              type="text"
                              placeholder="Full name"
                            />
                            <input
                              className="p-2 border border-gray-300 rounded"
                              type="text"
                              placeholder="Phone number"
                            />
                            <input
                              className="p-2 border border-gray-300 rounded"
                              type="text"
                              placeholder="Business name"
                            />
                            <input
                              className="p-2 border border-gray-300 rounded"
                              type="email"
                              placeholder="Business mail"
                            />
                          </div>
                          <button className="bg-custom-green my-4 w-56 text-white p-2 rounded transition">
                            Submit
                          </button>
                        </form>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="hamburger md:hidden">
            <Dialog>
              <DialogTrigger>
                <CiMenuBurger />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-center">Sign Up</DialogTitle>
                  <DialogDescription>
                    <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
                      <form className="text-center">
                        <div className="space-y-5">
                          <input
                            className="p-2 border border-gray-300 rounded"
                            type="text"
                            placeholder="Full name"
                          />
                          <input
                            className="p-2 border border-gray-300 rounded"
                            type="text"
                            placeholder="Phone number"
                          />
                          <input
                            className="p-2 border border-gray-300 rounded"
                            type="text"
                            placeholder="Business name"
                          />
                          <input
                            className="p-2 border border-gray-300 rounded"
                            type="email"
                            placeholder="Business mail"
                          />
                        </div>
                        <button className="bg-custom-green my-4 w-56 text-white p-2 rounded transition">
                          Submit
                        </button>
                      </form>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </nav>

        <div className="hero-section m-auto w-3/4 py-4 flex">
          <div className="left w-100 space-y-5 md:w-1/2 pl-4">
            <div className="text-2xl">
              <p>
                <span className="custom-yellow font-bold">
                  User-Centric Excellence
                </span>
                : Our
              </p>
              <p>
                <span className="font-bold">App Development services</span>
              </p>
              <p>Tackles Your Pain Points</p>
            </div>

            <div className="text-sm">
              <p>
                Experience a Seamless Digital journey with{" "}
                <span className="custom-green font-semibold">Desun</span> -
                Where Every Line
              </p>
              <p>
                of Code Resolves Your Challenges and{" "}
                <span className="custom-yellow font-semibold">
                  Elevate Your App Experience
                </span>
              </p>
              <p>to Unparalled Heights.</p>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      className="p-2 border border-gray-300 rounded"
                      type="text"
                      placeholder="Full name"
                    />
                    <input
                      className="p-2 border border-gray-300 rounded"
                      type="text"
                      placeholder="Phone number"
                    />
                    <input
                      className="p-2 border border-gray-300 rounded"
                      type="text"
                      placeholder="Business name"
                    />
                    <input
                      className="p-2 border border-gray-300 rounded"
                      type="email"
                      placeholder="Business mail"
                    />
                  </div>
                  <button
                    className={`bg-custom-green text-white p-2 rounded transition`}
                  >
                    Get Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="right hidden md:block">
            <Image src={Phone1}/>
          </div>
        </div>
      </div>

      <div className="flex m-auto md:w-3/4 space-x-4 border-t-2 border-b-2 border-slate-200 my-4 py-10">
        <div className="mobile flex px-0">
          <Image alt="planet text" className="w-1/3" src={Planetimg} />
          <Image alt="planet text" className="w-1/3" src={Planetimg} />
          <Image alt="planet text" className="w-1/3" src={Planetimg} />
        </div>
        <div className="desktop hidden md:flex">
          <Image alt="planet text" src={Planetimg} />
          <Image alt="planet text" src={Planetimg} />
          <Image alt="planet text" src={Planetimg} />
          <Image alt="planet text" src={Planetimg} />
        </div>
      </div>

      <div className="showcase m-auto px-2 py-10 md:w-3/4 md:flex">
        <div className="showcase-left space-y-5 md:w-1/2">
          <div>
            <h1 className="font-bold text-xl md:text-2xl">
              Full development Cycle
            </h1>
          </div>
          <div>
            <p className="text-sm">We use proven technologies</p>
          </div>
          <div>
            <div className="font-semibold">
              <h3>Web</h3>
            </div>
            <div>
              PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/ Nuxt
              / MySQL / Laravel / GO lang / django / Python
            </div>
          </div>
          <div>
            <div className="font-semibold">
              <h3>Mobile</h3>
            </div>
            <div>
              Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm /
              Coroutine / RxJava / RxSwift / Unit Test / Navigation
            </div>
          </div>
        </div>

        <div className="showcase-right space-y-4">
          {links.map((val, index) => {
            return <Showcase key={index} dispname={val} />;
          })}
        </div>
      </div>

      <div className="bg-slate-100">
        <div className=" px-2 m-auto py-10 md:w-3/4">
          <div className="font-bold my-5 text-2xl">
            <p>
              Developed more than <span className="custom-green">100</span>
            </p>
            <p>
              project in <span className="custom-green">15</span> industries
            </p>
          </div>

          <div className="md:grid-container">
            {safeData.map((val, index) => (
              <div key={index} className="md:grid-item space-x-3 flex">
                <span className="shadow-black-800 border rounded-full bg-white p-2">
                  <Image className="w-6" src={val.image} alt="Data Image" />
                </span>
                <span className="py-2">{val.text}</span>
              </div>
            ))}
          </div>

          <div className="space-y-10 my-16">
            <div className="font-bold text-2xl">Projects we are proud of</div>
            <div>
              <p>
                Our Software development company is truely pround of the
                wonderful clients we have
              </p>
              <p>worked with. We enjoy a long term partnership.</p>
            </div>
          </div>

          <div className="">
            <div className="flex space-x-4 mb-8">
              {projects.map((project, index) => (
                <button
                  key={index}
                  className={`p-2 ${
                    selectedProject === index
                      ? "text-yellow-500 border-b-2 border-yellow-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setSelectedProject(index)}
                >
                  {project.title}
                </button>
              ))}
            </div>

            <div className="md:flex">
              <div className="mb-8 md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">
                  {projects[selectedProject].title}
                </h2>
                <p className="mb-4">{projects[selectedProject].description}</p>
                <p className="mb-4">{projects[selectedProject].details}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-yellow-500">📍</span>
                  <span>{projects[selectedProject].location}</span>
                  <span className="ml-4 text-yellow-500">🏢</span>
                  <span>{projects[selectedProject].industry}</span>
                </div>
                <div className="flex space-x-8 mb-4">
                  <div className="">
                    <span className="text-2xl font-bold">
                      {projects[selectedProject].growth}
                    </span>
                    <p>User Growth</p>
                  </div>
                  <div className="">
                    <span className="text-2xl font-bold">
                      {projects[selectedProject].users}
                    </span>
                    <p>Active Users</p>
                  </div>
                </div>
                <div className="flex space-x-5">
                  <div>
                    <Image src={AppStore} alt="appstore" />
                  </div>
                  <div>
                    <Image src={PlayStore} alt="playstore" />
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                {projects[selectedProject].images.map((image, index) => (
                  <div key={index} className="">
                    <Image
                      src={image}
                      alt={`Project Image ${index + 1}`}
                      objectFit="contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Section Component */}
      <GradientSection />

      {/*Application Development Stages*/}
      <ApplicationDevelopment />

      {/* Team page */}
      <Team />

      {/*FAQ*/}
      <FAQ />

      {/* Footer */}
      <Footer />
    </main>
  );
}
