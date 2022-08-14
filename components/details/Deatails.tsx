import Image from "next/image";
import Link from "next/link";


export default function Details() {
    return (
        <>
            <div className="basic-1" id="utils">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xl-5">
                            <div className="text-container">
                                <h2>Groups utilities</h2>
                                <p>Powerful tools to improve your group</p>
                                <Link href="#pricing">
                                    <a className="btn-solid-reg">Prices</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <div className="image-container">
                                <Image
                                    className="img-fluid"
                                    src="/images/details-1.png"
                                    alt="Group utilities"
                                    width={500}
                                    height={400}
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basic-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xl-7">
                            <div className="image-container">
                                <Image
                                    className="img-fluid"
                                    src="/images/details-1.png"
                                    alt="Group utilities"
                                    width={500}
                                    height={400}
                                    layout="responsive"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-5">
                            <div className="text-container">
                                <h2>Groups utilities</h2>
                                <p>Powerful tools to improve your group</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="d-flex">
                                        <i className="fas fa-square"></i>
                                        <div className="flex-grow-1">Add members to your group</div>
                                    </li>
                                    <li className="d-flex">
                                        <i className="fas fa-square"></i>
                                        <div className="flex-grow-1">Forward messages</div>
                                    </li>
                                    <li className="d-flex">
                                        <i className="fas fa-square"></i>
                                        <div className="flex-grow-1">Create your Bot or Merchant bot</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}