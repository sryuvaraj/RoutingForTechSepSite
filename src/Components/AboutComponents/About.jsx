import React from 'react'
import FooterCompenent from '../FooterCompenent'
import FooterWithMenus from '../FooterWithMenus'

const About = () => {
  return (
    <>
    <div className='text-light' style={{fontSize: "18px"}}>
      <div className='row' style={{backgroundColor:"rgb(105,111,117)"}}>
        <div className='col-md-5'>
          <img className='p-5' src='http://techsepengg.com/about-img-new-1.jpg' style={{width:"100%"}} alt='abtImgOne'/>
        </div>
        <div className='col-md-7 p-5'>
          <p className='py-1'>TechSep products & services are spread across various verticals in the Industry. We provide solutions to onshore and offshore, Petrochemical, Power Sector, Oil & Gas Industry, Refineries, Fertilizer, Pharmaceutical, Chemical, Steel, Cement, Water Treatment and others.</p>
          <p className='py-1'>We deliver optimized Integrated Engineered Solution to customers with rich experienced, domain expertise professionals.</p>
          <p className='py-1'>We are Complete Solution Provider / Package Integrator and our Project Management team has established well defined process which ensures the projects are delivered within the budget and on time where still uphold the high quality of standard.</p>
        </div>
      </div>
      <div className='row' style={{backgroundColor:"rgb(163,162,154)"}}>
        <div className='col-md-7 text-dark p-5'>
          <p className='py-1'>We have Engineering & Project Management office with Manufacturing Facility (ISO 9001, ASME "U" stamp/ "NB" / "IBR" Certified) in Chennai, india</p>
          <p className='py-1'>We comply with the ISO & ASME standards and follow strict Quality Management Systems. To achieve higher standards in delivering Customer satisfaction we have continually improved our Business Processes complying with most of the stringent standards in the Industry.</p>
          <p className='py-1'>With the engineering capability and manufacturing facility in Chennai - India, we can able to offer you with the Design & Development of fabrication drawings; Stress Analysis; Pressure Drop Calculation; Structural Analysis, Vessel Analysis (for pressure vessels; tanks etc..) with the complete Fabrication, Integration, Assembly, Testing & Commissioning of SKID packages.</p>
        </div>
        <div className='col-md-5 p-5'>
          <img src='http://techsepengg.com/pic-alt-7.png' style={{width:"100%"}} alt='abtImgOne'/>
        </div>
      </div>
      <div className='row' style={{backgroundColor:"rgb(105,111,117)"}}>
        <div className='col-md-5 p-5'>
          <img src='http://techsepengg.com/about-img-new-3.jpg' style={{width:"100%"}} alt='abtImgOne'/>
        </div>
        <div className='col-md-7 p-5'>
          <p className='py-1'>We are able to offer you with the Design & Detail Engineering with complete Fabrication, Assembly, Integration, Testing and Comissioning of packages.</p>
          <p className='py-1'>We provide a wide range of pressure vessels (ASME"U"Stamp/"NB"/"IBR" Certified) adhering to stringent safety standards for a diverse selection of clients in the Oil & Gas, Petrochemical, Fertilizers, Chemical and Water Treatment industries.</p>
          <p className='py-1'>We will take the complete responsibility from Engineering to Fabrication, Assembly & Testing. We have rich experience in executing projects to meet the Domestic and International customer requirement in all aspects</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About