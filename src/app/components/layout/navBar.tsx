import { Logo } from "../logo";
import { NavegationLinks } from "../navegationLinks"

export function NavBar() {
    return (
        <header
            className="bg-red-900 w-full fixed"
        >
            <div>
                <div>
                    <Logo
                        logoSize=""
                    />
                </div>

                <div>
                    <NavegationLinks />
                </div>
            </div>

        </header>
    )
}