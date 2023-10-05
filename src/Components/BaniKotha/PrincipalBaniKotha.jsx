import React from 'react';
import head from "../../assets/head.jpg";
import TitleBoard from '../TopSection/TitleBoard';

const PrincipalBaniKotha = () => {
    return (
        <div className='container mx-auto px-2 my-16'>
            <div>
                <TitleBoard titleWord={'MESSAGE FROM THE HEADMASTER'}></TitleBoard>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text mt-16'>
                <div className='bg-blue-200 md:rounded-br-full mt-2 rounded-md '>
                    <img className='md:rounded-br-full p-2 ' src={head} alt="" />
                </div>
                <div className='text-justify'>
                    <div className='mb-4'>
                        <p className='font-bold text-xl '>Md Afzal Karim Mia</p>
                        <p className='font- text-gray-500'>Bsc. Honor's(Bangla)</p>
                        <hr className='w-2/3 my-2 border-green-900' />
                    </div>
                    <div>
                        <p className='font-semibold text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente suscipit obcaecati iure cum quidem deleniti explicabo culpa assumenda! Ratione impedit explicabo quam repellat minima at aspernatur aut necessitatibus corporis, magni labore quod, assumenda numquam aperiam architecto delectus quae quibusdam consequatur, odit rem! At corrupti reprehenderit neque minima quo eos pariatur, magnam voluptatem obcaecati aliquam, officia sunt consectetur atque inventore laboriosam commodi fugiat saepe libero cumque recusandae minus molestias ducimus nisi. Quis doloribus corporis officia asperiores dolores magni adipisci nihil sint autem, enim officiis delectus repudiandae totam! Aliquid hic magni fugiat recusandae! Est inventore repudiandae sunt eveniet alias repellendus sapiente necessitatibus.</p>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default PrincipalBaniKotha;