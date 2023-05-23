import Link from "next/link"

export function NavegationLinks({ ulStyle = "", liStyle = "" }) {
    return (

        <ul className={ulStyle}>
            <li className={liStyle}>
                <Link href="#company">
                    Quem somos
                </Link>
            </li >
            <li className={liStyle}>
                <Link href="#units">
                    Unidades
                </Link>
            </li>
            <li className={liStyle}>
                <Link href="#menu" >
                    Cardapio
                </Link>
            </li>
            <li className={liStyle}>
                <Link href="#contacts">
                    Contatos
                </Link>
            </li>
        </ul>

    )
}