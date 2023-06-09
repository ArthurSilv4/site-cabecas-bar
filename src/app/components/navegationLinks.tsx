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
                <Link href="pages/units"
                    className="hover:text-white/75"
                >
                    Unidades
                </Link>
            </li>
            <li className={liStyle}>
                <Link href="pages/menu" 
                    className="hover:text-white/75"
                >
                    Cardápio
                </Link>
            </li>
            <li className={liStyle}>
                <Link href="pages/contacts"
                    className="hover:text-white/75"
                >
                    Contatos
                </Link>
            </li>
        </ul>

    )
}