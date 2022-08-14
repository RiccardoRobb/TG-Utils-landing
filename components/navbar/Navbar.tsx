import Link from "next/link"

export default function Navbar() {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand logo-text">Telegram utils</a>
                </Link>
                <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcont" id="navbarsidecollapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="navbarcont">
                    <ul className="navbar-nav ms-auto navbar-nav-scroll">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#utils">
                                <a className="nav-link">Utilities</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link">Contact us</a>
                            </Link>
                        </li>
                    </ul>
                    <span className="nav-item">
                        <a href="#" className="btn-outline-sm">Enter</a>
                    </span>
                </div>
            </div>
        </nav>
    )
}

// Con "emmet" possiamo usare shortcut utili, gli li>a sono creati con (li.nav-item>a.nav-link)*5