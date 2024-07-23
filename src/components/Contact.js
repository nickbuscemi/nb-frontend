import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

const productionUrl = process.env.REACT_APP_PROD_URL
const developmentUrl = "http://localhost:5252/contact"

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Submit');
    const [status, setStatus] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onFormUpdate = (e) => {
      const { name, value } = e.target;
      setFormDetails({
          ...formDetails,
          [name]: value
      });
  };

    const isFormValid = () => {
        let isValid = true;
        const errors = {};

        // Email validation
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(formDetails.email)) {
            isValid = false;
            errors.email = "Invalid email address.";
        }

        // Simple validation for other fields
        if (!formDetails.firstName.trim()) {
            isValid = false;
            errors.firstName = "First name is required.";
        }

        if (!formDetails.lastName.trim()) {
            isValid = false;
            errors.lastName = "Last name is required.";
        }

        if (!formDetails.phone.trim() || formDetails.phone.length < 10) {
            isValid = false;
            errors.phone = "Invalid phone number, must be at least 10 digits.";
        }

        if (!formDetails.message.trim()) {
            isValid = false;
            errors.message = "Please enter your message.";
        }

        setStatus(errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            setButtonText('Submit');
            return; // Validation failed
        }

        setButtonText('Sending...');
        try {
            let response = await fetch(productionUrl || developmentUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formDetails),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setStatus({ success: true, message: "Message sent successfully!" });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setStatus({ success: false, message: "Failed to send message. Try again later." });
        }
        setButtonText("Submit");
    };

    const handleNewMessage = () => {
        setIsSubmitted(false);
        setFormDetails(formInitialDetails);
        setStatus({});
    };

    if (isSubmitted && status.success) {
        return (
          <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div className="thank-you-message">
                            <h2>Message Received!</h2>
                            <p>Thank you for reaching out. I will get in touch with you shortly!</p>
                            <button type="submit" className="btn btn-primary" onClick={handleNewMessage}><span>Send Another Message</span></button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="personal-info">
                            <h3>Nicholas Buscemi</h3>
                            <p>nick.buscemi13@gmail.com</p>
                            <p>(631) 316-5618</p>
                            <p>253 North Syracuse Avenue, Massapequa , New York 11758</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </section>
        );
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={handleSubmit}>
                                        {/* Inputs for First Name and Last Name */}
                                        <Row>
                                            <Col sm={6}>
                                                <input type="text" className="form-control" value={formDetails.firstName} placeholder="First Name" name="firstName" onChange={onFormUpdate} />
                                                {status.firstName && <p className="error">{status.firstName}</p>}
                                            </Col>
                                            <Col sm={6}>
                                                <input type="text" className="form-control" value={formDetails.lastName} placeholder="Last Name" name="lastName" onChange={onFormUpdate} />
                                                {status.lastName && <p className="error">{status.lastName}</p>}
                                            </Col>
                                        </Row>

                                        {/* Inputs for Email and Phone */}
                                        <Row className="mt-3">
                                            <Col sm={6}>
                                                <input type="email" className="form-control" value={formDetails.email} placeholder="Email Address" name="email" onChange={onFormUpdate} />
                                                {status.email && <p className="error">{status.email}</p>}
                                            </Col>
                                            <Col sm={6}>
                                                <input type="tel" className="form-control" value={formDetails.phone} placeholder="Phone No." name="phone" onChange={onFormUpdate} />
                                                {status.phone && <p className="error">{status.phone}</p>}
                                            </Col>
                                        </Row>

                                        {/* Textarea for Message - Full width */}
                                        <Row className="mt-3">
                                            <Col>
                                                <textarea className="form-control" rows="6" value={formDetails.message} placeholder="Message" name="message" onChange={onFormUpdate}></textarea>
                                                {status.message && <p className="error">{status.message}</p>}
                                            </Col>
                                        </Row>

                                        {/* Submit Button - Centered */}
                                        <Row className="pb-8">
                                            <Col className="text-center">
                                                <button type="submit" className="btn btn-primary"><span>{buttonText}</span></button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col md={6}>
                        <div className="personal-info">
                            <h3>Nicholas Buscemi</h3>
                            <p>nick.buscemi13@gmail.com</p>
                            <p>(631) 316-5618</p>
                            <p>253 North Syracuse Avenue, Massapequa , New York 11758</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
