import React from "react";

const About = () => {
  return (
    <section
      className="section-wrap bg-[#191919] md:pb-[60px] overflow-hidden z-50"
      id="about"
    >
      <div className="wraper">
        <div className="grid-rows-1 grid grid-cols md:grid-cols-1 items-center">
          <div className="about-right text-center my-5">
            <div className="max-w-[640px] mx-auto text-center text-white mb-[60px] md:mb-[40px]">
              <h2 className="heading-font  py-5 font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">
                About Me
              </h2>
              <p className="base-font text-xl py-5 font-normal">
                I am a Frontend Developer with a passion for creating beautiful
                and functional user experiences. I have a strong foundation in
                JavaScript, and I am constantly learning new technologies and
                frameworks to improve my skills. I am a team player and am
                comfortable working in a collaborative environment. I am
                passionate about web development and am always looking for new
                opportunities to learn and grow.
              </p>
            </div>
            <ul className="flex flex-wrap justify-center items-center  mx-[-15px]">
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#acac39] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="98">
                      98
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#FFE600]">HTML</p>
                </div>
              </li>
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#59c37899] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="92">
                      92
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#59C378]">CSS</p>
                </div>
              </li>
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#dd584f99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="88">
                      88
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#DD584F]">
                    JavaScript
                  </p>
                </div>
              </li>
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#ff9a0099] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="72">
                      72
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#FF9A00]">C++</p>
                </div>
              </li>
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#00a9ff99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="43">
                      43
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#00A9FF]">
                    Tailwind Css
                  </p>
                </div>
              </li>
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#9e00ff99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="40">
                      40
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#AD00FF]">
                    ReactJS
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute top-[50px] left-0  z-0">
        <img src="/static/media/shape1.e16bb922100675e291e3.png" alt="" />
      </div>
      <div className="absolute right-0 bottom-0  z-0">
        <img src="/static/media/shape2.5401b75612d2af6041d5.png" alt="" />
      </div>
    </section>
  );
};

export default About;
