import Link from 'next/link'

export function Box({ h3Text = "", h2Text = "", pText = "", bntText = "" }) {
    return (
        <div className="bg-bgRed p-8 rounded-md m-auto h-[300px] w-[300px] text-white">
            <h3 className=" text-yellowButton">
                {h3Text}
            </h3>
            <h2 className="font-bold text-4xl mt-6">
                {h2Text}
            </h2>
            <p className="font-extrabold text-sm mt-6">
                {pText}
            </p>
            <button className="bg-yellowButton hover:bg-yellow-400 p-2 rounded-xl font-extrabold drop-shadow-lg mt-8">
                <Link href={""} className='h-full w-full'>
                    {bntText}
                </Link>
            </button>
        </div>
    )
}