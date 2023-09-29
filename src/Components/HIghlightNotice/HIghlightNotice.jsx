
const HIghlightNotice = () => {
    return (
        <div className="container mx-auto px-2">
            <div className="border-2 border-pink-900">
                <div className="flex justify-center">
                    <span className="text-white bg-green-800 p-2">Notice: </span>
                    <marquee className="p-2 text-red-800 font-semibold" behavior="scroll" direction="left" scrollamount="5">
                        This text moves from left to right.
                    </marquee>
                </div>
            </div>
        </div>
    );
};

export default HIghlightNotice;