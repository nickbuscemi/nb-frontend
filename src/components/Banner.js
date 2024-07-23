import { Container, Row, Col } from "react-bootstrap"
import bannerlogo2 from '../assets/img/bannerlogo2.svg'
import { useEffect, useState } from "react";
import 'animate.css';


export const Banner = () => {

const texts = ["Full Stack", "Software Engineer", "Web Developer" /*"Social Media Managment"*/];
    const [currentText, setCurrentText] = useState(texts[0]);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const changeText = () => {
            setFade(true);
            setTimeout(() => {
                setCurrentText(texts[(texts.indexOf(currentText) + 1) % texts.length]);
                setFade(false);
            }, 500); // This should match the duration of the fade effect
        };

        const intervalId = setInterval(changeText, 3000);

        return () => clearInterval(intervalId);
        // eslint-disable-next-line
    }, [currentText]);

    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col className="animate__animated animate__fadeInUp" xs={12} m={6} xl={7} style={{ textAlign: 'left', padding: '40px'}}>
                        <h1>{`Hello I'm Nick.`}</h1>
                        <h1 className={`wrap ${fade ? 'fade' : ''}`}>{currentText}</h1>
                        <p>Browse through my recent projects and feel free to reach out to collaborate!</p>
                    </Col>
                    <Col className="animate__animated animate__fadeInRight" xs={12} m={6} xl={5}>
                        <img src={bannerlogo2} alt="Header-Img" height={500}/>  
                    </Col>
                </Row>
            </Container>

        </section>
    )
}