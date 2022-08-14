import { title } from "process";
import { useState } from "react";
import { Faq } from "../../types";


const FAQ: React.FC<{ items: Faq[] }> = ({ items }) => {
    const [show, setShow] = useState<String>(items[0].id);
   
    function handleClick(id: String){
        setShow(id);
    }

    return (
        <div className="questions">
            <div className="container">
                <div className="row">       
                    <div className="col-lg-12">
                        <h2 className="heading">FAQ</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="my-accordion" className="accordion">
                                {
                                    items && items.map((item: Faq) => {
                                        if (item.id === show) {
                                            return (
                                                <div className="accordion-item" key={item.id.toString()}>
                                                    <h2 className="accordion-header">
                                                        <button 
                                                            className="accordion-button"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#${item.id}`}
                                                            onClick={ () => handleClick(item.id) }
                                                        >
                                                            {item.title}
                                                        </button>
                                                        <div 
                                                            id={`${item.id}`}
                                                            className="accordion-collapse collapse show"
                                                            data-bs-parent="#my-accordion"
                                                        >
                                                            <div className="accordion-body">
                                                                {item.answer}
                                                            </div>
                                                        </div>
                                                    </h2>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className="accordion-item" key={item.id.toString()}>
                                                    <h2 className="accordion-header">
                                                        <button 
                                                            className="accordion-button"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#${item.id}`}
                                                            onClick={ () => handleClick(item.id) }
                                                        >
                                                            {item.title}
                                                        </button>
                                                        <div 
                                                            id={`${item.id}`}
                                                            className="accordion-collapse collapse"
                                                            data-bs-parent="#my-accordion"
                                                        >
                                                            <div className="accordion-body">
                                                                {item.answer}
                                                            </div>
                                                        </div>
                                                    </h2>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;