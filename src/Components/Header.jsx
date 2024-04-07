import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Avatar from '@mui/material/Avatar';
function Header() {
    return (
        <>
            <Navbar className="shadow" style={{ height: '80px' }}>

                <Navbar.Brand className='ms-2'> <img style={{ width: '120px' }} src='https://salim-fayis.github.io/olapool-landingpage/assets/img_logo-nI4p2SXX.png' alt="" /></Navbar.Brand>

                <div className='d-flex justify-content-between' style={{ marginLeft: '44rem' }}>
                    <p className='mt-2 ' style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '-20px' }}>Message</p>
                    <label htmlFor="exampleDataList" className="form-label">
                    </label>
                    <select className="form-select" id="exampleDataList" style={{ width: '250px', height: '40px', marginLeft: '100px' }}>
                    
                        <option value="">AFSAL </option>
                        <option value="product1">Login</option>
                        <option value="product2">Register</option>
                        <option value="product3">user</option>

                    </select>
                    <Avatar style={{marginLeft:'-90px', fontSize:'20px' , width:'30px', height:'30px' , marginTop:'5px', backgroundColor:"red"}}></Avatar>
                </div>
            </Navbar>
        </>
    )
}

export default Header