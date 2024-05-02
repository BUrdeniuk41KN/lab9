import axios from 'axios';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { toggleTrafic } from '../StatusBar/Actions.jsx';
import { ENABLE_OPTIONS, SET_BRIGHTNESS, SET_TRASITION_TIME, SET_TIME_ATIMATION, } from './HeaderActions.jsx';
import './HeaderStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Header = () => {
    let dispatch = useDispatch();
    const typeOBJ2 = useSelector(state => state.StatusBarState.toggleTraficType);

    const brightnessStore = useSelector(state => state.HeaderState.brightness);
    const trasition_time_Store = useSelector(state => state.HeaderState.trasition_time);
    const delayStore = useSelector(state => state.HeaderState.TIME);
    const optionsEnabled = useSelector(state => state.HeaderState.optionsEnabled);
    const serverAddr = useSelector(state => state.ConfigServerState.AddrServeConfig);
    const [usrsData, LoadUsersData] = useState({ null: "null" });
    const [stateConnection, SetStateConnection] = useState(false);
    const [ursIDU, LoadUid] = useState("");
    let intervalCheck = 1500;

    const Data_USR_JSON = {
        "UserName": "Default",
        "trafic_light_setting": {
            "opacity_background_color": brightnessStore,
            "time_trasition": trasition_time_Store + "s",
            "time_animation": delayStore + "s"
        }

    };


    const URLServer = "http://" + serverAddr + "/";


    const handleBTN = () => {
        dispatch(toggleTrafic());
    }

    const handleBTNop = () => {
        dispatch(ENABLE_OPTIONS());
    }

    const handleSetBrightness = (e) => {
        dispatch(SET_BRIGHTNESS(e.target.value));
    }

    const handleSetTrasitionTime = (e) => {
        dispatch(SET_TRASITION_TIME(e.target.value));
    }

    const handleSetDelayStore = (e) => {
        dispatch(SET_TIME_ATIMATION(e.target.value));
    }

    const handleSaveJSON = () => {
        fetch(URLServer + "User_setings/")
            .then(respones => respones.json())
            .then((data) => {
                if (data.length == 0) {
                    PostPutData(URLServer + "User_setings/", Data_USR_JSON, "POST");
                }
                const sendUpdateData = [{
                    "trafic_light_setting": {
                        "opacity_background_color": parseInt(brightnessStore),
                        "time_trasition": trasition_time_Store + "s",
                        "time_animation": delayStore + "s"
                    }
                }];

                if (ursIDU == "") {
                    let srt_ID_LIST = "Input ID_User: ";
                    data.forEach(element => {
                        srt_ID_LIST += "\nID = " + element.id + " | Name: " + element.UserName;
                    });
                    const id = prompt(srt_ID_LIST);
                    PostPutData(URLServer + "User_setings/" + id, sendUpdateData, "PATCH");
                }
                else {
                    PostPutData(URLServer + "User_setings/" + ursIDU, sendUpdateData, "PATCH");
                }
                let t = window.confirm("User Data Saved Seccessful: ");
            }).catch((e) => { return e });


    }

    const PostPutData = (url, data, type) => {
        fetch(url, { method: type, body: JSON.stringify({ "URS_data": data }) })
            .then(respones => respones.json)
            .then(req => {
                console.log("OK SEND MSG: TYPE -> " + type);
            })
            .catch(e => {
                console.log(e);
            })
    }

    const LoadSetting = () => {
        let srt_ID_LIST = "Input ID_User: ";

        usrsData.forEach(element => {
            srt_ID_LIST += "\nID = " + element.id + " | Name: " + element.UserName;
        });

        const id = prompt(srt_ID_LIST);

        usrsData.forEach(element => {
            if (element.id == id) {
                dispatch(SET_BRIGHTNESS(element.URS_data[0].trafic_light_setting["opacity_background_color"]));
                dispatch(SET_TRASITION_TIME((element.URS_data[0].trafic_light_setting["time_trasition"]).slice(0, -1)));
                dispatch(SET_TIME_ATIMATION((element.URS_data[0].trafic_light_setting["time_animation"]).slice(0, -1)));
                LoadUid(id);
                let t = window.confirm("User Data Loaded Seccessful: ");
                console.log("User Data Loaded Seccessful: ");
            }
        });
        LoadUid(id);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URLServer + "User_setings/", { method: 'GET' });
                if (!response.ok) {
                    throw new Error('Failed to fetch data from server');
                }
                if (response.status) SetStateConnection(true);
                console.log(stateConnection, "Check");
            } catch (error) {
                console.error('Error fetching data:', error);
                console.log(stateConnection, "Catch");
            }
        };

        if (stateConnection) {
            intervalCheck = 10000;
            if (usrsData != { null: "null" }) {
                fetch(URLServer + "User_setings/", { method: 'GET' })
                    .then(respones => respones.json())
                    .then((data) => {
                        LoadUsersData(data);
                        console.log(data);
                    }).catch(e => console.log(e));
            }
        }
        const intervalId = setInterval(fetchData, intervalCheck);
        return () => clearInterval(intervalId);
    }, [stateConnection])

    return (
        <div className='Header' >

            <Navbar bg="night" expand="lg">
                <Container>
                    <Navbar.Brand href="/">React App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className='Link'><p className='none'>.</p>Home</Nav.Link>
                            <Nav.Link href="/TraficLight" className='Link'><p className='none'>.</p>Trafic Light</Nav.Link>
                            <Nav.Link href="/Error" className='Link'><p className='none'>.</p> Error Page</Nav.Link>

                            {window.location.pathname === "/TraficLight" ?
                                <>
                                    <Nav.Link href="#" className='Link' onClick={handleSaveJSON}><p className='none'>.</p>{"Seve settings on JSON Server: " + serverAddr}</Nav.Link>
                                    <Nav.Link href="#" className='Link' onClick={LoadSetting}><p className='none'>.</p>{"Load Setting: " + ursIDU}</Nav.Link>
                                    <div className="btn_menu Link">
                                        <p className='none'>.</p>
                                        <Form className='Switch_menu'>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch_menu"
                                                label="Toggle type"
                                                checked={typeOBJ2}
                                                onChange={() => { }}
                                                onClick={() => handleBTN()}
                                            />
                                        </Form>
                                    </div>
                                    <div className="btn_menu Link">
                                        <p className='none'>.</p>
                                        <Form className='Switch_menu'>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch_menu"
                                                label="Anition options"
                                                checked={optionsEnabled}
                                                onChange={() => { }}
                                                onClick={() => handleBTNop()}
                                            />
                                        </Form>
                                    </div>
                                    {optionsEnabled ?
                                        <>
                                            <Nav.Link href="#" className='Link_more'><p className='none'>.</p>

                                                <Form className='Input_menu'>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Brightness: 0-100"
                                                            value={brightnessStore}
                                                            onChange={handleSetBrightness}
                                                        />
                                                    </Form.Group>
                                                </Form>
                                                <p className='TextStatus'><p><b>Brightness value:</b>{" " + brightnessStore}</p></p>
                                            </Nav.Link>

                                            <Nav.Link href="#" className='Link_more'><p className='none'>.</p>

                                                <Form className='Input_menu'>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Trasition time: "
                                                            value={trasition_time_Store}
                                                            onChange={handleSetTrasitionTime}
                                                        />
                                                    </Form.Group>
                                                </Form>
                                                <p className='TextStatus'><p><b>Trasition time value:</b>{" " + trasition_time_Store + "s"}</p></p>
                                            </Nav.Link>

                                            <Nav.Link href="#" className='Link_more'><p className='none'>.</p>

                                                <Form className='Input_menu'>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Animation delay: "
                                                            value={delayStore}
                                                            onChange={handleSetDelayStore}
                                                        />
                                                    </Form.Group>
                                                </Form>
                                                <p className='TextStatus'><p><b>Animation delay value:</b>{" " + delayStore + "s"}</p></p>
                                            </Nav.Link>
                                        </>
                                        : null
                                    }

                                </>


                                : null}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
