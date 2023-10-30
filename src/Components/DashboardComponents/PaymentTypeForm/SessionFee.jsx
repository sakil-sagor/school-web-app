

const SessionFee = ({ paymentType }) => {
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
                paymentType === "session-fee" &&
                <div className='bg-blue-300 p-8 rounded-md '>
                    <div>
                        <h3 className='text-2xl text-pink-700 mb-2'>Session Fee</h3>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit} className='mt-4'>
                        <div className='flex '>
                            <div className=''>
                                {/* <select
                                    className=' px-2 py-1 rounded-md  border border-gray-300 text-center'
                                    name='gender'
                                    id='gender'

                                    required
                                    onChange={(e) => setPayOption()}
                                >
                                    <option className='' value='' disabled selected>--Select Exam--</option>
                                    <option value=''>Half Year </option>
                                    <option value='annual'>Annual</option>
                                    <option value='modelTest'>Model Test</option>

                                </select> */}
                            </div>

                            <div className='mx-4 flex items-center'>

                                <input className='border text-right bg-white border-gray-500 ml-1 w-full rounded p-1 inline-block mr-2' type="number" id="sessionFee" name="sessionFee" /><span> Tk</span>
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

export default SessionFee;