import Link from 'next/link'

export function Logo({ logoSize = "" }) {
    return (
        <>
            <Link href="#home">
                <img
                    src="../logo.svg"
                    alt="Logo"
                    className={logoSize}
                />
            </Link>

        </>
    )
}