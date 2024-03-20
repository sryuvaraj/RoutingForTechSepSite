import React from "react";
import { MdOutlineSupportAgent } from "react-icons/md";

const Enquiry = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submited")
  }
  return (
    <>
      <div className="p-5" style={{ backgroundColor: "rgb(105,111,117)" }}>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
          <form
          className="p-5 mx-5"
          onSubmit= {handleSubmit}
          style={{ backgroundColor: "white", fontSize: "20px" }}
        >
          <div className="text-dark pt-3 py-4" style={{ display: "flex" }}>
            <MdOutlineSupportAgent size={40} />
            <h2 className="px-2"><span style={{borderBottom:"4px solid rgb(13,110,253)"}}>Let's</span> connect with us</h2>
          </div>
          <div className="row">
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
            <div className="col-md-6 p-2">
              <label htmlFor="jobPosition">Company</label>
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
              <label>Address</label>
              <input
                className="form-control p-2"
                type="text"
                id="address"
                placeholder="Enter Address"
                name="address"
                value=""
                onChange={() => {}}
              />
            </div>
            <div className="col-md-6 p-2">
              <label htmlFor="country">Country</label>
              <input
                className="form-control p-2"
                type="text"
                id="country"
                placeholder="Enter Country"
                name="Country"
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
            <label htmlFor="subject">Subject</label>
            <input
              className="form-control p-2"
              type="text"
              id="subject"
              placeholder="Enter Subject"
              name="subject"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className=" p-2">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control p-2"
              id="description"
              placeholder="Enter Description"
            ></textarea>
          </div>
          <button className="btn btn-primary p-2 m-2" type="submit">
            Submit
          </button>
        </form>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
};

export default Enquiry;
