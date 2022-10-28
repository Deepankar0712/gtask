import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Card, CardBody, Col, Container, Row } from 'reactstrap'
import Register from './Register'
const styles={
    label: {
        fontSize: '22px',
        color: 'rgb(252 181 106)',
        fontWeight: 600,
    },
    input: {
        fontSize: '18px',
        padding: '10px',
        borderColor: 'rgb(252 181 106)',
    },
    butn: {
        border: 'none',
        borderRadius: '20px',
        fontSize: '22px',
        boxShadow: '2px 2px 2px 1px rgb(252 181 106)',
    },
}


export const Login = ({login, setLogin, register, setRegister}) => {
    const [registerClicked, setRegisterClicked] = useState(false);
    const handleClick = () => {
        setRegisterClicked(!registerClicked);
        // setRegister(true);
        // setLogin(false);
    }
  return (
    <>
    {
        register ? <Register /> :
    
    <Container style={{
        background: '#fff',
        marginTop: '40px',
        borderRadius: '20px',
        padding: '30px',
        width: '50%',
    }}>
        <Row>
          <Col />
          <Col lg="10">
              <h3 className='text-center mb-5' style={{color: 'rgb(252 181 106)',}}>{registerClicked ? 'Register' : 'Login'}</h3>
              <Card className='py-3' style={{borderColor: 'rgb(252 181 106)',}}>
                <CardBody>
                {
                    registerClicked ? <Form>
                    <FormGroup>
                <Label style={styles.label} className=' d-block'>Name</Label>
                <Input style={styles.input} placeholder='Enter your name' type='name' />
            </FormGroup>
            <FormGroup>
                <Label style={styles.label} className=' d-block'>Email</Label>
                <Input style={styles.input} placeholder='Enter your email' type='email' />
            </FormGroup>
            <FormGroup>
                <Label style={styles.label} className=' d-block'>Password</Label>
                <Input style={styles.input} placeholder='Enter your password' type='password' />
            </FormGroup>
            <FormGroup>
                <Label style={styles.label} className=' d-block'>Confirm Password</Label>
                <Input style={styles.input} placeholder='Confirm your password' type='password' />
            </FormGroup>
            <p>Already registered? <b style={{cursor: 'pointer', color: 'rgb(252 181 106)'}} onClick={handleClick}>Login</b></p>
            <div className='d-flex align-items-center justify-content-center mt-3 pt-3'>
                <Button className='butn d-block' style={styles.butn}>Register</Button>
            </div>
            
        </Form>: <Form>
                    <FormGroup>
                        <Label style={styles.label} className='d-block'>Email</Label>
                        <Input style={styles.input} placeholder='Enter your email' type='email' />
                    </FormGroup>
                    <FormGroup>
                        <Label style={styles.label} className='d-block'>Password</Label>
                        <Input style={styles.input} placeholder='Enter your password' type='password' />
                    </FormGroup>
                    <p>Not registered yet! <b style={{cursor: 'pointer', color: 'rgb(252 181 106)'}} onClick={handleClick}>Register</b></p>
                    <div className='d-flex align-items-center justify-content-center mt-3 pt-3'>
                        <Button className='butn d-block' style={styles.butn}>Login</Button>
                    </div>
                    
                    
                </Form>
                }
                </CardBody>
              </Card>
          </Col>
          <Col />
        </Row>
      </Container>
}
</>
  )
}
