import React from 'react'
import { PiSuitcaseSimpleFill } from "react-icons/pi";

const Careers = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submited")
  }
  return (
    <>
      <div className="" style={{ backgroundColor: "rgb(105,111,117)" }}>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
          <div className='text-white mx-5 pt-5'>
        <p style={{fontSize:"31px", fontWeight:"700"}}>We are Hiring</p>
        <p  style={{fontSize:"21px", fontWeight:"700"}}>TechSep careers to open the door for professional growth and development. Choose the one that best suits you and apply.</p>
        </div>
        <form
          className="m-5 p-5"
          onSubmit= {handleSubmit}
          style={{ backgroundColor: "white", fontSize: "20px" }}
        >
          <div className='py-4 px-' style={{display:'flex'}}>
          <PiSuitcaseSimpleFill  size={40} />
          <h2><span style={{borderBottom:"4px solid rgb(13,110,253)"}}>Grow</span> With TechSep</h2>
          </div>
          <div className="row">
            <div className="col-md-6 p-2">
              <label htmlFor="jobPosition">Apply for Position</label>
              <input
                className="form-control p-2"
                type="text"
                id="jobPosition"
                placeholder="Enter Job Position"
                name="jobPosition"
                value=""
                onChange={() => {}}
              />
            </div>
            <div className="col-md-6 p-2">
              <label htmlFor="name">Name</label>
              <input
                className="form-control p-2"
                type="text"
                id="name"
                placeholder="Enter Name"
                name="name"
                value=""
                onChange={() => {}}
              />
            </div>

            <div className="col-md-2 p-2">
              <label htmlFor="code">Code</label>
              <input
                className="form-control p-2"
                type="text"
                id="code"
                placeholder="Enter Code"
                name="code"
                value=""
                onChange={() => {}}
              />
            </div>
            <div className="col-md-4 p-2">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                className="form-control p-2"
                type="tel"
                id="phoneNumber"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                value=""
                onChange={() => {}}
              />
            </div>
            <div className="col-md-6 p-2">
              <label htmlFor="email">Email</label>
              <input
                className="form-control p-2"
                type="email"
                id="email"
                placeholder="Enter Email"
                name="email"
                value=""
                onChange={() => {}}
              />
            </div>
          </div>

          <div className=" p-2">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control p-2"
              id="description"
              placeholder="Enter Description"
            ></textarea>
          </div>
          <div className=" p-2">
            <label htmlFor="subject">Upload Resume (Format: PDF, Size: upto 1 MB)</label>
            <input
              className="form-control p-2"
              type="file"
              id="subject"
              placeholder="Enter Subject"
              name="subject"
              value=""
              onChange={() => {}}
            />
          </div>
          <button className="btn btn-primary p-2 m-2" type="submit">
            Submit
          </button>
        </form>
      l
          </div>
          <div className='col-md-1'></div>
        </div>
        </div>
    </>
  )
}

export default Careers