import { useState, useRef, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import './style.css';
import './admin.css';

function Admin() {

    let links = ["/csv/availability.csv",
        "/csv/country_live_in.csv",
        "/csv/ethnic_origin.csv",
        "/csv/experience.csv",
        "/csv/gender.csv",
        "/csv/height.csv",
        "/csv/nationality.csv",
        "/csv/shoe_size.csv",
        "/csv/skin_tone.csv",];

    let [texts, setTexts] = useState([]);

    // links.map((link) => fetch(link).then((res) => res.text()))


    useEffect(() => {
        async function main() {
            const files = await Promise.all(
                links.map((link) =>
                    fetch(link).then(
                        (res) => res.text()
                    )
                )
            );

            // setTexts(files);
            let arrayItem = [];

            files.map((file) => {
                arrayItem.push(file.split("\r\n"))
            })

            setTexts(arrayItem);
        }
        main();
    }, [setTexts]);

    console.log(typeof (texts[0]));
    console.log(texts);
    return (
        <>
            <div>
                {(texts.length != 0) &&
                    <Container>
                        <Row>
                            <div className='top_space'></div>
                        </Row>
                        <Row>
                            <div className='top_space'></div>
                        </Row>
                        <Row>
                            <Col sm={12} md={4}>
                                <h2>Please Select Availability.</h2>
                            </Col>
                            <Col sm={12} md={8}>
                                <Form.Select aria-label="Default select example">
                                    {texts[0].map((text, i) => (
                                        <option value={i}>{text}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <div className='top_space'></div>
                        </Row>

                        <Row>
                            <Col sm={12} md={4}>
                                <h2>Please Select You From.</h2>
                            </Col>
                            <Col sm={12} md={8}>
                                <Form.Select aria-label="Default select example">
                                    {texts[1].map((text, i) => (
                                        <option value={i}>{text}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <div className='top_space'></div>
                        </Row>

                        <Row>
                            <Col sm={12} md={4}>
                                <h2>Please Select Ethnic Origin.</h2>
                            </Col>
                            <Col sm={12} md={8}>
                                <Form.Select aria-label="Default select example">
                                    {texts[2].map((text, i) => (
                                        <option value={i}>{text}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <div className='top_space'></div>
                        </Row>

                        <Row>
                            <Col sm={12} md={4}>
                                <h2>Please Select Experience.</h2>
                            </Col>
                            <Col sm={12} md={8}>
                                <Form.Select aria-label="Default select example">
                                    {texts[3].map((text, i) => (
                                        <option value={i}>{text}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <div className='top_space'></div>
                        </Row>

                        <Row>
                            <Col sm={12} md={4}>
                                <h2>Please Select Gender.</h2>
                            </Col>
                            <Col sm={12} md={8}>
                                <Form.Select aria-label="Default select example">
                                    {texts[4].map((text, i) => (
                                        <option value={i}>{text}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <div className='top_space'></div>
                        </Row>

                        <Row>
                            <Col sm={12} md={4}>
                                <h2>Please Select Height.</h2>
                            </Col>
                            <Col sm={12} md={8}>
                                <Form.Select aria-label="Default select example">
                                    {texts[5].map((text, i) => (
                                        <option value={i}>{text}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <div className='top_space'></div>
                        </Row>

                        <Row>
                            <Col sm={12} md={4}>
                                <h2>Please Select Nationality.</h2>
                            </Col>
                            <Col sm={12} md={8}>
                                <Form.Select aria-label="Default select example">
                                    {texts[6].map((text, i) => (
                                        <option value={i}>{text}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <div className='top_space'></div>
                        </Row>

                        <Row>
                            <Col sm={12} md={4}>
                                <h2>Please Select Shoe Size.</h2>
                            </Col>
                            <Col sm={12} md={8}>
                                <Form.Select aria-label="Default select example">
                                    {texts[7].map((text, i) => (
                                        <option value={i}>{text}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <div className='top_space'></div>
                        </Row>

                        <Row>
                            <Col sm={12} md={4}>
                                <h2>Please Select Skin Tone.</h2>
                            </Col>
                            <Col sm={12} md={8}>
                                <Form.Select aria-label="Default select example">
                                    {texts[8].map((text, i) => (
                                        <option value={i}>{text}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <div className='top_space'></div>
                        </Row>


                        <div className='form-btns'>
                            <Row>
                                <Col sm={12} md={4}>
                                    <Button className='add-btn' variant="success">Add One Model</Button>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                }
            </div>
        </>
    )
}

export default Admin;