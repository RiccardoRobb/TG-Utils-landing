import Head from "next/head";
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import FooterB from "../components/footer/Footer"

export default function Login () {
    const [form, setForm] = useState(
        {
            password: "",
            email: ""
        }
    );

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [event.currentTarget.name]: event.currentTarget.value
        }); 
    }

    return (
        <>
            <Head>
                <title>Turbo telegram - Contact us</title>
                <meta name="description" content="Powerful tools to improve you Telegram experience. Real members for yout Telegram group and Useful BOTs"/>
            </Head>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card base-v">
                            <div className="card-body p-5 text-center">
                                <Link href="/">
                                    <a>
                                        <Image 
                                            className="image-container"
                                            src="/android-chrome-512x512.png"
                                            width={60}
                                            height={60}
                                            layout="fixed"
                                            alt="Turbo Telegram"
                                            priority
                                        />
                                    </a>
                                </Link>
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="mb-5">Please enter your login and password!</p>
                                    <div className="mb-4">
                                        <input 
                                            type="email" 
                                            id="email" name="email"
                                            className="form-control" 
                                            value={form.email}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        <label className="form-label" htmlFor="email">Email</label>
                                    </div>
                                    <div className="mb-4">
                                        <input 
                                            type="password" 
                                            id="password" name="password"
                                            className="form-control" 
                                            value={form.password}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                                    </div>
                                    <p className="small mb-5 pb-lg-2">
                                        <Link href="/contact#contact-form">
                                            <a>Forgot password?</a>
                                        </Link>
                                    </p>
                                    <button className="btn-outline-lg px-5" type="submit">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterB></FooterB>
        </>
    )
}