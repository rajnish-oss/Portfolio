"use client"
import Page1 from "./component/Page1";
import Page2 from "./component/page2";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Home() {
  const main = useRef()
  const cursor = useRef()

  useGSAP(()=>{
    const body = document.getElementById("body")

    body.addEventListener("mousemove",(e)=>{
      !e ? cursor.current.style.backGround = "transparent" : ""
      gsap.to(cursor.current,{
        x:e.x,
        y:e.y,
        duration:0,
        ease:"power1.out"
      })
    })
  })

  return (
    <div ref={main} id="body" className="">

        <Page1 />

        {/* <Page2 />
       */}
    </div>
  );
}
