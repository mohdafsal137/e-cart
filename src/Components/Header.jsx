import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/heading.png'
import Avatar from '@mui/material/Avatar';
function Header() {
    return (
        <>
            <Navbar className=" " style={{ height: '80px', backgroundColor: '#e6f2ff' }}>

                <Navbar.Brand className='ms-2'> <img style={{ width: '120px' }} src={logo} alt="" /></Navbar.Brand>

                <div className='d-flex justify-content-between' style={{ marginLeft: '48rem' }}>
                    <p className='mt-2 ' style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '-20px' }}>Message</p>
                    <label htmlFor="exampleDataList" className="form-label">
                    </label>
                    <select className="form-select" id="exampleDataList" style={{ width: '250px', height: '40px', marginLeft: '30px' }}>
                    
                        <option value="">John</option>
                        <option value="product1">user 1</option>
                        <option value="product2">user 2</option>
                        <option value="product3">user 3</option>

                    </select>
                    <Avatar style={{marginLeft:'-90px', fontSize:'20px' , width:'30px', height:'30px' , marginTop:'5px'}}>J</Avatar>
                </div>
            </Navbar>
        </>
    )
}

export default Header