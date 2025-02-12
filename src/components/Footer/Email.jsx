import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
function Email() {
    const [emailForm, setEmailForm] = useState("");
    const [message, setMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    function sendEmail(e) {
        e.preventDefault();
        setIsLoading(true); // Show loading spinner
        emailjs
            .sendForm("service_um8i1q5", "template_wrnch1a", e.target, "eKntTFWsHYgSOmUwj")
            .then(() => {
                setShowAlert(true); // Show success alert
                setEmailForm(""); // Clear email field
                setMessage(""); // Clear message field
                setIsLoading(false);
                // Hide the alert after 2 seconds
                setTimeout(() => {
                    setShowAlert(false);
                }, 3000);
            })
            .catch((error) => {
                console.error("Email sending failed:", error);
            });


    }



    return (
        <>
            <form onSubmit={sendEmail}>
                <div className="mb-3">
                    <label htmlFor="emailForm" className="form-label">Email address</label>
                    <input name="emailForm"
                        type="email"
                        className="form-control"
                        id="emailForm"
                        value={emailForm}
                        placeholder="name@example.com"
                        onChange={(e) => setEmailForm(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Massage</label>
                    <textarea name='message'
                        className="form-control"
                        id="message"
                        value={message}
                        rows="3"
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                </div>
                <button type="submit" className="btn  btn-outline-dark" id='button' > {isLoading ? (
                    <div className="spinner-grow" style={{ width: "1rem", height: "1rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    'Send'
                )}</button>
                {showAlert && (
                    <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
                        <strong>Success!</strong> Your message has been sent.
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={() => setShowAlert(false)}
                        ></button>
                    </div>
                )}
            </form>
        </>
    )
}

export default Email