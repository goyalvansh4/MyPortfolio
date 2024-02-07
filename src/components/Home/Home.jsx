import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <section className="static-hero bg-[#131313] h-[840px] xl:h-[700px] lg:h-[650px] md:h-[750px] sm:h-[690px] col:h-[800px]  relative z-40 overflow-hidden">
      <div className="flex items-center justify-center md:justify-center md:pt-[150px] md:pb-[100px] flex-col w-full h-full bg-cover bg-center  text-left z-50">
        <div className="wraper">
          <div className="flex-1">
            <div className="w-[660px] lg:w-[470px]  md:w-full  text-center main">
              <h2 className="text-white text-[90px] capitalize font-bold leading-[100px] mb-[10px]  lg:text-[65px] lg:mb-[10px] lg:leading-[75px] md:text-[45px] md:leading-[45px]  col:text-[35px] col:leading-[35px] col:mb-[0px]">
                <span className="block text-[60px] text-[#ea580c] lg:text-[45px] md:text-[35px] col:text-[35px] col:leading-[35px] col:mb-[0px]">
                  Hello,
                </span>
                I am Vansh Gupta
              </h2>
              <h5 className="text-[#ea580c] text-[32px] capitalize font-semibold leading-[39px] mb-[20px] lg:text-[28px] md:text-[22px] md:mb-[10px] col:text-[20px]  col:mb-[5px]">
                FrontEnd Developer
              </h5>
              <p className="text-white text-[20px] font-normal leading-[35px] mb-[30px] col:text-[20px] col:leading-[25px] md:mx-[50px] col:mx-0">
                Proficient in JavaScript and frontend development, I am
                passionate about creating engaging user experiences through my
                coding skills.
              </p>
              <div className="slide-btn">
                <a className="theme-btn">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
