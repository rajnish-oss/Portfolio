"use client"
import Page1 from "./component/Page1";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef,useEffect } from "react";

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

  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      // Redirect or block
      window.location.href = "/No-Mob"; // or show alert, blank screen, etc.
    }
  }, []);

  return (
    <div ref={main} id="body" className="max-w-[1521px] flex justify-center items-center">

        <Page1 />
    </div>
  );
}
