import React from 'react'
import Header from './Header'
import landingBoy from '../images/boy.jpg'
import laptop from '../images/laptop.png'
import hiImg from '../images/hi.png'
import illusImg from '../images/illus.png'
import camImg from '../images/camera.png'
import boatImg from '../images/boatImg.jpeg'
import quoteImg from '../images/quote.png'
import { Login } from './Login'
import Register from './Register'

const styles={
    img: {
        borderRadius: '50%',
        width: '450px',
        height: '450px',
    },
    services: {
        padding: '10px 20px',
        borderRadius: '30px',
        backgroundColor: 'white',
        img: {
            width: '30px',
            height: '30px',
            marginRight: '10px',
        },
        text: {
            fontWeight: 700,
        }
    },
    servicesBoat: {
        width: '60px',
        height: '60px',
        padding: '15px',
        borderRadius: '50%',
        backgroundColor: 'white',
    },
    landingContent: {
        p: {
            fontWeight: 'bold',
            color: 'rgb(226, 129, 26)',
        },
        h1: {
            fontSize: '52px',
            span: {
                fontWeight: 'bold',
            }
        },
        text: {
            color: '#8a8181',
            fontWeight: 500,
        }
    }
}

const Landing = ({login, setLogin, register, setRegister}) => {
  return (
    <div className='landing'>
        <Header login={login} setLogin={setLogin} register={register} setRegister={setRegister} />
        {
            login ? <Login /> : (register ? <Register /> :
            <>
            <div className='d-flex align-items-center justify-content-center py-5'>
            <div>
                <img className='landingBoy' style={styles.img} src={landingBoy} />
            </div>
            <div className='services service1' style={styles.services}>
                <img src={laptop} style={styles.services.img} />
                <span style={styles.services.text}>UI/UX</span>
            </div>
            <div className='services service2' style={styles.services}>
                <img src={illusImg} style={styles.services.img} />
                <span style={styles.services.text}>Illustrations</span>
            </div>
            <div className='services service3' style={styles.servicesBoat}>
                <img src={boatImg} style={styles.services.img} />
                {/* <span style={styles.services.text}>Photography</span> */}
            </div>
            <div className='services service4' style={styles.services}>
                <img src={hiImg} style={styles.services.img} />
                <span style={styles.services.text}>Hi there!</span>
            </div>
            <div className='services service5' style={styles.services}>
                <img src={camImg} style={styles.services.img} />
                <span style={styles.services.text}>Photography</span>
            </div>
            <div className='services service6' style={styles.services}>
                <img src={quoteImg} style={styles.services.img} />
                <span style={styles.services.text}>Request a Quote</span>
            </div>
        </div>
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <p style={styles.landingContent.p}>HI THERE, I'M JAMES</p>
            <h1 className='landingContenth1' style={styles.landingContent.h1}>A <span style={styles.landingContent.h1.span}>product designer</span> with</h1>
            <h1 className='landingContenth1' style={styles.landingContent.h1}>passion to web</h1>
            <p className='landingContentp' style={styles.landingContent.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
        </div>
            </>
        )}
        
    </div>
  )
}

export default Landing