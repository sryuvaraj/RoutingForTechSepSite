import React from 'react'
import SideBarProj from './Q/SideBarProj'

const Presseure = () => {
  return (
    <>
    <div>
      <div className='row' style={{borderBottom:"2px solid red"}}>
        <div>
          <div className='pt-5 px-4'>
          <p style={{fontSize:"23px", fontWeight:"700"}} className='text-center text-light'>NATURAL GAS FILTRATION, REGULATING & METERING SYSTEM</p>
          <p style={{fontSize:"23px", fontWeight:"700"}} className='text-center text-light'>THAKETA – MAX POWER</p>
          </div>
          <div className='row m-5'>
            <div className="col-md-6">
              <img src='http://techsepengg.com/proj-new-1.jpg' style={{width:"100%",height:"300px"}} alt='yes' />
            </div>
            <div className="col-md-6 p-3" style={{backgroundColor:"white"}}>
              <table>
                <tr>
                  <td>
                    <b>Process Condition</b>
                    <p>Pr I/L; 400 Psig,</p>
                    <p>Pr O/L; 150 Psig</p>
                    <p>Design Pressure: 600 Psig</p>
                    <p>Flow: 40MMSCFD</p>
                    <p>Temp: 60 – 120 deg F</p>
                    <b>Safety Device; 40 / 4MMSCFD</b>
                    <p>4”, 300 # SSV – 2nos</p>
                    <p>6”, 300 # SSV – 1no</p>
                    <p>1.5” x 2” ” CRV – 2nos</p>
                    <p>4” x 4” PSV – 1no</p>
                  </td>    
                  <td className='px-3'>
                  <b>Filtration 40MMSCFD</b>
                    <p>2 x 100% capacity</p>
                    <b>Pr Regulating; 20 / 40MMSCFD</b>
                    <p>2 x 50% capacity</p>
                    <p>1 x 100% capacity</p>
                    <p>4”, 300 # Reg – 4nos</p>
                    <p>4”, 300 # CV – 1no</p>
                    <b>Metering; 40MMSCFD</b>
                    <p>2 x 100% capacity</p>
                    <p>10”, 300 # Senior Orifice Meter</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Presseure