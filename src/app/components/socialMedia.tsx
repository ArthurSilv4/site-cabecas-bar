import Link from "next/link"
import { IoLogoWhatsapp, IoLogoFacebook, IoLogoInstagram } from "react-icons/io"

export function SocialMedia({ ulStyle = "", liStyle = "" }) {
    return (
        <ul className={ulStyle}>
            <li className={liStyle}>
                <Link href={"https://wa.me/5513981788930"} className="w-full h-full">
                    <IoLogoWhatsapp className="w-full h-full" />
                </Link>
            </li>
            <li className={liStyle}>
                <Link href={"https://www.facebook.com/cabeca.cabeca.5851/?locale=pt_BR"} className="w-full h-full">
                    <IoLogoFacebook className="w-full h-full" />
                </Link>
            </li>
            <li className={liStyle}>
                <Link href={"https://instagram.com/cabecas_bar_?igshid=MzRlODBiNWFlZA=="} className="w-full h-full">
                    <IoLogoInstagram className="w-full h-full" />
                </Link>
            </li>
        </ul>
    )
}