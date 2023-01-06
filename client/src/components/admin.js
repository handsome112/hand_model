import { useState, useRef, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Message from './Message';
import Progress from './Progress';

import axios from 'axios';

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

    const [availability, setAvailability] = useState(0);
    const [from, setFrom] = useState(0);
    const [ethnic, setEthnic] = useState(0);
    const [expereience, setExpereience] = useState(0);
    const [gender, setGender] = useState(0);
    const [height, setHeight] = useState(0);
    const [nationality, setNationality] = useState(0);
    const [shoesize, setShoesize] = useState(0);
    const [skintone, setSkintone] = useState(0);

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

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
    }, [texts]);

    const saveModal = () => {

        //     availability: String,
        //     from: String,
        //     ethnic: String,
        //     expereience: String,
        //     gender: String,
        //     height: String,
        //     nationality: String,
        //     shoesize: String,
        //     skintone: String,
        // return;

        const data = {
            availability: texts[0][availability],
            from: texts[1][from],
            ethnic: texts[2][ethnic],
            expereience: texts[3][expereience],
            gender: texts[4][gender],
            height: texts[5][height],
            nationality: texts[6][nationality],
            shoesize: texts[7][shoesize],
            skintone: texts[8][skintone],
            filename: Date.now() + '_' +filename
        };

        axios.post(`http://localhost:8080/api/add`, { data })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    const changeAvailability = async (e) => {
        // console.log(e.target.selectedIndex);
        console.log(e.target.selectedIndex);
        console.log(process.env.API_URL);

        setAvailability(e.target.selectedIndex)
    }

    const changeFrom = async (e) => {
        console.log(e.target.selectedIndex);
        setFrom(e.target.selectedIndex);
    }

    const changeEthnic = async (e) => {
        console.log(e.target.selectedIndex);
        setEthnic(e.target.selectedIndex);
    }

    const changeExperience = async (e) => {
        console.log(e.target.selectedIndex);
        setExpereience(e.target.selectedIndex);
    }

    const changeGender = async (e) => {
        console.log(e.target.selectedIndex);
        setGender(e.target.selectedIndex);
    }

    const changeHeight = async (e) => {
        console.log(e.target.selectedIndex);
        setHeight(e.target.selectedIndex);
    }


    const changeNationality = async (e) => {
        console.log(e.target.selectedIndex);
        setNationality(e.target.selectedIndex);
    }

    const changeShoeSize = async (e) => {
        console.log(e.target.selectedIndex);
        setShoesize(e.target.selectedIndex);
    }

    const changeSkinTone = async (e) => {
        console.log(e.target.selectedIndex);
        setSkintone(e.target.selectedIndex);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        // formData.append('name', Date.now() + '_' +file.name);
        console.log(formData);

        try {
            const res = await axios.post('http://localhost:8080/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(
                        parseInt(
                            Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        )
                    );
                }
            });

            // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);

            const { fileName, filePath } = res.data;

            setUploadedFile({ fileName, filePath });

            setFilename(fileName);

            setMessage('File Uploaded');
        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
            }
            setUploadPercentage(0)
        }
    };

    const onChangeImage = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    return (
        <>
            {(texts.length !== 0) &&
            <div className='content_share'>
                <Container>
                    <Row>
                        <Col sm={12} md={7}>

                            <Row>
                                <div className='top_space'></div>
                            </Row>
                            <Row>
                                <div className='top_space'></div>
                            </Row>
                            <Row>
                                <div className='top_space'></div>
                            </Row>
                            <Row>
                                <div className='top_space'></div>
                            </Row>

                            <Row>
                                <Col sm={12} md={4}>
                                    <span>Please Select Availability.</span>
                                </Col>
                                <Col sm={12} md={8}>
                                    <Form.Select aria-label="Default select example" className='custom_select' onChange={event => changeAvailability(event)}>
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
                                    <span>Please Select You From.</span>
                                </Col>
                                <Col sm={12} md={8}>
                                    <Form.Select aria-label="Default select example" className='custom_select' onChange={event => changeFrom(event)}>
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
                                    <span>Please Select Ethnic Origin.</span>
                                </Col>
                                <Col sm={12} md={8}>
                                    <Form.Select aria-label="Default select example" className='custom_select' onChange={event => changeEthnic(event)}>
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
                                    <span>Please Select Experience.</span>
                                </Col>
                                <Col sm={12} md={8}>
                                    <Form.Select aria-label="Default select example" className='custom_select' onChange={event => changeExperience(event)}>
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
                                    <span>Please Select Gender.</span>
                                </Col>
                                <Col sm={12} md={8}>
                                    <Form.Select aria-label="Default select example" className='custom_select' onChange={event => changeGender(event)}>
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
                                    <span>Please Select Height.</span>
                                </Col>
                                <Col sm={12} md={8}>
                                    <Form.Select aria-label="Default select example" className='custom_select' onChange={event => changeHeight(event)}>
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
                                    <span>Please Select Nationality.</span>
                                </Col>
                                <Col sm={12} md={8}>
                                    <Form.Select aria-label="Default select example" className='custom_select' onChange={event => changeNationality(event)}>
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
                                    <span>Please Select Shoe Size.</span>
                                </Col>
                                <Col sm={12} md={8}>
                                    <Form.Select aria-label="Default select example" className='custom_select' onChange={event => changeShoeSize(event)}>
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
                                    <span>Please Select Skin Tone.</span>
                                </Col>
                                <Col sm={12} md={8}>
                                    <Form.Select aria-label="Default select example" className='custom_select' onChange={event => changeSkinTone(event)}>
                                        {texts[8].map((text, i) => (
                                            <option value={i}>{text}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row>
                                <div className='top_space'></div>
                            </Row>
                        </Col>
                        <Col sm={12} md={5}>
                            <div className='top_space'></div>
                            <div className='top_space'></div>
                            <div className='top_space'></div>
                            <div className='top_space'></div>
                            
                            {message ? <Message msg={message} /> : null}
                            <div className='top_space'></div>

                                <div className='custom-file mb-4'>
                                    <input
                                        type='file'
                                        className='custom-file-input'
                                        id='customFile'
                                        onChange={onChangeImage}
                                    />
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        {filename}
                                    </label>
                                </div>

                                <Progress percentage={uploadPercentage} />

                                <input
                                    type='button'
                                    value='Upload'
                                    className='btn btn-primary btn-block mt-4'
                                    onClick={onSubmit}
                                />

                            {uploadedFile ? (
                                <div className='row mt-5 p-2'>
                                    <div className='col-md-10 m-auto'>
                                        <h5 className='text-center'>{uploadedFile.fileName}</h5>
                                        <img style={{ width: '100%', maxHeight:'400px', background:'white' }} src={uploadedFile.filePath} alt='' />
                                    </div>
                                </div>
                            ) : null}
                        </Col>
                    </Row>
                    <Row>
                        <div className='form-btns'>
                            <Row>
                                <Col sm={12} md={10}>
                                </Col>
                                <Col sm={12} md={2}>
                                    <Button className='add-btn' variant="success" onClick={saveModal}>Add One Model</Button>
                                </Col>
                            </Row>
                        </div>
                    </Row>

                </Container>
                </div>
            }
        </>
    )
}

export default Admin;