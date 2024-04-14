import React from "react";
import s2img from "../../assets/shikkha.png";
import TitleBoard from "../TopSection/TitleBoard";
import TopSection from "../TopSection/TopSection";

const Banner = () => {
  return (
    <div className="py-16">
      <div>
        <TopSection headline={"Welcome to Education"}></TopSection>
      </div>
      <div className="py-4 ">
        <TitleBoard titleWord={"SCHOOL INTRODUCTION"}></TitleBoard>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 justify-items-center text py-16">
        <div className="max-w-[250px] col-span-3">
          <img className="w-full" src={s2img} alt="" />
        </div>
        <div className=" justify-center col-span-6">
          {/* <h2 className='font-bold text-3xl text-pink-800 mb-8 '> We will give you future</h2> */}
          <div className="text-justify col-span-8">
            <p className="font-semibold text-gray-600 ">
              Schools and classes are designed to provide children with a fun,
              safe and fun environment in which they can learn about and enjoy
              their studies. Each class is assigned a teacher who will work very
              hard to ensure that your child enjoys every moment of their
              learning process. No matter what level or subjects your child
              chooses, their education will be tailored specifically for
              them.Our schools and classes are designed to provide children with
              a fun, safe and fun environment in which they can learn about and
              enjoy their studies. Each class is assigned a teacher who will
              work very hard to ensure that your child enjoys every moment of
              their learning process. No matter what level or subjects your
              child chooses, their education will be tailored specifically for
              them.Our schools and classes are designed to provide children with
              a fun, safe and fun environment in which they can learn about and
              enjoy their studies. Each class is assigned a teacher who will
              work very hard to ensure that your child enjoys every moment of
              their learning process. No matter what level or subjects your
              child chooses, their education will be tailored specifically for
              them.
            </p>
            <>
              <button>Know More...</button>
            </>
          </div>
        </div>
        <div className="max-w-[250px] col-span-3">
          <img className="w-full" src={s2img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
