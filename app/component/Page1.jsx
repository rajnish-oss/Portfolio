"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Orbitron, Orbit } from "next/font/google";
import { ImArrowUpRight2 } from "react-icons/im";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const orbitron = Orbitron({
  weight: "400",
});

const orbit = Orbit({
  weight: "400",
});

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);

const Page1 = () => {
  const page1 = useRef();
  const page2 = useRef();
  const rfp = useRef();
  const tronBike = useRef();
  const bikeLine = useRef();
  const prLine = useRef();
  const exp = useRef();
  const expside = useRef();
  const expbottom = useRef();
  const expLine = useRef();
  const tlLine1 = useRef();
  const tlLine2 = useRef();
  const ttop = useRef();
  const tlContainer = useRef();
  const expHead = useRef();
  const hymImage = useRef();
  const about = useRef();
  const ab = useRef();
  const abside = useRef();
  const abbottom = useRef();
  const contact = useRef();

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.to(page1.current, {
      y: -750,
      delay: 2,
      duration: 2,
      ease: "bounce.out",
    });
    tl.to(page2.current, {
      y: 0,
    });
    tl.to(
      rfp.current,
      {
        y: -5,
        scale: 1.001,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      },
      "<"
    );
    gsap.utils.toArray(".hymCircle").forEach((el) => {
      tl.to(el, {
        scale: 1.002,
        repeat: -1,
        ease: "power1.inOut",
      });
    }, "<"),
      tl.to(bikeLine.current, {
        attr: { x1: 0 },
        duration: 3.0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: bikeLine.current,
          start: "top 85%",
          end: "top 35%",
          scrub: 1,
          once: true,
        },
      });
    tl.to(
      tronBike.current,
      {
        x: -588,
        duration: 3.0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: tronBike.current,
          start: "top 75%",
          end: "top 35%",
          scrub: 1,
          once: true,
        },
      },
      "<"
    );
    tl.to(prLine.current, {
      attr: { x2: 700 },
      duration: 3.0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: prLine.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
        once: true,
      },
    });
    tl.to(expLine.current, {
      attr: { x1: 0, x2: 700 },
      duration: 3,
      scrollTrigger: {
        trigger: expLine.current,
        start: "top 80%",
        end: "top 0%",
        scrub: 1,
        once: true,
      },
    });

    gsap.from(exp.current, {
      x: 25,
      y: 15,
      opacity: 0,
      scrollTrigger: {
        trigger: expside.current,
        scrub: 1,
        start: "top 70%",
        end: "top 50%",
        
        once: true,
      },
    });

    gsap.to(expside.current, {
      attr: { x1: 0 },
      scrollTrigger: {
        trigger: expside.current,
        scrub: 1,
        start: "top 60%",
        end: "top 50%",
        once: true,
        
      },
    });

    gsap.to(expbottom.current, {
      attr: { x1: 0 },
      scrollTrigger: {
        trigger: expside.current,
        scrub: 1,
        start: "top 70%",
        end: "top 50%",
        once: true,
      },
    });

    tl.from(expHead.current, {
      y: -80,
      opacity: 0,
      scrollTrigger: {
        trigger: expLine.current,
        start: "top 80%",
        end: "top 0%",
        scrub: 1,
        once: true,
      },
    });

    tl.to(
      tlLine1.current,
      {
        attr: { x2: 950 },
        scrollTrigger: {
          trigger: tlContainer.current,
          start: "top 50%",
          end: "bottom 70%",
          scrub: 1,
          once: true,
        },
      },
      "<"
    );
    tl.to(
      ttop.current,
      {
        y: 900,
        scrollTrigger: {
          trigger: tlContainer.current,
          start: "top 50%",
          end: "bottom 70%",
          scrub: 1,
          once: true,
        },
      },
      "<"
    );
    gsap.utils.toArray(".tl").forEach((el) => {
      gsap.from(el, {
        x: -10,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "bottom 70%",
          once: true,
        },
      });
    }, "<");

    tl.from(about.current,{
      opacity:0,
      scrollTrigger: {
        trigger: about.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
        once: true,
      },
    })

    gsap.from(ab.current, {
      x: 25,
      y: 15,
      opacity: 0,
      scrollTrigger: {
        trigger: abside.current,
        scrub: 1,
        start: "top 70%",
        end: "top 50%",

        once: true,
      },
    });

    gsap.to(abside.current, {
      attr: { x1: 0 },
      scrollTrigger: {
        trigger: abside.current,
        scrub: 1,
        start: "top 70%",
        end: "top 50%",
        once: true,
      },
    });

    gsap.to(abbottom.current, {
      attr: { x1: 0 },
      scrollTrigger: {
        trigger: abside.current,
        scrub: 1,
        start: "top 70%",
        end: "top 50%",
        once: true,
      },
    });

    let cl = gsap.timeline({ repeatDelay: 1 });

    gsap.to(contact.current, {
      repeat: 4,
      stagger: 1,
    });
    gsap.utils.toArray(".cons").forEach((el, i) => {
      cl.to(
        el,
        {
          y: -12,
          repeat: Infinity,
          ease: "power1.inOut",
          duration: 1.3,
          yoyo: true,
        },
        i * 0.3
      );
    });
  });

  return (
    <>
      <div
        ref={page1}
        className="h-screen w-full top-0 flex flex-col items-center justify-center absolute z-10 bg-[url(/bg1.jpg)] bg-cover"
      >
        <span
          className={`${orbitron.className} text-[10rem] text-[#7CFFFF] text-shadow-[0_0_20px_#7CFFFF]`}
        >
          Welcome
        </span>
        <span
          className={`${orbit.className} text-[2rem] text-[#7CFFFF] text-shadow-[0_0_20px_#7CFFFF]`}
        >
          To My Portfolio Website!
        </span>
      </div>

      <div ref={page2} className="relative h-screen w-full">
        <div className="page2 flex justify-evenly items-center gap-15 h-full w-full">
          <div className="text-[#7CFFFF] flex flex-col">
            <span className={`${orbit.className} text-2xl`}>Hi!</span>
            <span className={`${orbitron.className} h-fit w-[32rem]`}>
              I'm a full-stack developer with a passion for building
              high-performance web applications and intelligent AI-integrated
              tools. With a strong foundation in the MERN stack and Next.js, I'm
              currently focused on building scalable solutions and integrating
              AI to solve real-world problems. I believe in clean code,
              meaningful UI/UX, and solving business pain points—not just
              writing code.
            </span>
          </div>

          <div className="">
            <div className="hymCircle border-r-3 border-l-3 border-white/5 rounded-full h-[40rem] w-[40rem] flex justify-center items-center">
              <div className="hymCircle border-t-3 border-b-3 border-white/5 rounded-full flex justify-center items-center h-[30rem] w-[30rem]">
                <div className="hymCircle border-r-3 border-l-3 border-white/5 rounded-full flex justify-center items-center h-[20rem] w-[20rem]">
                  <img
                    
                    src="/my1.png"
                    className="relative h-[15rem] rounded-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            ref={rfp}
            className="absolute z-9 top-10 right-28 inline-block h-[40rem] w-[40rem]"
          >
            <img
              src="/mongo.png"
              className="glow h-13 relative top-50 left-41"
              alt=""
            />
            <img
              src="/next.png"
              className="glow h-15 relative top-9 left-110"
              alt=""
            />
            <img
              src="/node.png"
              className="glow h-12 relative bottom-35 left-62 "
              alt=""
            />
            <img
              src="/postgress.png"
              className="glow h-18  relative top-88 left-20"
              alt=""
            />
            <img
              src="/react.png"
              className="glow h-17 relative top-40 left-148"
              alt=""
            />
            <img
              src="/tailwind.png"
              className="glow h-12 relative top-51 left-100 "
              alt=""
            />
            <img
              src="/typescript.png"
              className="glow h-14 relative bottom-10 right-5"
              alt=""
            />
          </div>
        </div>

        {/* page2 */}
        <div className="w-full relative z-5 bg-[#010101] !pt-5 flex flex-col justify-center items-center">
          <div className="h-2 w-full flex justify-center items-center relative">
            <img
              ref={tronBike}
              src="/t-side.png"
              className="h-10 relative bottom-2 left-2/5"
              alt=""
            />
            <svg height="200" width="600" xmlns="http://www.w3.org/2000/svg">
              <line
                ref={bikeLine}
                x1="600"
                y1="100"
                x2="600"
                y2="100"
                style={{
                  strokeWidth: "8px",
                  stroke: "#7CFFFF",
                  boxShadow: "#7CFFF",
                }}
              />
            </svg>
          </div>

          {/* <div className="h-fit w-full overflow-x-hidden">
  <span
    className={`${orbitron.className} text-[#7CFFFF] text-4xl relative pl-20 pr-5 py-2 block`}
  >
    <p ref={exp} className="w-fit inline-block">My Project</p> 
    
    {/* Side line (vertical) */}
          {/* <svg
      height="20"
      width="70"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block relative bottom-7 ml-10 rotate-90"
    >
      <line
        ref={expside}
        x1="70"
        y1="10"
        x2="70"
        y2="10"
        style={{
          strokeWidth: "3px",
          stroke: "#7CFFFF",
        }}
      />
    </svg> */}

          {/* Bottom line (horizontal) */}
          {/* <svg
      height="20"
      width="100%" // changed from 320
      xmlns="http://www.w3.org/2000/svg"
      className="block relative bottom-3"
    >
      <line
        ref={expbottom}
        x1="229"
        y1="10"
        x2="229"
        y2="10"
        style={{
          strokeWidth: "3px",
          stroke: "#7CFFFF",
        }}
      />
    </svg>
  </span>
</div> */}

          {/* <div className="h-fit w-full overflow-hidden !mt-30">
            <span
              className={`${orbitron.className} text-[#7CFFFF] text-4xl relative left-20 !p-2  `}
            >
             <p ref={exp} className="w-fit">My Project</p> 
              <svg
              
                  height="20"
                  width="70"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative left-48 bottom-7"
                  style={{ rotate: "90deg" }}
                >
                  <line
                  ref={expside}
                    x1="70"
                    y1="10"
                    x2="70"
                    y2="10"
                    style={{
                      strokeWidth: "3px",
                      stroke: "#7CFFFF",
                    }}
                  />
              </svg>
            <svg
            
                  height="20"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative bottom-3"
                  // style={{ rotate: "90deg" }}
                >
                  <line
                  ref={expbottom}
                    x1="229"
                    y1="10"
                    x2="229"
                    y2="10"
                    style={{
                      strokeWidth: "3px",
                      stroke: "#7CFFFF",
                    }}
                  />
              </svg>
            </span>
          </div> */}

          <div className="h-full w-[95%] flex flex-col items-center !p-4 ">
            <div className="h-fit w-full overflow-hidden !mt-30">
              <span
                className={`${orbitron.className} text-[#7CFFFF] text-4xl relative left-20 !p-2  `}
              >
                <p ref={exp} className="w-fit">
                  My Project
                </p>
                <svg
                  height="20"
                  width="70"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative left-48 bottom-7"
                  style={{ rotate: "90deg" }}
                >
                  <line
                    ref={expside}
                    x1="70"
                    y1="10"
                    x2="70"
                    y2="10"
                    style={{
                      strokeWidth: "3px",
                      stroke: "#7CFFFF",
                    }}
                  />
                </svg>
                <svg
                  height="20"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative bottom-3"
                  // style={{ rotate: "90deg" }}
                >
                  <line
                    ref={expbottom}
                    x1="229"
                    y1="10"
                    x2="229"
                    y2="10"
                    style={{
                      strokeWidth: "3px",
                      stroke: "#7CFFFF",
                    }}
                  />
                </svg>
              </span>
            </div>
            <div
              className={`${orbit.className} text-[#7CFFFF] bg-[radial-gradient(circle_at_20rem,_#0F1D22,#00070A_20%,_#010101)]  flex justify-evenly  relative z-9`}
            >
              <div className="h-140 w-200 flex justify-center items-center">
                <img src="/1P3.png" alt="" className="h-80" />
                <img
                  src="/1P1.png"
                  alt=""
                  className="h-40 absolute bottom-70 left-87"
                />
                <img
                  src="/1P2.png"
                  alt=""
                  className="h-40 relative left-0 top-20"
                />
              </div>
              <div className="tl h-140 w-1/2 !p-5 flex flex-col gap-10 items-center justify-center">
                <div ref={about} className="flex flex-col gap-5">
                  <div className="">FREELive</div>
                  <div className="">
                    An AI-powered travel discovery website that helps users find
                    dream destinations using natural language — like "a misty
                    green hill with a small temple" or "Italy with fewer
                    tourists and low cost". It intelligently maps user input to
                    real-world locations using LLMs and displays them as rich,
                    interactive cards. A chatbot further personalizes
                    suggestions based on preferences (budget, activities,
                    region, etc.).
                  </div>
                  <div className="flex gap-5">
                    <Badge className="!px-2 !py-1 rounded-full">Next.js</Badge>
                    <Badge className="!px-2 !py-1 rounded-full">
                      Gemini API
                    </Badge>
                  </div>

                  <div className="flex gap-5">
                    <a
                      className={`${orbitron.className} flex items-center gap-1 border-2 !px-2 !py-1 border-cyan-400 hover:text-red-400 hover:border-red-400 `}
                      href="https://free-live.vercel.app/"
                      target="_blank" rel="noopener noreferrer"
                    >
                      Live Demo <ImArrowUpRight2 />
                    </a>
                    <a
                      className={`${orbitron.className} flex items-center gap-1 border-2 !px-2 !py-1 border-cyan-400 hover:text-red-400 hover:border-red-400`}
                      href="https://github.com/rajnish-oss/FREELive.git"
                      target="_blank" rel="noopener noreferrer"
                    >
                      Code <ImArrowUpRight2 />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-10 flex  ">
              <svg height="40" width="700" xmlns="http://www.w3.org/2000/svg">
                <line
                  ref={prLine}
                  x1="0"
                  y1="10"
                  x2="0"
                  y2="10"
                  style={{
                    strokeWidth: "6px",
                    stroke: "#7CFFFF",
                    boxShadow: "#7CFFF",
                  }}
                />
              </svg>
            </div>

            <div
              className={`${orbit.className} text-[#7CFFFF] !p-4 flex justify-evenly gap-20 relative z-20 bg-[radial-gradient(circle_at_70rem,_#0F1D22,#00070A_20%,_#010101)] !my-10`}
            >
              <div className="tl h-fit w-1/2 !p-5 flex flex-col gap-5">
                <div className="">Bo-chat</div>
                <div className="">
                  A real-time chat app with AI-powered custom persona bots that
                  respond in unique tones and roles — like a travel guide,
                  coding assistant, or fitness coach. Each chat room can include
                  a personalized AI companion powered by OpenAI, with dynamic
                  prompt engineering to maintain consistent behavior. Users can
                  chat with both humans and bots in real-time, with messages
                  stored securely and UI built for responsiveness.
                </div>
                <div className="flex gap-5">
                  <Badge className="!px-2 !py-1 rounded-full">MERN</Badge>
                  <Badge className="!px-2 !py-1 rounded-full">Socket.io</Badge>
                  <Badge className="!px-2 !py-1 rounded-full">OpenAI</Badge>
                </div>

                <div className="flex gap-5">
                  <button
                    className={`${orbitron.className} flex items-center gap-1 border-2 !px-2 !py-1 border-cyan-400 hover:text-red-400 hover:border-red-400`}
                    href="https://free-live.vercel.app/"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Live Demo <ImArrowUpRight2 />
                  </button>
                  <button
                    className={`${orbitron.className} flex items-center gap-1 border-2 !px-2 !py-1 border-cyan-400 hover:text-red-400 hover:border-red-400`}
                    href="https://github.com/rajnish-oss/Chat-app.git"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Code <ImArrowUpRight2 />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <img src="/2P3.png" alt="" className="h-40 rounded-2xl" />
                <img
                  src="/2P1.png"
                  alt=""
                  className="h-40 relative top-30 rounded-[20px_20px_0_0]"
                />
                <img
                  src="/2P2.png"
                  alt=""
                  className="h-40 relative bottom-10 rounded-[0_20px_20px_0]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* page 3 */}

        <div className="relative z-5 bg-[#010101] !pt-5 flex flex-col justify-center items-center gap-8">
          <div className="h-2 w-full flex justify-center items-center relative !my-4">
            <svg
              height="40"
              width="700"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: "drop-shadow(0 0 10px #7CFFFF)" }}
            >
              <line
                ref={expLine}
                x1="360"
                y1="10"
                x2="360"
                y2="10"
                style={{
                  strokeWidth: "6px",
                  stroke: "#7CFFFF",
                  boxShadow: "#7CFFF",
                }}
              />
            </svg>
          </div>

          <div className="h-fit w-full flex justify-center">
            <span
              ref={expHead}
              className={`${orbitron.className} text-[#7CFFFF] text-4xl `}
            >
              My Experience
            </span>
          </div>

          <div
            ref={tlContainer}
            className={`${orbitron.className} text-[#7CFFFF] text-4xl h-270 w-full flex justify-center bg-[radial-gradient(ellipse_50%_80%,_#0F1D22_30%,#00070A_70%,_#010101)] `}
          >
            <div className="flex gap-5 relative top-8">
              <div className="flex flex-col justify-between h-200">
                <div className="tl flex items-center justify-between">
                  <span>
                    <h1>Oct-Dec 2024</h1>
                    <h6 className={`${orbit.className} text-sm`}>
                      Html,CSS,Javascript
                    </h6>
                  </span>
                  <span className="star"></span>
                </div>

                <div className="tl flex items-center gap-10 justify-between">
                  <span>
                    <h1>March-May 2025</h1>
                    <h6 className={`${orbit.className} text-sm`}>
                      Node.js, Express.js, MongoDb
                    </h6>
                  </span>
                  <span className="star"></span>
                </div>

                <div className="tl flex items-center justify-between">
                  <span>
                    <h1>July 2025</h1>
                    <h6 className={`${orbit.className} text-sm`}>
                      Next.js, PostgreSql
                    </h6>
                  </span>
                  <span className="star"></span>
                </div>
              </div>
            </div>

            <span className="h-200 w-fit flex flex-col items-center ">
              <div className="flex flex-col absolute right-[102.2rem] top-[77.5rem] w-30">
                <svg
                  height="20"
                  width="1500"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative bottom-75 left-67"
                  style={{ rotate: "90deg" }}
                >
                  <line
                    ref={tlLine1}
                    x1="0"
                    y1="0"
                    x2="80"
                    y2="0"
                    style={{
                      strokeWidth: "30px",
                      stroke: "#7CFFFF",
                    }}
                  />
                </svg>
                <svg
                  height="20"
                  width="890"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative bottom-[39rem] left-143.5"
                  style={{ rotate: "90deg" }}
                >
                  <line
                    ref={tlLine2}
                    x1="0"
                    y1="0"
                    x2="890"
                    y2="0"
                    style={{
                      strokeWidth: "30px",
                      stroke: "#7cffff3d",
                    }}
                  />
                </svg>
              </div>
              <img
                ref={ttop}
                src="/t-top.png"
                className="h-20 !mx-10 z-20 relative top-6"
                alt=""
              />
            </span>

            <div className="flex gap-20 relative top-50">
              <div className="flex flex-col justify-between h-200">
                <div className="tl flex items-center gap-10">
                  <span className="star"></span>
                  <span>
                    <h1>Jan-Feb 2025</h1>
                    <h6 className={`${orbit.className} text-sm`}>
                      React, Tailwind, Gsap
                    </h6>
                  </span>
                </div>

                <div className="tl flex items-center gap-10">
                  <span className="star"></span>
                  <span>
                    <h1>June 2025</h1>
                    <h6 className={`${orbit.className} text-sm`}>
                      Bo-chat project
                    </h6>
                  </span>
                </div>

                <div className="tl flex items-center gap-10">
                  <span className="star"></span>
                  <span>
                    <h1>Aug 2025</h1>
                    <h6 className={`${orbit.className} text-sm`}>FreeLive</h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* page4 */}
        <div className="text-[#7CFFFF] h-screen flex justify-center items-center flex-col gap-20 !pb-10 bg-[radial-gradient(ellipse_at_bottom,_#0F1D22_20%,#00070A_50%,_#010101)]">
          <span
            className={`${orbitron.className} text-[#7CFFFF] text-4xl relative left-20 top-5 w-fit !p-2 self-start`}
          >
            <p ref={ab}>About Me</p>
            <svg
              height="20"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              className="relative left-44 bottom-7"
              style={{ rotate: "90deg" }}
            >
              <line
                ref={abside}
                x1="50"
                y1="10"
                x2="50"
                y2="10"
                style={{
                  strokeWidth: "3px",
                  stroke: "#7CFFFF",
                }}
              />
            </svg>
            <svg
              height="20"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
              className="relative bottom-6"
              // style={{ rotate: "90deg" }}
            >
              <line
                ref={abbottom}
                x1="200"
                y1="10"
                x2="200"
                y2="10"
                style={{
                  strokeWidth: "3px",
                  stroke: "#7CFFFF",
                }}
              />
            </svg>
          </span>
          <span ref={about} className={`${orbit.className} w-4/5 h-fit text-2xl` }>
            Hi, I'm Rajnish, a 2nd-year B.Tech Computer Science student. I'm
            passionate about building full-stack web applications that solve
            real problems and create real value. My core tech stack includes
            React, Next.js, Node.js,Prisma and MongoDB, and I'm constantly exploring
            better ways to bring ideas to life through code. What drives me is
            the desire to work on practical, impactful projects — not just code
            for the sake of coding. I love creating things that people can
            actually use: apps that are fast, clean, purposeful, and
            thoughtfully designed. From travel discovery tools to real-time chat
            platforms, every project I take on is an opportunity to solve a
            problem, improve a process, or help someone in a meaningful way. I
            believe learning should be hands-on, and that’s why I dedicate most
            of my time outside college to building, experimenting, and improving
            my skills through real-world development. I'm always looking to
            collaborate, learn from others, and contribute to projects that have
            purpose and potential.
          </span>

          <ul className="flex gap-2" ref={contact}>
            <a href="https://www.instagram.com/rajnish_xio/" target="_blank" rel="noopener noreferrer"><img
              className="cons h-12 hover:shadow-[0_0_10px_#7CFFFF] rounded-full bg-black ease-in"
              src="/insta.png"
              alt=""
            /></a>
            <a href=""><img
              className="cons h-12 hover:shadow-[0_0_10px_#7CFFFF] rounded-full bg-black ease-in"
              src="/twitter.png"
              alt=""
            /></a>
            <a href="https://github.com/rajnish-oss" target="_blank" rel="noopener noreferrer"><img
              className="cons h-12 hover:shadow-[0_0_10px_#7CFFFF] rounded-full bg-black ease-in"
              src="/git.png"
              alt=""
            /></a>
            <a href="" target="_blank" rel="noopener noreferrer"><img
              className="cons h-12 hover:shadow-[0_0_10px_#7CFFFF] rounded-full bg-black ease-in"
              src="/linkedin.png"
              alt=""
            /></a>     
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page1;
