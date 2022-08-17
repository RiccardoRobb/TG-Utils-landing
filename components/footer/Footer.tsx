import Link from "next/link";


export default function FooterB() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-col first">
                            <h6>Telegram utils</h6>
                            <p>Utilities for Telegram</p>
                        </div>
                        <div className="footer-col second">
                            <ul className="list-unstyled li-space p-small">
                                <li><Link href="/privacyPolicy"><a>Privacy Policy</a></Link></li>
                                <li>Support: <Link href="/contact#contact-form"><a>Contact us</a></Link></li>
                            </ul>
                        </div>
                        <div className="footer-col third">
                            <span className="fa-stack">
                                <Link href="https://twitter.com/">
                                    <a>
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-twitter fa-stack-1x"></i>
                                    </a>
                                </Link>
                            </span>
                            <span className="fa-stack">
                                <Link href="https://facebook.com/">
                                    <a>
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-facebook fa-stack-1x"></i>
                                    </a>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}