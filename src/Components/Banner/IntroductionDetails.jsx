import React from 'react';

const IntroductionDetails = () => {
    return (
        <div>
            <div className='my-4'>
                <TitleBoard titleWord={"School Intruduction"}></TitleBoard>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text mt-8'>
                <div>
                    <img className='rounded-br-full' src={s2img} alt="" />
                </div>
                <div className='flex flex-col text-right justify-center'>
                    <h2 className='font-bold text-3xl text-pink-800 mb-8 '> We will give you future</h2>
                    <div>
                        <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente suscipit obcaecati iure cum quidem deleniti explicabo culpa assumenda! Ratione impedit explicabo quam repellat minima at aspernatur aut necessitatibus corporis, magni labore quod, assumenda numquam aperiam architecto delectus quae quibusdam consequatur, odit rem! At corrupti reprehenderit neque minima quo eos pariatur, magnam voluptatem obcaecati aliquam, officia sunt consectetur atque inventore laboriosam commodi fugiat saepe libero cumque recusandae minus molestias ducimus nisi. Quis doloribus corporis officia asperiores dolores magni adipisci nihil sint autem, enim officiis delectus repudiandae totam! Aliquid hic magni fugiat recusandae! Est inventore repudiandae sunt eveniet alias repellendus sapiente necessitatibus.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IntroductionDetails;