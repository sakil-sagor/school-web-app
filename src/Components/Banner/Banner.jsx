import React from 'react';
import s2img from '../../assets/s2.jpg';
import TopSection from '../TopSection/TopSection';

const Banner = () => {
    return (
        <div className='py-16'>
            <div>
                <TopSection headline={"Welcome to Education"} paragraph={'Make you own Future with us'}></TopSection>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text mt-8'>
                <div>
                    <img className='rounded-br-full' src={s2img} alt="" />
                </div>
                <div className='flex flex-col text-right justify-center'>
                    <h2 className='font-bold text-3xl text-pink-800 mb-8 '> We will give you future</h2>
                    <div>
                        <p className='font-semibold'>Our schools and classes are designed to provide children with a fun, safe and fun environment in which they can learn about and enjoy their studies. Each class is assigned a teacher who will work very hard to ensure that your child enjoys every moment of their learning process. No matter what level or subjects your child chooses, their education will be tailored specifically for them.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;