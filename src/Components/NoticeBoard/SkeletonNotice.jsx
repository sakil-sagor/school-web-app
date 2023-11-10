

const SkeletonNotice = ({ index }) => {
    return (
        <tr className={index % 2 === 0 ? "bg-[#ededed]  animate-pulse " : " animate-pulse "}>
            <td className="px-4 py-5"></td>

            <td className="px-4 py-4 underline text-blue-500 "></td>
            <td className="px-4 py-4"></td>
            <td className="px-4 py-4">

            </td>

        </tr>
    );
};

export default SkeletonNotice;