import React, { useState } from "react";
import "../Assets/Styles/SubjectPage.css";
import { PiStudentBold } from "react-icons/pi";
import {
  BsPersonFillCheck,
  BsPersonFillExclamation,
  BsPersonFillX,
} from "react-icons/bs";
import { SiBookstack } from "react-icons/si";
import { BiScan, BiTask } from "react-icons/bi";
import { FaBook } from "react-icons/fa6";
import QRCode from "../Components/QRCode";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height:'60%',
    maxWidth: '400px', 
    padding: '20px',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
};

const SubjectPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="grey-bg container-fluid container">
      <section id="minimal-statistics">
        <div className="row">
          <div className="col-12 mt-3 mb-1 subject-heading ">
            <h4 className="text-uppercase ">Students Statistics</h4>
            {/* <p>Statistics on minimal cards.</p> */}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex icon-content">
                    <div className="align-self-center">
                      <PiStudentBold className="icons icon1" />
                    </div>
                    <div className="media-body text-center">
                      <span>Total Students</span>
                      <h3>278</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex icon-content">
                    <div className="align-self-center">
                      <BsPersonFillCheck className="icons icon2" />
                    </div>
                    <div className="media-body text-center">
                      <span>Present</span>
                      <h3>278</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex icon-content">
                    <div className="align-self-center">
                      <BsPersonFillX className="icons icon3" />
                    </div>
                    <div className="media-body text-center">
                      <span>Absent</span>
                      <h3>278</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex icon-content">
                    <div className="align-self-center">
                      <BsPersonFillExclamation className="icons icon4" />
                    </div>
                    <div className="media-body text-center">
                      <span>Demo</span>
                      <h3>278</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats-subtitle">
        <div className="row">
          <div className="col-12 mt-3 mb-1 subject-heading">
            <h4 className="text-uppercase ">Subject Statistics</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="card overflow-hidden">
              <div className="card-content">
                <div className="card-body cleartfix">
                  <div className="media align-items-stretch  icon-content">
                    <div className="align-self-center">
                      <SiBookstack className="icons icon1" />
                    </div>

                    <div className="align-self-center">
                      <h3>18,000</h3>
                    </div>
                    <div className="media-body  text-center">
                      <h4>Total Assignments</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="card overflow-hidden">
              <div className="card-content">
                <div className="card-body cleartfix">
                  <div className="media align-items-stretch  icon-content">
                    <div className="align-self-center">
                      <BiTask className="icons icon4" />
                    </div>

                    <div className="align-self-center">
                      <h3>18,000</h3>
                    </div>
                    <div className="media-body  text-center">
                      <h4>Total Tests</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="card overflow-hidden">
              <div className="card-content">
                <div className="card-body cleartfix">
                  <div className="media align-items-stretch  icon-content">
                    <div className="align-self-center">
                      <FaBook className="icons" />
                    </div>

                    <div className="media-body  text-center">
                      <h4>Syllabus</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="card overflow-hidden" onClick={toggleModal}>
              <div className="card-content">
                <div className="card-body cleartfix">
                  <div className="media align-items-stretch icon-content">
                    <div className="align-self-center">
                      {/* You can put your icon component here */}
                      <BiScan className="icons icon5" />
                    </div>
                    <div className="media-body text-center">
                      <h4>Scanner</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={toggleModal}
              contentLabel="QR Code Modal"
              style={customStyles}
            >
              {/* <button className=" btn-close " onClick={toggleModal}>
                &times;
              </button> */}
              {/* QRCode Component */}
              <QRCode />
            </Modal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubjectPage;
