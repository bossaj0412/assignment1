import React from 'react'
import Container from './Container'
import './colab.css'
import img1 from '../assests/img1.jpg'
import img2 from '../assests/img2.png'
import img3 from '../assests/img3.jpg'
import img4 from '../assests/img4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Colab = () => {

  return (
    <div className='colab-container' >
        
        <div className='main-container'  >
            <Container main={"AI + RPA is what we do"} para={"Future-Proof your business. Drive efficiency, profitability and deliver on customer experience"} link={"AI + RPA Automation"} img={img1}/>

            <Container main={"Make Bolder Choices"} para={" Digital focused strategies to realize market-changing ideas"} link={"Build Better Appsarrow-black"} img={img2}/>

            <Container main={"Innovate with Speed"} para={"Create higher quality software, deliver on customer expectations and business goals"} link={"DevOps"} img={img3}/>


            <Container main={"Embrace Cloud"} para={"With Cloud-First accelerate innovation and optimize performance"} link={"Cloud Servicesarrow-black"} img={img4}/>

            <Container main={"Embrace Cloud"} para={"With Cloud-First accelerate innovation and optimize performance"} link={"Cloud Servicesarrow-black"} img={img4}/>
        </div>

        
    </div>
  )
}

export default Colab