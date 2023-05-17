import Link from "next/link"

export function NavegationLinks() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="#company">
                        Quem somos
                    </Link>
                </li>
                <li>
                    <Link href="#units">
                        Unidades
                    </Link>
                </li>
                <li>
                    <Link href="#menu">
                        Cardapio
                    </Link>
                </li>
                <li>
                    <Link href="#contacts">
                        Contatos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}