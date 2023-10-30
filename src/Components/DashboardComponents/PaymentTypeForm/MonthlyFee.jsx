

const MonthlyFee = ({ paymentType }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        // const toalData = { ...formData, payType payOption }

        console.log(formData.get)
        e.target.reset();
    };
    return (
        <div>
            {
                paymentType === "monthly-fee" &&
                <div className='bg-blue-300 p-8 rounded-md '>
                    <div>
                        <h3 className='text-2xl text-pink-700 mb-2'>Monthly Fee</h3>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit} className='mt-4'>
                        <div className='flex '>
                            <div className=''>
                                <select
                                    className=' px-2 py-1 rounded-md  border border-gray-300 text-center'
                                    name='monthlyFee'
                                    id='monthlyFee'

                                    required
                                    onChange={(e) => setPayOption()}
                                >
                                    <option className='' value='' disabled selected>--Select Month--</option>
                                    <option value='january'>January </option>
                                    <option value='february'>February </option>
                                    <option value='march'>March </option>
                                    <option value='april'>April </option>
                                    <option value='may'>May </option>
                                    <option value='june'>June </option>
                                    <option value='huly'>July </option>
                                    <option value='august'>August </option>
                                    <option value='september'>September </option>
                                    <option value='octobor'>Octobor</option>
                                    <option value='november'>November</option>
                                    <option value='december'>December</option>

                                </select>
                            </div>

                            <div className='mx-4'>

                                <input className='border text-right bg-white border-gray-500 ml-1 w-24 rounded p-1' type="number" id="feeAmount" name="feeAmount" /><span> Tk</span>
                            </div>
                            <div>
                                <button className=' bg-pink-500 hover:bg-pink-700 duration-200 text-white rounded px-3 py-1' type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
};

export default MonthlyFee;