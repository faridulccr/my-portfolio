/* eslint-disable no-undef */
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Contact.scss";
// https://react-leaflet.js.org/ => map link
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
    const formRef = useRef();
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        // this function will call at the end of text-animate class's action after 4.5 s
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.com/docs/examples/reactjs/
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                formRef.current, // form tag ref
                process.env.REACT_APP_PUBLIC_ID
            )
            .then(
                (res) => {
                    console.log(res.text);
                    alert("Message successfully sent!");
                    window.location.reload(false);
                },
                (err) => {
                    console.log(err.text);
                    alert("Failed to send, please try again");
                }
            );
    };

    const position = [25.717916, 89.263585];

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1 className="heading">
                        <AnimatedLetters
                            letterClass={letterClass}
                            text="Contact Me"
                            id={1}
                        />
                    </h1>

                    <p>
                        I am interested in freelance opportunities - especially
                        ambitious or large projects. However, if you have other
                        request or question, don&apos;t hesitate to contact me
                        using below form either.
                    </p>
                    <p></p>
                    <p></p>

                    <div className="contact-form">
                        <form ref={formRef} onSubmit={sendEmail}>
                            <ul>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <li className="half gradient-border">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            required
                                        />
                                    </li>
                                    <li className="half gradient-border">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required
                                        />
                                    </li>
                                </div>
                                <li className=" gradient-border">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                    />
                                </li>
                                <li className="message gradient-border">
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        required
                                    ></textarea>
                                </li>
                                <li className="text-right">
                                    <div className="gradient-border send-btn mt-6">
                                        <button
                                            type="submit"
                                            className="flat-button"
                                        >
                                            SEND
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className="map-wrap">
                    <MapContainer center={position} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                Faridul live&apos;s here, come over for a cup of
                                coffee
                            </Popup>
                        </Marker>
                    </MapContainer>
                    <div className="info-map">
                        <div className="text-color">
                            Faridul Islam <br />
                            Rangpur City, <br />
                            Bangladesh. <br />
                            faridulccr@gmail.com
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;
