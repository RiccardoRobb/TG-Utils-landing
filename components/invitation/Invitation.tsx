import Link from "next/link";


export default function Invitation() {
    return (
        <div className="basic-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h4>Everything you need to improve and automatize your Telegram experience</h4>
                        <Link href="/contact">
                            <a className="btn-outline-lg page-scroll">Contact us</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}