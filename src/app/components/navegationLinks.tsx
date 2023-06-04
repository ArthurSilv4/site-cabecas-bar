import Link from "next/link"

export function NavegationLinks({ ulStyle = "", liStyle = "" }) {
    return (

        <ul className={ulStyle}>
            <li className={liStyle}>
                <Link href="pages/company"
                    className="hover:text-white/75"
                >
                    Quem somos
                </Link>
            </li >
            <li className={liStyle}>
                <Link href="#units"
                    className="hover:text-white/75"
                >
                    Unidades
                </Link>
            </li>
            <li className={liStyle}>
                <Link href="#menu" 
                    className="hover:text-white/75"
                >
                    Cardapio
                </Link>
            </li>
            <li className={liStyle}>
                <Link href="#contacts"
                    className="hover:text-white/75"
                >
                    Contatos
                </Link>
            </li>
        </ul>

    )
}