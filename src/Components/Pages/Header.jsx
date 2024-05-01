
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { toggleTrafic } from '../StatusBar/Actions.jsx';
import { ENABLE_OPTIONS, SET_BRIGHTNESS, SET_TRASITION_TIME, SET_TIME_ATIMATION,  } from './HeaderActions.jsx';
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
        console.log(trasition_time_Store)
    }

    const handleSetDelayStore = (e) => {
        
        dispatch(SET_TIME_ATIMATION(e.target.value));
        console.log(e.target.value)
       
        
    }

    const currentURL = window.location.pathname;


    useEffect(() => {
    }, [typeOBJ2, currentURL])

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

                            {currentURL === "/TraficLight" ?
                                <>
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
