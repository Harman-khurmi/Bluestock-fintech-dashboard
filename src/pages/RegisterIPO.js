import React from 'react';
import './RegisterIPO.css';
import nselogo from "../assets/nselogo.svg";

const RegisterIPO = () => {
  return (
    <div className="register-ipo-container">
      <div className="header">
        <div className="heading">
          <h1>Upcoming IPO Information</h1>
          <h2>Manage your IPO details</h2>
        </div>
        <div className="buttons">
          <button className="register-btn">Register</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
      <div className="content">

        <div className="navigation">
          <button className="nav-btn">
            <i class="fa-solid fa-circle-info info-icon"></i> IPO Information
          </button>
          <button className="nav-btn">
            <i class="fa-regular fa-file-lines info-icon"></i> IPO Info
          </button>
        </div>

        <div className="details">
          <div className="right-headings">
            <h2>IPO Information</h2>
            <h3>Enter IPO details</h3>
          </div>
          {/* line here required */}
          <div className="company-details">
            <h4>Company Logo</h4>
            <div className="ipo-logo-section">
              <img src={nselogo} alt="NSE INDIA" />
              <div className="ipo-company-detail">
                <h4>NSE INDIA</h4>
                <p>Tech Team</p>
                <p>Punjab</p>

              </div>
              <div className="ipo-logo-buttons">
                <button>Upload Logo</button>
                <button className='delete-btn'>Delete</button>
              </div>
            </div>
            <div className="inputs top-rows">

              <div className="input-row">
                <label>Company Name</label>
                <input type="text" placeholder={"Vodafone Idea"} />
              </div>
              <div className="input-row">
                <label>Price Brand</label>
                <input type="text" placeholder={"Not Issued"} />
              </div>
              <div className="input-row">
                <label>Open</label>
                <input type="text" placeholder={"Not Issued"} />
              </div>
              <div className="input-row">
                <label>Close</label>
                <input type="text" placeholder={"Not Issued"} />
              </div>
              <div className="input-row">
                <label>Issue Size</label>
                <input type="text" placeholder={"2300 Cr."} />
              </div>
              <div className="input-row">
                <label>Issue Type</label>
                <select className='dropdown'>
                  <option placeholder="">Select an option</option>
                  <option placeholder="option1">Option 1</option>
                  <option placeholder="option2">Option 2</option>
                  <option placeholder="option3">Option 3</option>
                </select>
              </div>
              <div className="input-row">
                <label>Listing Date</label>
                <input type="text" placeholder={"Not Issued"} />
              </div>
              <div className="input-row">
                <label>Status</label>
                <select className='dropdown'>
                  <option placeholder="">Select an option</option>
                  <option placeholder="option1">Option 1</option>
                  <option placeholder="option2">Option 2</option>
                  <option placeholder="option3">Option 3</option>
                </select>
              </div>
            </div>
            <h2 className='bottom-row-head'>NEW LISTED IPO DETAILS WHEN IPO GET LISTED</h2>
            <div className="inputs bottom-rows">
              <div className="input-row">
                <label>IPO Price</label>
                <input type="text" placeholder={"381"} />
              </div>
              <div className="input-row">
                <label>Listing Price</label>
                <input type="text" placeholder={"108"} />
              </div>
              <div className="input-row">
                <label>Listing Gain</label>
                <input type="text" placeholder={"13.8%"} />
              </div>
              <div className="input-row">
                <label>Listing Date</label>
                <input type="text" placeholder={"30-07-2024"} />
              </div>
              <div className="input-row">
                <label>CMP</label>
                <input type="text" placeholder={"410"} />
              </div>
              <div className="input-row">
                <label>Current Return</label>
                <input type="text" placeholder={"5%"} />
              </div>
              <div className="input-row">
                <label>RHP</label>
                <input type="text" placeholder={"Enter RHP Pdf Link"} />
              </div>
              <div className="input-row">
                <label>DRHP</label>
                <input type="text" placeholder={"Enter DRHP Pdf Link"} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RegisterIPO;
