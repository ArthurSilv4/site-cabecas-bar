import Link from 'next/link'

export function Box({ h3Text = "", h2Text = "", pText = "", bntText = "" }) {
    return (
        <div className="bg-bgRed p-8 rounded-md m-auto h-[250px] w-[250px] text-white">
            <h3 className="text-yellow-400">
                {h3Text}
            </h3>
            <h2 className="font-bold text-4xl mt-4">
                {h2Text}
            </h2>
            <p className="font-extrabold text-sm mt-4">
                {pText}
            </p>
            <button className="bg-yellow-500 p-2 rounded-xl font-extrabold drop-shadow-lg mt-6">
                <Link href={""} className='h-full w-full'>
                    {bntText}
                </Link>
            </button>
        </div>
    )
}