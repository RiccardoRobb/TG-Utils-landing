import Image from "next/image"
import Link from "next/link"
import { Price } from "../../types"

const Pricing: React.FC<{ items: Price[] }> = ({ items }) => {
    return (
        <div className="cards-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="heading">Tools for Telegram</h2>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {
                            items && items.map((item: Price) => {
                                return (
                                    <div className="card" key={item.id.toString()}>
                                        <div className="card-body">
                                            <div className="card-title">
                                                <Image 
                                                    className="decoration-lines" 
                                                    src="/images/arrow.png" 
                                                    alt="decLine"
                                                    width="30"
                                                    height="9.75"
                                                />
                                                <span>{item.name}</span>
                                                <Image 
                                                    className="decoration-lines flipped" 
                                                    src="/images/arrow.png" 
                                                    alt="decLine"
                                                    width="30"
                                                    height="9.75"
                                                />
                                            </div>
                                            <ul className="list-unstyled li-spaced-lg">
                                                {
                                                    item.features.map((feature: String, index: number) => {
                                                        return (
                                                            <li key={index}>{feature}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <div className="price">{item.price}{
                                                (item.name === "Forward messages") ? <span>/month</span> : null
                                            }</div>
                                            <Link href="/contact">
                                                <a className="btn-solid-reg">Contact us</a>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;