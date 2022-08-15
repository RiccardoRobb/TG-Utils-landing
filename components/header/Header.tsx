import Image from 'next/image'

export default function BHeader() {
    return (
        <header className="header">
            <div className="container">
                <div className="row alig-items-center">
                    <div className="col-lg-6">
                        <div className="text-container mt-5">
                            <h1 className="h1-large">Create big groups with 
                            <span> real users</span>
                            </h1>
                            <p className="p-large">
                                Add cheap real members from selected groups
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Image 
                            src="/images/tgSubs.png"
                            className='img-fluid'
                            width={400}
                            height={400}
                            alt="tgMembers"
                            priority
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}