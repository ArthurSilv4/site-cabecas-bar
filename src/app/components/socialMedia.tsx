import Link from "next/link"
import { IoLogoWhatsapp, IoLogoFacebook, IoLogoInstagram } from "react-icons/io"

export function SocialMedia({ ulStyle = "", liStyle = "" }) {
    return (
        <ul className={ulStyle}>
            <li className={liStyle}>
                <Link href={""} className="w-full h-full">
                    <IoLogoWhatsapp className="w-full h-full" />
                </Link>
            </li>
            <li className={liStyle}>
                <Link href={""} className="w-full h-full">
                    <IoLogoFacebook className="w-full h-full" />
                </Link>
            </li>
            <li className={liStyle}>
                <Link href={""} className="w-full h-full">
                    <IoLogoInstagram className="w-full h-full" />
                </Link>
            </li>
        </ul>
    )
}