import Image from "next/image";
import Head from "next/head";
import React, { useState } from "react";

import Layout from "../components/layouts/Layout";
import { send } from "../services/emailjs.service";
import { ContactForm } from "../types";


export default function Contact() {
    const [privacy, setPrivacy] = useState<boolean>(false);
    const [problem, setProblem] = useState("");
    const [form, setForm] = useState<ContactForm>(
        {
            fullName: "",
            email: "",
            costumer: "yes",
            privacy: false,
            problem: ""
        }
    );

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Prevent page reloading
        send(form.fullName, form.fullName, problem, form.email, form.costumer)
        .then(() => {
            console.log("Done!")
        })
        .catch((error) => {
            console.log(error);
        })
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    return (
        <Layout>
            <Head>
                <title>Telegram utils - Contact us</title>
                <meta name="description" content="Powerful tools to improve you Telegram experience. Real members for yout Telegram group and Useful BOTs"/>
            </Head>
            <header className="header" id="header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h1 className="h1-large">Any problem?<br></br>   
                                    <span className="replace-me">Contact us</span>
                                </h1>
                                <p className="p-large">We are available 24/7 to help you</p>
                                <a href="#contact-form" className="btn-solid-lg">Form</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-container">
                                <Image 
                                    className="image-container"
                                    src="/images/support.png"
                                    width={700}
                                    height={450}
                                    layout="responsive"
                                    alt="Contact us"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="contact" id="contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="heading">Compile the form <span>to be helped</span></h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col mb-4 text-start">
                                            <label htmlFor="fullName" className="form-label">Name and Surname *</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="fullName" name="fullName" 
                                                aria-label="Name and Surname" 
                                                required 
                                                value={form.fullName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col mb-4 text-start">
                                            <label htmlFor="email" className="form-label">Email *</label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                name="email" 
                                                aria-label="Email" 
                                                required 
                                                value={form.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col mb-4 text-start">
                                            <label htmlFor="problem" className="form-label">Description</label>
                                            <textarea 
                                                rows={6}
                                                value={problem}
                                                onChange={(event) => setProblem(event.target.value)}
                                                className="form-control"
                                                name="problem"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-check text-start">
                                        <input 
                                            type="radio" 
                                            name="costumer" 
                                            className="form-check-input" 
                                            id="noClient"
                                            value="no"
                                            checked={form.costumer === 'no'}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="noClient" className="form-check-label">
                                            I&apos;m not a costumer
                                        </label>
                                    </div>
                                    <div className="form-check text-start">
                                        <input 
                                            type="radio" 
                                            name="costumer" 
                                            className="form-check-input" 
                                            id="yesClient" 
                                            value="yes"
                                            checked={form.costumer === 'yes'}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="yesClient" className="form-check-label">
                                            I&apos;m a costumer
                                        </label>
                                    </div>

                                    <div className="mt-4 form-check text-start">
                                        <input 
                                            type="checkbox" 
                                            id="privacy" 
                                            className="form-check-input" 
                                            required 
                                            checked={privacy}
                                            onChange={() => setPrivacy(!privacy)} 
                                            value="privacy"
                                        />
                                        <label htmlFor="privacy" className="form-check-label">
                                            Accept the Privacy Policy
                                        </label>
                                    </div>

                                    <button type="submit" className="btn-solid-lg">SEND</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}