import React from 'react'
import { Button, Form, FormGroup, Input, Label, Card, CardBody, Col, Container, Row } from 'reactstrap'

const styles={
    label: {
        fontSize: '26px',
    },
    input: {
        fontSize: '22px',
        padding: '10px',
    },
    butn: {
        border: 'none',
        borderRadius: '20px',
        fontSize: '22px',
        boxShadow: '2px 2px 2px 1px rgb(252 181 106)',
    },
}

const Register = () => {
  return (
    <Container style={{
        background: '#fff',
        marginTop: '40px',
        borderRadius: '20px',
        padding: '60px 20px',
    }}>
        <Row>
          <Col />
          <Col lg="8">
              <h3 className='text-center mb-5'>Login Form</h3>
              <Card className='py-3'>
                <CardBody>
                <Form>
                <FormGroup>
            <Label style={styles.label} className='text-center d-block'>Name</Label>
            <Input style={styles.input} placeholder='Enter your name' type='name' />
        </FormGroup>
        <FormGroup>
            <Label style={styles.label} className='text-center d-block'>Email</Label>
            <Input style={styles.input} placeholder='Enter your email' type='email' />
        </FormGroup>
        <FormGroup>
            <Label style={styles.label} className='text-center d-block'>Password</Label>
            <Input style={styles.input} placeholder='Enter your password' type='password' />
        </FormGroup>
        <FormGroup>
            <Label style={styles.label} className='text-center d-block'>Confirm Password</Label>
            <Input style={styles.input} placeholder='Confirm your password' type='password' />
        </FormGroup>
        <div className='d-flex align-items-center justify-content-center mt-3 pt-3'>
            <Button className='butn d-block' style={styles.butn}>Register</Button>
        </div>
        
    </Form>
                </CardBody>
              </Card>
          </Col>
          <Col />
        </Row>
      </Container>
  )
}

export default Register