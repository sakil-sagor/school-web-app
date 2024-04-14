import React from "react";
import head from "../../assets/head.jpg";
import TitleBoard from "../TopSection/TitleBoard";

const PrincipalBaniKotha = () => {
  return (
    <div className="container mx-auto px-2 my-16">
      <div>
        <TitleBoard titleWord={"MESSAGE FROM THE HEADMASTER"}></TitleBoard>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text mt-16">
        <div className="bg-blue-200 md:rounded-br-full mt-2 rounded-md ">
          <img className="md:rounded-br-full p-2 " src={head} alt="" />
        </div>
        <div className="text-justify">
          <div className="mb-4">
            <p className="font-bold text-xl ">Md Afzal Karim Mia</p>
            <p className="font- text-gray-500">Bsc. Honor's(Bangla)</p>
            <hr className="w-2/3 my-2 border-green-900" />
          </div>
          <div>
            <p className="font-semibold text-gray-500">
              Our schools and classes are designed to provide children with a
              fun, safe and fun environment in which they can learn about and
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
              them.Our schools and classes are designed to provide children with
              a fun, safe and fun environment in which they can learn about and
              enjoy their studies. Each class is assigned a teacher who will
              work very hard to ensure that your child enjoys every moment of
              their learning process. No matter what level or subjects your
              child chooses, their education will be tailored specifically for
              them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalBaniKotha;
