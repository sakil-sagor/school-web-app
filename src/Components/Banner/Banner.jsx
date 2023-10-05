import React from 'react';
import s2img from '../../assets/shikkha.png';
import TitleBoard from '../TopSection/TitleBoard';
import TopSection from '../TopSection/TopSection';

const Banner = () => {
    return (
        <div className='py-16'>
            <div>
                <TopSection headline={"Welcome to Education"} ></TopSection>
            </div>
            <div className='py-4 '>
                <TitleBoard titleWord={"SCHOOL INTRODUCTION"}></TitleBoard>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4 justify-items-center text py-16'>
                <div className='max-w-[250px] col-span-3'>
                    <img className='w-full' src={s2img} alt="" />
                </div>
                <div className=' justify-center col-span-6'>
                    {/* <h2 className='font-bold text-3xl text-pink-800 mb-8 '> We will give you future</h2> */}
                    <div className='text-justify col-span-8'>
                        <p className='font-semibold text-gray-600 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente suscipit obcaecati iure cum quidem deleniti explicabo culpa assumenda! Ratione impedit explicabo quam repellat minima at aspernatur aut necessitatibus corporis, magni labore quod, assumenda numquam aperiam architecto delectus quae quibusdam consequatur, odit rem! At corrupti reprehenderit neque minima quo eos pariatur, magnam voluptatem obcaecati aliquam, officia sunt consectetur atque inventore laboriosam commodi fugiat saepe libero cumque recusandae minus molestias ducimus nisi. Quis doloribus corporis officia asperiores dolores magni adipisci nihil sint autem, enim officiis delectus repudiandae totam! Aliquid hic magni fugiat recusandae! Est inventore repudiandae sunt eveniet alias repellendus sapiente necessitatibus. </p>
                        <><button>Know More...</button></>
                    </div>
                </div>
                <div className='max-w-[250px] col-span-3'>
                    <img className='w-full' src={s2img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;