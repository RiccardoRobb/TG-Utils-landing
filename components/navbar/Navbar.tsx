import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    return (
        <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
            <div className="container">
                <div>
                    <Image 
                        className="d-inline-block"
                        src="/images/turbo.png"
                        width={40}
                        height={40}
                        layout="fixed"
                        alt="Turbo telegram"
                        priority
                    />
                    <Link href="/">
                        <a className="navbar-brand logo-text"> Turbo telegram</a>
                    </Link>
                </div>
                <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcont" id="navbarsidecollapse" aria-controls="#navbarcont" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse collapse" id="navbarcont">
                    <ul className="navbar-nav ms-auto navbar-nav-scroll">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={ (router.asPath.includes("contact")) ? "../#prices" : "#prices" } >
                                <a className="nav-link">Prices</a>
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