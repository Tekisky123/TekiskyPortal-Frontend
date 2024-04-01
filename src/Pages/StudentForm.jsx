import React, { useState } from "react";
import "../Assets/Styles/StudentForm.css";
import { NavLink } from "react-router-dom";
import { FaCloudDownloadAlt } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";
// import { FaArrowDown } from "react-icons/fa";
// import { FaLongArrowAltDown } from "react-icons/fa";
import axios from "axios";
import Base_URL from "../Common/Apis";
import Swal from "sweetalert2";

const StudentForm = () => {
  const [step, setStep] = useState(1);
  const [validErrors, setValidErrors] = useState({});
  // const [selectClass, setSelectClass] = useState(null);
  const [errors, setErrors] = useState({});

  const [inputData, setInputData] = useState({
    studentName: "",
    studentFather: "",
    dob: "",
    gender: "",
    country: "",
    address: "",
    city: "",
    mobile: "",
    parentMobile: "",
    email: "",
    school: "",
    board: "",
    subject: "",
    passingyear: "",
    percentage: "",
    tenthMarksheet: "",
    collegeName: "",
    collegeBoard: "",
    collegePassingYear: "",
    collegeSubject: "",
    collegePercentage: "",
    college: "",
    twelfthMarksheet: "",
  });
  
  //step change
  const handleStepChange = (newStep) => {
    // setStep(newStep);
    const validErrors = {};
    // Validation logic based on the current step
    if (step === 1) {
      // Validation for Step 1 fields
      if (!inputData.studentName.trim()) {
        validErrors.studentName = "Please enter student name";
      }
      if (!inputData.studentFather.trim()) {
        validErrors.studentFather = "Please enter father's name";
      }
      if (!inputData.dob) {
        validErrors.dob = "Please select date of birth";
      }
      if (!inputData.gender) {
        validErrors.gender = "Please select gender";
      }
      if (!inputData.country || inputData.country === "NaN") {
        validErrors.country = "Please select country";
      }
    } else if (step === 2) {
      // Validation for Step 2 fields
      if (!inputData.address.trim()) {
        validErrors.address = "Please enter address";
      }
      if (!inputData.city.trim()) {
        validErrors.city = "Please enter city/town";
      }
      if (!inputData.mobile.trim()) {
        validErrors.mobile = "Mobile no. is required";
      } else if (!/^\+?[1-9][0-9]{7,14}$/.test(inputData.mobile)) {
          validErrors.mobile = "Mobile no. is invalid";
      }
      
      if (!inputData.parentMobile.trim()) {
      validErrors.parentMobile = "Mobile no. is required";
      } else if (!/^\+?[1-9][0-9]{7,14}$/.test(inputData.parentMobile)) {
        validErrors.parentMobile = "Mobile no. is invalid";
      }
      if (!inputData.email.trim()) {
        validErrors.email = "Please enter email";
      } else if (!/\S+@\S+\.\S+/.test(inputData.email)) {
        validErrors.email = "Please enter a valid email address";
      }
      }
      else if (step === 3) {
        // Validation for Step 3 fields
        if (!inputData.school.trim()) {
          validErrors.school = "School Name is required";
        }
        if (!inputData.board.trim()) {
          validErrors.board = "Board is required";
        }
        if (!inputData.passingyear.trim()) {
          validErrors.passingyear = "Passing year is required";
        }
        if (!inputData.subject.trim()) {
          validErrors.subject = "select subject";
        }
        if (!inputData.percentage.trim()) {
          validErrors.percentage = "Percentage is required (%)";
        }
        if (!inputData.tenthMarksheet.trim()) {
          validErrors.tenthMarksheet = "*Uplaod Marksheet";
        }
    
        //12th details
        if (!inputData.collegeName.trim()) {
          validErrors.collegeName = "College Name is required";
        }
        if (!inputData.collegeBoard.trim()) {
          validErrors.collegeBoard = "Board is required";
        }
        if (!inputData.collegePassingYear.trim()) {
          validErrors.collegePassingYear = "Passing year is required";
        }
        if (!inputData.collegeSubject.trim()) {
          validErrors.collegeSubject = "select subject";
        }
        if (!inputData.collegePercentage.trim()) {
          validErrors.collegePercentage = "Percentage is required (%)";
        }
        if (!inputData.twelfthMarksheet.trim()) {
          validErrors.twelfthMarksheet = "*Uplaod Marksheet";
        }
      }

    if (Object.keys(validErrors).length === 0) {
      // Proceed to the next step only if there are no errors
      setValidErrors({});
      setStep(newStep);
    } else {
      // If there are errors, display them
      setValidErrors(validErrors);
    }
  };
  //next step function
  const handleNextStep = (e) => {
    e.preventDefault();
    // setStep(step + 1);

    console.log("next step");
    console.log(inputData);
    // const errors = validateForm(inputData);
    //     if (Object.keys(errors).length === 0) {
    //         // Form submission logic here
    //         console.log("Form submitted successfully!");
    //         setStep(step + 1);
    //     } else {
    //         setErrors(errors);
    //     }
    // const isValid = validateForm();
    // if (isValid) {
    //   // Proceed to the next step
    //   alert("Next Step");
    //   // For example:
    //   setStep(step + 1);
    // } else {
    //   // Form has errors, do not proceed
    // }

    const validErrors = {};
    // Validation logic to check if all fields are filled
    if (!inputData.studentName.trim()) {
      validErrors.studentName = "Please enter student name";
    }
    if (!inputData.studentFather.trim()) {
      validErrors.studentFather = "Please enter father's name";
    }
    if (!inputData.dob) {
      validErrors.dob = "Please select date of birth";
    }
    if (!inputData.gender) {
      validErrors.gender = "Please select gender";
    }
    if (!inputData.country || inputData.country === "NaN") {
      validErrors.country = "Please select country";
    }

    else if (step === 2) {
      if (!inputData.address.trim()) {
        validErrors.address = "Please enter address";
      }
      if (!inputData.city.trim()) {
        validErrors.city = "Please enter city/town";
      }
      if (!inputData.mobile.trim()) {
        validErrors.mobile = "Mobile no. is required";
      } else if (!/^\+?[1-9][0-9]{7,14}$/.test(inputData.mobile)) {
          validErrors.mobile = "Mobile no. is invalid";
      }
      
      if (!inputData.parentMobile.trim()) {
      validErrors.parentMobile = "Mobile no. is required";
      } else if (!/^\+?[1-9][0-9]{7,14}$/.test(inputData.parentMobile)) {
        validErrors.parentMobile = "Mobile no. is invalid";
      }

      if (!inputData.email.trim()) {
        validErrors.email = "Please enter email";
      } else if (!/\S+@\S+\.\S+/.test(inputData.email)) {
        validErrors.email = "Please enter a valid email address";
      }
    }

    else if (step === 3){
      if (!inputData.school.trim()) {
        validErrors.school = "School Name is required";
      }
      if (!inputData.board.trim()) {
        validErrors.board = "Board is required";
      } 
      if (!inputData.passingyear.trim()) {
        validErrors.passingyear = "Passing year is required";
      } 
      if (!inputData.subject.trim()) {
        validErrors.subject = "select subject";
      }
      if (!inputData.percentage.trim()) {
        validErrors.percentage = "Percentage is required (%)";
      }
      if (!inputData.tenthMarksheet.trim()) {
        validErrors.tenthMarksheet = "*Uplaod Marksheet";
      }
  
      //12th details
      if (!inputData.collegeName.trim()) {
        validErrors.collegeName = "College Name is required";
      }
      if (!inputData.collegeBoard.trim()) {
        validErrors.collegeBoard = "Board is required";
      }
      if (!inputData.collegePassingYear.trim()) {
        validErrors.collegePassingYear = "Passing year is required";
      }
      if (!inputData.collegeSubject.trim()) {
        validErrors.collegeSubject = "select subject";
      }
      if (!inputData.collegePercentage.trim()) {
        validErrors.collegePercentage = "Percentage is required (%)";
      }
      if (!inputData.twelfthMarksheet.trim()) {
        validErrors.twelfthMarksheet = "*Uplaod Marksheet";
      }
    }

    if (Object.keys(validErrors).length === 0) {
      // Proceed to next step only if there are no errors
      setValidErrors({});
      setStep(step + 1);
    } else {
      // If there are errors, display them
      setValidErrors(validErrors);
    }



  };

  // const validateForm = () => {
  //   let validErrors = {};
  //   let isValid = true;

  //   // Validation for studentName
  //   if (!inputData.studentName.trim()) {
  //     validErrors.studentName = "Student name is required";
  //     isValid = false;
  //   }

  //   // Validation for studentFather
  //   if (!inputData.studentFather.trim()) {
  //     validErrors.studentFather = "Father's name is required";
  //     isValid = false;
  //   }

  //   // Validation for dob
  //   if (!inputData.dob) {
  //     validErrors.dob = "Date of birth is required";
  //     isValid = false;
  //   }

  //   // Validation for gender
  //   if (!inputData.gender) {
  //     validErrors.gender = "Gender is required";
  //     isValid = false;
  //   }

  //   // Validation for country
  //   if (!inputData.country === "NaN" || inputData.country === "") {
  //     validErrors.country = "Please select a country";
  //     isValid = false;
  //   }

  //   if (!inputData.address.trim()) {
  //     validErrors.address = "Address is required";
  //     isValid = false;
  //   }
  //   if (!inputData.city.trim()) {
  //     validErrors.city = "city's name is required";
  //     isValid = false;
  //   }

  //   if (!inputData.mobile.trim() === "") {
  //     validErrors.mobile = "Mobile no. is required";
  //     isValid = false;
  //   } else if (!/^\+?[1-9][0-9]{7,14}$/.test(inputData.mobile)) {
  //     validErrors.mobile = "Mobile no. is invalid";
  //   }

  //   if (!inputData.parentMobile.trim() === "") {
  //     validErrors.parentMobile = "Mobile no. is required";
  //     isValid = false;
  //   } else if (!/^\+?[1-9][0-9]{7,14}$/.test(inputData.parentMobile)) {
  //     validErrors.parentMobile = "Mobile no. is invalid";
  //   }

  //   if (!inputData.email.trim() === "") {
  //     validErrors.email = "email is required";
  //     isValid = false;
  //   } else if (!/\S+@\S+\.\S+/.test(inputData.email)) {
  //     validErrors.email = "Email is invalid";
  //   }

  //   if (!inputData.school.trim()) {
  //     validErrors.school = "School Name is required";
  //     isValid = false;
  //   }

  //   setValidErrors(validErrors);
  //   return isValid;
  // };

  //back step function
  const handlePrevStep = () => {
    setStep(step - 1);

    console.log("back step");
  };

  //Form Fields handling
  const handleChange = (event) => {
    const { name, value } = event.target;
    // setInputData({...inputData, [name] : value})
    // console.log(inputData)
    // newData[event.target.id] = event.target.value;

    // const newData = { ...inputData };
    // newData[event.target.name] = event.target.value;
    // setInputData(newData);
    // console.log(newData);

    const validate =
      name === "mobile"
        ? value.replace(/[^0-9]/g, "").substr(0, 10)
        : value && name === "parentMobile"
        ? value.replace(/[^0-9]/g, "").substr(0, 10)
        : value && name === "studentName"
        ? value.replace(/[^a-zA-Z\s]/g, "").substr(0, 40)
        : value && name === "studentFather"
        ? value.replace(/[^a-zA-Z\s]/g, "").substr(0, 40)
        : value;

    setInputData({
      ...inputData,
      [name]: validate,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //Select classes side
  // const handleClassChange = (event) => {
  //   setSelectClass(event.target.value);
  // };

  // const renderLabel = () => {
  //   switch (selectClass) {
  //     case "10th":
  //       return (
  //         <>
  //           <div className="row">
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label>School Name *</label>
  //                 <input
  //                   class="form-control"
  //                   type="text"
  //                   name="school"
  //                   placeholder=""
  //                   id="school"
  //                   onChange={handleChange}
  //                   value={inputData.school}
  //                 />
  //               </div>
  //               {validErrors.school && (
  //                 <span style={{ color: "red" }}>{validErrors.school}</span>
  //               )}
  //             </div>
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label>Board *</label>
  //                 <input
  //                   class="form-control"
  //                   type="text"
  //                   name="board"
  //                   id="board"
  //                   placeholder=""
  //                   onChange={handleChange}
  //                   value={inputData.board}
  //                 />
  //               </div>
  //             </div>
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label htmlFor="">Passing Year *</label>
  //                 <input
  //                   type="text"
  //                   name="passingyear"
  //                   id="passingyear"
  //                   placeholder=""
  //                   className="form-control"
  //                   onChange={handleChange}
  //                   value={inputData.passingyear}
  //                 />
  //               </div>
  //             </div>
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label>Subject *</label>
  //                 <select
  //                   name="subject"
  //                   id="subject"
  //                   className="form-control"
  //                   onChange={handleChange}
  //                   value={inputData.subject}
  //                 >
  //                   <option value="other" selected>
  //                     --select--
  //                   </option>
  //                   <option value="Math">Mathematics</option>
  //                   <option value="Science">Science</option>
  //                 </select>
  //               </div>
  //             </div>
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label>Percentage *</label>
  //                 <input
  //                   class="form-control"
  //                   type="text"
  //                   name="percentage"
  //                   placeholder=""
  //                   id="percentage"
  //                   onChange={handleChange}
  //                   value={inputData.percentage}
  //                 />
  //               </div>
  //             </div>
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label>10th Marksheet *</label>
  //                 <input
  //                   class="form-control"
  //                   type="file"
  //                   name="tenthMarksheet"
  //                   placeholder=""
  //                   id="tenthMarksheet"
  //                   onChange={handleChange}
  //                   value={inputData.tenthMarksheet}
  //                 />
  //               </div>
  //             </div>
  //             <div className="col-md-6 add-btn-main">
  //               <div className="form-group">
  //                 <button
  //                   type="submit"
  //                   onClick={handleAddCourse}
  //                   className="mt-4 text-align-center Add-btn"
  //                 >
  //                   <FaPlus /> ADD Class
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //           {/* <div className='col-md-6'>
  //                       <button type="button" className="default-btn Add-btn" onClick={handleAddCourse} value={selectClass} onChange={handleClassChange} id='inline-btn'>Add Class</button>
  //                   </div> */}
  //         </>
  //       );
  //     case "12th":
  //       return (
  //         <>
  //           <div className="row">
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label>College Name *</label>
  //                 <input
  //                   class="form-control"
  //                   type="text"
  //                   name="collegeName"
  //                   placeholder=""
  //                   id="collegeName"
  //                   onChange={handleChange}
  //                   value={inputData.collegeName}
  //                 />
  //               </div>
  //             </div>
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label>Board *</label>
  //                 <input
  //                   class="form-control"
  //                   type="text"
  //                   name="collegeBoard"
  //                   placeholder=""
  //                   id="collegeBoard"
  //                   onChange={handleChange}
  //                   value={inputData.collegeBoard}
  //                 />
  //               </div>
  //             </div>
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label htmlFor="">Passing Year *</label>
  //                 <input
  //                   type="text"
  //                   name="collegePassingYear"
  //                   id="collegePassingYear"
  //                   placeholder=""
  //                   className="form-control"
  //                   onChange={handleChange}
  //                   value={inputData.collegePassingYear}
  //                 />
  //               </div>
  //             </div>
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label>Subject *</label>
  //                 <select
  //                   name="collegeSubject"
  //                   id="collegeSubject"
  //                   className="form-control"
  //                   onChange={handleChange}
  //                   value={inputData.collegeSubject}
  //                 >
  //                   <option value="NaN" selected>
  //                     --select--
  //                   </option>
  //                   <option value="PCM">Physics/Chemistry/Math</option>
  //                   <option value="chem">Chemistry</option>
  //                   <option value="math">Mathematics</option>
  //                 </select>
  //               </div>
  //             </div>
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label>Percentage *</label>
  //                 <input
  //                   class="form-control"
  //                   type="text"
  //                   name="collegePercentage"
  //                   id="collegePercentage"
  //                   placeholder=""
  //                   onChange={handleChange}
  //                   value={inputData.collegePercentage}
  //                 />
  //               </div>
  //             </div>
  //             <div className="col-md-6 add-btn-main">
  //               <div className="form-group">
  //                 <button
  //                   type="submit"
  //                   onClick={handleAddCourse}
  //                   className="mt-4 text-align-center Add-btn"
  //                 >
  //                   <FaPlus /> ADD Class
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </>
  //       );
  //     case "UG":
  //       return (
  //         <>
  //           <div className="row">
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label>College Name *</label>
  //                 <input
  //                   class="form-control"
  //                   type="text"
  //                   name="name"
  //                   placeholder=""
  //                 />
  //               </div>
  //             </div>
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label>University *</label>
  //                 <input
  //                   class="form-control"
  //                   type="text"
  //                   name="name"
  //                   placeholder=""
  //                 />
  //               </div>
  //             </div>
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label htmlFor="">Passing Year *</label>
  //                 <input
  //                   type="text"
  //                   name=""
  //                   id=""
  //                   placeholder=""
  //                   className="form-control"
  //                 />
  //               </div>
  //             </div>
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label>Subject *</label>
  //                 {/* <select name="" id="" className='form-control'>
  //                               <option value="" selected>--select--</option>
  //                               <option value="">Physics</option>
  //                               <option value="">Chemistry</option>
  //                               <option value="">Mathematics</option>
  //                           </select> */}
  //               </div>
  //             </div>
  //             <div class="col-md-6">
  //               <div class="form-group">
  //                 <label>Percentage *</label>
  //                 <input
  //                   class="form-control"
  //                   type="text"
  //                   name="name"
  //                   placeholder=""
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //         </>
  //       );
  //     default:
  //       return null;
  //   }
  // };

  // const handleAddCourse = (event) => {
  //   // setSelectClass([...selectClass, { class: inputData.class, school: "", board: "", passingyear: "", subject: "", percentage: "" }]);
  //   event.preventDefault();

  //   console.log("add course");

  //   // setSelectClass(renderLabel());

  //   console.log(inputData);
  // };

  const previewForm = () => {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <div className="text-color">
                <h5>Personal Details :</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Your Name :</label>
              <input
                type="text"
                value={inputData.studentName}
                className="form-control"
              />
              {errors.studentName && (
                <span style={{ color: "red" }}>{errors.studentName}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Father Name :</label>
              <input
                type="text"
                value={inputData.studentFather}
                className="form-control"
              />
              {errors.studentFather && (
                <span style={{ color: "red" }}>{errors.studentFather}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Date of Birth :</label>
              <input
                type="text"
                value={inputData.dob}
                className="form-control"
              />
              {errors.dob && <span style={{ color: "red" }}>{errors.dob}</span>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Gender :</label>
              <input
                type="text"
                value={inputData.gender}
                className="form-control"
              />
              {errors.gender && (
                <span style={{ color: "red" }}>{errors.gender}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Country :</label>
              <input
                type="text"
                value={inputData.country}
                className="form-control"
              />
              {errors.country && (
                <span style={{ color: "red" }}>{errors.country}</span>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div className="text-color mt-4">
                <h5>Contact Details :</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Address :</label>
              <input
                type="text"
                value={inputData.address}
                className="form-control"
              />
              {errors.address && (
                <span style={{ color: "red" }}>{errors.address}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">City :</label>
              <input
                type="text"
                value={inputData.city}
                className="form-control"
              />
              {errors.city && (
                <span style={{ color: "red" }}>{errors.city}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Mobile No. :</label>
              <input
                type="text"
                value={inputData.mobile}
                className="form-control"
              />
              {errors.mobile && (
                <span style={{ color: "red" }}>{errors.mobile}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Guardian's Mobile No. :</label>
              <input
                type="text"
                value={inputData.parentMobile}
                className="form-control"
              />
              {errors.parentMobile && (
                <span style={{ color: "red" }}>{errors.parentMobile}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Email ID :</label>
              <input
                type="text"
                value={inputData.email}
                className="form-control"
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>
          </div>
          {/* 10th details */}
          <div className="col-md-12">
            <div className="form-group">
              <div className="text-color mt-4">
                <h5>10th Details :</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">School Name :</label>
              <input
                type="text"
                value={inputData.school}
                className="form-control"
              />
              {errors.school && (
                <span style={{ color: "red" }}>{errors.school}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Board :</label>
              <input
                type="text"
                value={inputData.board}
                className="form-control"
              />
              {errors.board && (
                <span style={{ color: "red" }}>{errors.board}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Passing Year :</label>
              <input
                type="text"
                value={inputData.passingyear}
                className="form-control"
              />
              {errors.passingyear && (
                <span style={{ color: "red" }}>{errors.passingyear}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Subject :</label>
              <input
                type="text"
                value={inputData.subject}
                className="form-control"
              />
              {errors.subject && (
                <span style={{ color: "red" }}>{errors.subject}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Percentage :</label>
              <input
                type="text"
                value={inputData.percentage}
                className="form-control"
              />
              {errors.percentage && (
                <span style={{ color: "red" }}>{errors.percentage}</span>
              )}
            </div>
          </div>

          {/* 12th preview form */}

          <div className="col-md-12">
            <div className="form-group">
              <div className="text-color mt-4">
                <h5>12th Details :</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">College Name :</label>
              <input
                type="text"
                value={inputData.collegeName}
                className="form-control"
              />
              {errors.collegeName && (
                <span style={{ color: "red" }}>{errors.collegeName}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Board :</label>
              <input
                type="text"
                value={inputData.collegeBoard}
                className="form-control"
              />
              {errors.collegeBoard && (
                <span style={{ color: "red" }}>{errors.collegeBoard}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Passing year :</label>
              <input
                type="text"
                value={inputData.collegePassingYear}
                className="form-control"
              />
              {errors.collegePassingYear && (
                <span style={{ color: "red" }}>
                  {errors.collegePassingYear}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Subject :</label>
              <input
                type="text"
                value={inputData.collegeSubject}
                className="form-control"
              />
              {errors.collegeSubject && (
                <span style={{ color: "red" }}>{errors.collegeSubject}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Percentage :</label>
              <input
                type="text"
                value={inputData.collegePercentage}
                className="form-control"
              />
              {errors.collegePercentage && (
                <span style={{ color: "red" }}>{errors.collegePercentage}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">12th Marksheet :</label>
              <input
                type="file"
                value={inputData.twelfthMarksheet}
                className="form-control"
              />
              {errors.twelfthMarksheet && (
                <span style={{ color: "red" }}>{errors.twelfthMarksheet}</span>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <button
              type="submit"
              onClick={downloadPreview}
              className="btn btn-success mt-4 text-align-center"
            >
              <FaCloudDownloadAlt /> Download
            </button>
          </div>
        </div>
        {/* <label><strong>Name:</strong> {inputData.studentName}</label>  */}
      </div>
    );
  };

  const downloadPreview = () => {
    const content = `Name: ${inputData.studentName}\nEmail: ${inputData.email}\ndob: ${inputData.dob}\n`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    // a.download = 'form_preview.txt';
    a.download = `${inputData.studentName}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const fullPayload = {
    courseDetails: {
      courseName: "Computer Science", // This could be dynamic if you have a field for selecting course name
      sessionoryear: "2023-09-15", // This could also be dynamic if you have a field for selecting session year
    },
    personalDetails: {
      name: inputData.studentName,
      dateOfBirth: inputData.dob,
      gender: inputData.gender,
      nationality: inputData.country,
    },
    contactDetails: {
      correspondenceAddress: inputData.address,
      mobileNumber: inputData.mobile,
      emailId: inputData.email,
      fatherName: inputData.studentFather,
    },
    educationalDetails: [
      {
        tenth: {
          nameOfSchool: inputData.school,
          board: inputData.board,
          yearOfPassing: inputData.passingyear,
          subjects: [inputData.subject], // Assuming only one subject is selected, adjust as needed
          percentage: parseFloat(inputData.percentage), // Convert percentage to float
        },
        twelfth: {
          nameOfCollege: inputData.collegeName,
          board: inputData.collegeBoard,
          yearOfPassing: inputData.collegePassingYear,
          subjects: [inputData.collegeSubject], // Assuming only one subject is selected, adjust as needed
          percentage: parseFloat(inputData.collegePercentage), // Convert percentage to float
        },
        // Assuming there is no graduation data from the form
      },
    ],
  };

  const handlePreviewSubmit = (e) => {
    e.preventDefault();
    // console.log(newData);
    // axios.post(`${Base_URL}student/create`, {
    //   fullPayload,
    // });

    console.log("Submitted");
    console.log(inputData);

    let valid = true;
    const newErrors = { ...errors };

    //personal details
    if (inputData.studentName.trim() === "") {
      newErrors.studentName = "Name is required";
      valid = false;
    } else {
      newErrors.studentName = "";
    }
    if (inputData.studentFather.trim() === "") {
      newErrors.studentFather = "Father Name is required";
      valid = false;
    } else {
      newErrors.studentFather = "";
    }

    if (inputData.dob.trim() === "") {
      newErrors.dob = "Date Of Birth is required";
      valid = false;
    } else {
      newErrors.dob = "";
    }

    if (inputData.gender.trim() === "") {
      newErrors.gender = "Gender is required";
      valid = false;
    } else {
      newErrors.gender = "";
    }

    if (inputData.country.trim() === "") {
      newErrors.country = "Country is required";
      valid = false;
    } else {
      newErrors.country = "";
    }

    //contact details
    if (inputData.address.trim() === "") {
      newErrors.address = "Address is required";
      valid = false;
    } else {
      newErrors.address = "";
    }

    if (inputData.city.trim() === "") {
      newErrors.city = "City is required";
      valid = false;
    } else {
      newErrors.city = "";
    }

    // if (inputData.mobile.trim() === "") {
    //   newErrors.mobile = "Mobile no. is required";
    //   valid = false;
    // } else {
    //   newErrors.mobile = "";
    // }

    if (inputData.mobile.trim() === "") {
      newErrors.mobile = "Mobile no. is required";
      valid = false;
    } else if (!/^\+?[1-9][0-9]{7,14}$/.test(inputData.mobile)) {
      newErrors.mobile = "Mobile no. is invalid";
      valid = false;
    } else{
      newErrors.mobile = "";
    }

    // if (inputData.parentMobile.trim() === "") {
    //   newErrors.parentMobile = "Mobile no. is required";
    //   valid = false;
    // } else {
    //   newErrors.parentMobile = "";
    // }

    if (inputData.parentMobile.trim() === "") {
      newErrors.parentMobile = "Mobile no. is required";
      valid = false;
    } else if (!/^\+?[1-9][0-9]{7,14}$/.test(inputData.parentMobile)) {
      newErrors.parentMobile = "Mobile no. is invalid";
      valid = false;
    } else{
      newErrors.parentMobile = "";
    }

    if(inputData.email.trim() === ""){
      newErrors.email = "email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(inputData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    } else{
      newErrors.email = "";
    }

    // if (inputData.email.trim() === "") {
    //   newErrors.email = "Email is required";
    //   valid = false;
    // } else {
    //   newErrors.email = "";
    // }

    //10th details
    if (inputData.school.trim() === "") {
      newErrors.school = "School Name is required";
      valid = false;
    } else {
      newErrors.school = "";
    }
    if (inputData.board.trim() === "") {
      newErrors.board = "Board is required";
      valid = false;
    } else {
      newErrors.board = "";
    }
    if (inputData.passingyear.trim() === "") {
      newErrors.passingyear = "Passing year is required";
      valid = false;
    } else {
      newErrors.passingyear = "";
    }
    if (inputData.subject.trim() === "") {
      newErrors.subject = "select subject";
      valid = false;
    } else {
      newErrors.subject = "";
    }
    if (inputData.percentage.trim() === "") {
      newErrors.percentage = "Percentage is required (%)";
      valid = false;
    } else {
      newErrors.percentage = "";
    }
    if (inputData.tenthMarksheet.trim() === "") {
      newErrors.tenthMarksheet = "Uplaod Marksheet";
      valid = false;
    } else {
      newErrors.tenthMarksheet = "";
    }

    //12th details
    if (inputData.collegeName.trim() === "") {
      newErrors.collegeName = "College Name is required";
      valid = false;
    } else {
      newErrors.collegeName = "";
    }
    if (inputData.collegeBoard.trim() === "") {
      newErrors.collegeBoard = "Board is required";
      valid = false;
    } else {
      newErrors.collegeBoard = "";
    }
    if (inputData.collegePassingYear.trim() === "") {
      newErrors.collegePassingYear = "Passing year is required";
      valid = false;
    } else {
      newErrors.collegePassingYear = "";
    }
    if (inputData.collegeSubject.trim() === "") {
      newErrors.collegeSubject = "select subject";
      valid = false;
    } else {
      newErrors.collegeSubject = "";
    }
    if (inputData.collegePercentage.trim() === "") {
      newErrors.collegePercentage = "Percentage is required (%)";
      valid = false;
    } else {
      newErrors.collegePercentage = "";
    }
    if (inputData.twelfthMarksheet.trim() === "") {
      newErrors.twelfthMarksheet = "Upload Marksheet";
      valid = false;
    } else {
      newErrors.twelfthMarksheet = "";
    }

    setErrors(newErrors);

    // If form is valid, process the data (e.g., send it to the server)
    if (valid) {
      console.log("Form Preview data:", inputData);
      Swal.fire({
        title: "success",
        text: "Student Data submitted successfully",
        icon: "success",
      });

      axios
        .post(`${Base_URL}student/create`, {
          fullPayload,
        })
        .then((res) => {
          console.log(res);
        });

      //   setInputData({
      //     studentName: '',
      //     email: ''
      //     });
    } else {
      Swal.fire({
        title: "error",
        text: "All Fields are required!!",
        icon: "error",
      });
    }
    // else {
    //     // If form is not valid, display a general error message
    //     setErrors('Please fill all the fields.');
    // }
  };

  return (
    <section className="signup-step-container">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <div className="wizard">
              <div className="wizard-inner">
                <div className="connecting-line"></div>
                <ul className="nav nav-tabs" role="tablist">
                  <li
                    role="presentation"
                    className={step === 1 ? "active" : "disabled"}
                  >
                    <NavLink
                      to=""
                      data-toggle="tab"
                      aria-controls="step1"
                      role="tab"
                      aria-expanded="true"
                      onClick={() => handleStepChange(1)}
                    >
                      <span className="round-tab">1</span> <i>Step 1</i>
                    </NavLink>
                  </li>
                  <li
                    role="presentation"
                    className={step === 2 ? "active" : "disabled"}
                  >
                    <NavLink
                      to=""
                      data-toggle="tab"
                      aria-controls="step2"
                      role="tab"
                      aria-expanded="false"
                      onClick={() => handleStepChange(2)}
                    >
                      <span className="round-tab">2</span> <i>Step 2</i>
                    </NavLink>
                  </li>
                  <li
                    role="presentation"
                    className={step === 3 ? "active" : "disabled"}
                  >
                    <NavLink
                      to=""
                      data-toggle="tab"
                      aria-controls="step3"
                      role="tab"
                      onClick={() => handleStepChange(3)}
                    >
                      <span className="round-tab">3</span> <i>Step 3</i>
                    </NavLink>
                  </li>
                  <li
                    role="presentation"
                    className={step === 4 ? "active" : "disabled"}
                  >
                    <NavLink
                      to=""
                      data-toggle="tab"
                      aria-controls="step4"
                      role="tab"
                      onClick={() => handleStepChange(4)}
                    >
                      <span className="round-tab">4</span> <i>Step 4</i>
                    </NavLink>
                  </li>
                </ul>
              </div>

              <form action="" className="login-box" onSubmit={handleSubmit}>
                <div className="tab-content" id="main_form">
                  <div
                    className={`tab-pane ${step === 1 ? "active" : ""}`}
                    role="tabpanel"
                    id="step1"
                  >
                    {/* <h4 className="text-center">Step 1</h4> */}
                    <form action="" onSubmit={handleNextStep}>
                      <h4>Student Personal Details</h4>
                      <div className="row">
                        {/* Step 1 form fields */}
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Enter Your Name *</label>
                            <input
                              class="form-control"
                              type="text"
                              name="studentName"
                              id="studentName"
                              placeholder=""
                              onChange={handleChange}
                              value={inputData.studentName}
                              required
                            />
                            {validErrors.studentName && (
                              <span style={{ color: "red" }}>
                                {validErrors.studentName}
                              </span>
                            )}
                            {/* <p className='text-danger' ref={handlestudentName}></p> */}
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Enter Father Name *</label>
                            <input
                              class="form-control"
                              type="text"
                              name="studentFather"
                              id="studentFather"
                              placeholder=""
                              onChange={handleChange}
                              value={inputData.studentFather}
                              required
                            />
                            {validErrors.studentFather && (
                              <span style={{ color: "red" }}>
                                {validErrors.studentFather}
                              </span>
                            )}
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>DOB *</label>
                            <input
                              class="form-control"
                              type="date"
                              name="dob"
                              id="dob"
                              placeholder=""
                              onChange={handleChange}
                              value={inputData.dob}
                            />
                          </div>
                          {validErrors.dob && (
                            <span style={{ color: "red" }}>
                              {validErrors.dob}
                            </span>
                          )}
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Gender *</label>
                            <div className="gender-input d-flex justify-content-space-between">
                              <div>
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="gender"
                                  placeholder=""
                                  id="male"
                                  onChange={handleChange}
                                  value="male"
                                  checked={inputData === "male"}
                                />
                                <label
                                  htmlFor="male"
                                  className="form-check-label"
                                >
                                  Male
                                </label>
                              </div>
                              <div>
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="gender"
                                  placeholder=""
                                  id="female"
                                  onChange={handleChange}
                                  value="female"
                                  checked={inputData === "female"}
                                />
                                <label htmlFor="female">Female</label>
                              </div>
                              <div>
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="gender"
                                  placeholder=""
                                  id="other"
                                  onChange={handleChange}
                                  value="other"
                                  checked={inputData === "other"}
                                />
                                <label htmlFor="other">Other</label>
                              </div>
                            </div>
                          </div>
                          {validErrors.gender && (
                            <span style={{ color: "red" }}>
                              {validErrors.gender}
                            </span>
                          )}
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Country *</label>
                            <select
                              name="country"
                              class="form-control"
                              id="country"
                              onChange={handleChange}
                              value={inputData.country}
                            >
                              <option
                                value="NaN"
                                selected="selected"
                                className="option-grp"
                              >
                                -- select --
                              </option>
                              <option value="INDIA" className="option-grp">
                                India
                              </option>
                              <option value="US" className="option-grp">
                                USA
                              </option>
                              <option value="RS" className="option-grp">
                                Russia
                              </option>
                              <option value="AS" className="option-grp">
                                Australia
                              </option>
                              <option value="NN" className="option-grp">
                                Northern Mariana Islands
                              </option>
                              <option value="NO" className="option-grp">
                                Norway
                              </option>
                            </select>
                          </div>
                          {validErrors.country && (
                            <span style={{ color: "red" }}>
                              {validErrors.country}
                            </span>
                          )}
                        </div>
                      </div>
                      <ul className="list-inline pull-right">
                        <li>
                          <button
                            type="button"
                            id="conti-btn inline-btn"
                            className="default-btn next-step"
                            onClick={handleNextStep}
                          >
                            Continue to next step
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                  <div
                    className={`tab-pane ${step === 2 ? "active" : ""}`}
                    role="tabpanel"
                    id="step2"
                  >
                    {/* <h4 className="text-center">Step 2</h4> */}
                    <h4>Contact Details</h4>
                    <div className="row">
                      {/* Step 2 form fields */}
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Address *</label>
                          <input
                            class="form-control"
                            type="text"
                            name="address"
                            placeholder=""
                            id="address"
                            onChange={handleChange}
                            value={inputData.address}
                          />
                        </div>
                        {validErrors.address && (
                          <span style={{ color: "red" }}>
                            {validErrors.address}
                          </span>
                        )}
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label>City / Town *</label>
                          <input
                            class="form-control"
                            type="text"
                            name="city"
                            id="city"
                            placeholder=""
                            onChange={handleChange}
                            value={inputData.city}
                          />
                        </div>
                        {validErrors.city && (
                          <span style={{ color: "red" }}>
                            {validErrors.city}
                          </span>
                        )}
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Mobile No. *</label>
                          <input
                            className="form-control"
                            type="text"
                            name="mobile"
                            id="mobile"
                            onChange={handleChange}
                            value={inputData.mobile}
                          />
                        </div>
                        {validErrors.mobile && (
                          <span style={{ color: "red" }}>
                            {validErrors.mobile}
                          </span>
                        )}
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Guardian Mobile No. *</label>
                          <input
                            className="form-control"
                            type="text"
                            name="parentMobile"
                            id="mobile"
                            onChange={handleChange}
                            value={inputData.parentMobile}
                          />
                        </div>
                        {validErrors.parentMobile && (
                          <span style={{ color: "red" }}>
                            {validErrors.parentMobile}
                          </span>
                        )}
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Email ID *</label>
                          <input
                            class="form-control"
                            type="text"
                            name="email"
                            id="email"
                            placeholder=""
                            onChange={handleChange}
                            value={inputData.email}
                          />
                        </div>
                        {validErrors.email && (
                          <span style={{ color: "red" }}>
                            {validErrors.email}
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="list-inline pull-right">
                      <li>
                        <button
                          type="button"
                          id="inline-btn"
                          className="default-btn prev-step"
                          onClick={handlePrevStep}
                        >
                          Back
                        </button>
                      </li>
                      {/* <li><button type="button" id='inline-btn' className="default-btn next-step skip-btn" onClick={handleNextStep}>Skip</button></li> */}
                      <li>
                        <button
                          type="button"
                          id="inline-btn"
                          className="default-btn next-step"
                          onClick={handleNextStep}
                        >
                          Continue
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane ${step === 3 ? "active" : ""}`}
                    role="tabpanel"
                    id="step3"
                  >
                    {/* <h4 className="text-center">Step 3</h4> */}
                    <h4 className="">Educational Details</h4>
                    <div className="row">
                      {/* Step 3 form fields */}
                      {/* <div class="col-md-6">
                        <div class="form-group">
                          <label>Select Class *</label>
                          <select
                            name="class"
                            id="class"
                            className="form-control"
                            value={selectClass}
                            onChange={handleClassChange}
                          >
                            <option value="" selected="selected">
                              -- select --
                            </option>
                            <option value="10th" className="option-grp">
                              10th SSC
                            </option>
                            <option value="12th" className="option-grp">
                              12th HSC
                            </option>
                            <option value="UG" className="option-grp">
                              UG (Under Graduate)
                            </option>
                            <option value="PG" className="option-grp">
                              PG (Post Graduate)
                            </option>
                          </select> */}
                          {/* <button type="button" className="btn btn-primary form-control" onClick={handleAddCourse} value={selectClass} onChange={handleClassChange}>Add Class</button> */}
                        {/* </div>
                      </div> */}
                      {/* 10th information */}
                      {/* <div className="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label>School Name *</label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="school"
                                  placeholder=""
                                  id="school"
                                  onChange={handleChange}
                                  value={inputData.school}
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label>Board *</label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="board"
                                  id="board"
                                  placeholder=""
                                  onChange={handleChange}
                                  value={inputData.board}
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label htmlFor="">Passing Year *</label>
                                <input
                                  type="text"
                                  name="passingyear"
                                  id="passingyear"
                                  placeholder=""
                                  className="form-control"
                                  onChange={handleChange}
                                  value={inputData.passingyear}
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label>Subject *</label>
                                <select
                                  name="subject"
                                  id="subject"
                                  className="form-control"
                                  onChange={handleChange}
                                  value={inputData.subject}
                                >
                                  <option value="other" selected>
                                    --select--
                                  </option>
                                  <option value="Math">Mathematics</option>
                                  <option value="Science">Science</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label>Percentage *</label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="percentage"
                                  placeholder=""
                                  id="percentage"
                                  onChange={handleChange}
                                  value={inputData.percentage}
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label>10th Marksheet *</label>
                                <input
                                  class="form-control"
                                  type="file"
                                  name="tenthMarksheet"
                                  placeholder=""
                                  id="tenthMarksheet"
                                  onChange={handleChange}
                                  value={inputData.tenthMarksheet}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 add-btn-main">
                              <div className="form-group">
                                <button
                                  type="submit"
                                  onClick={handleAddCourse}
                                  className="mt-4 text-align-center Add-btn"
                                >
                                  <FaPlus /> ADD Class
                                </button>
                              </div>
                            </div>
                          </div> */}

                      <div className="row mt-5">
                        <h5 className="text-primary">10th Details</h5>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>School Name *</label>
                            <input
                              class="form-control"
                              type="text"
                              name="school"
                              placeholder=""
                              id="school"
                              onChange={handleChange}
                              value={inputData.school}
                            />
                          </div>
                          {validErrors.school && (
                            <span style={{ color: "red" }}>
                              {validErrors.school}
                            </span>
                          )}
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Board *</label>
                            <input
                              class="form-control"
                              type="text"
                              name="board"
                              id="board"
                              placeholder=""
                              onChange={handleChange}
                              value={inputData.board}
                            />
                          </div>
                          {validErrors.board && (
                            <span style={{ color: "red" }}>
                              {validErrors.board}
                            </span>
                          )}
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label htmlFor="">Passing Year *</label>
                            <input
                              type="text"
                              name="passingyear"
                              id="passingyear"
                              placeholder=""
                              className="form-control"
                              onChange={handleChange}
                              value={inputData.passingyear}
                            />
                          </div>
                          {validErrors.passingyear && (
                            <span style={{ color: "red" }}>
                              {validErrors.passingyear}
                            </span>
                          )}
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Subject *</label>
                            <select
                              name="subject"
                              id="subject"
                              className="form-control"
                              onChange={handleChange}
                              value={inputData.subject}
                            >
                              <option value="other" selected>
                                --select--
                              </option>
                              <option value="Math">Mathematics</option>
                              <option value="Science">Science</option>
                            </select>
                          </div>
                          {validErrors.subject && (
                            <span style={{ color: "red" }}>
                              {validErrors.subject}
                            </span>
                          )}
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Percentage *</label>
                            <input
                              class="form-control"
                              type="text"
                              name="percentage"
                              placeholder=""
                              id="percentage"
                              onChange={handleChange}
                              value={inputData.percentage}
                            />
                          </div>
                          {validErrors.percentage && (
                            <span style={{ color: "red" }}>
                              {validErrors.percentage}
                            </span>
                          )}
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>10th Marksheet *</label>
                            <input
                              class="form-control"
                              type="file"
                              name="tenthMarksheet"
                              placeholder=""
                              id="tenthMarksheet"
                              onChange={handleChange}
                              value={inputData.tenthMarksheet}
                            />
                          </div>
                          {validErrors.tenthMarksheet && (
                            <span style={{ color: "red" }}>
                              {validErrors.tenthMarksheet}
                            </span>
                          )}
                        </div>
                        {/* <div className="col-md-6 add-btn-main">
                          <div className="form-group">
                            <button
                              type="submit"
                              onClick={handleAddCourse}
                              className="mt-4 text-align-center Add-btn"
                            >
                              <FaPlus /> ADD Class
                            </button>
                          </div>
                        </div> */}
                      </div>

                      <div className="row mt-5">
                        <h5 className="text-primary">12th Details</h5>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>College Name *</label>
                            <input
                              class="form-control"
                              type="text"
                              name="collegeName"
                              placeholder=""
                              id="collegeName"
                              onChange={handleChange}
                              value={inputData.collegeName}
                            />
                          </div>
                          {validErrors.collegeName && (
                            <span style={{ color: "red" }}>
                              {validErrors.collegeName}
                            </span>
                          )}
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Board *</label>
                            <input
                              class="form-control"
                              type="text"
                              name="collegeBoard"
                              placeholder=""
                              id="collegeBoard"
                              onChange={handleChange}
                              value={inputData.collegeBoard}
                            />
                          </div>
                          {validErrors.collegeBoard && (
                            <span style={{ color: "red" }}>
                              {validErrors.collegeBoard}
                            </span>
                          )}
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label htmlFor="">Passing Year *</label>
                            <input
                              type="text"
                              name="collegePassingYear"
                              id="collegePassingYear"
                              placeholder=""
                              className="form-control"
                              onChange={handleChange}
                              value={inputData.collegePassingYear}
                            />
                          </div>
                          {validErrors.collegePassingYear && (
                            <span style={{ color: "red" }}>
                              {validErrors.collegePassingYear}
                            </span>
                          )}
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Subject *</label>
                            <select
                              name="collegeSubject"
                              id="collegeSubject"
                              className="form-control"
                              onChange={handleChange}
                              value={inputData.collegeSubject}
                            >
                              <option value="NaN" selected>
                                --select--
                              </option>
                              <option value="PCM">
                                Physics/Chemistry/Math
                              </option>
                              <option value="chem">Chemistry</option>
                              <option value="math">Mathematics</option>
                            </select>
                          </div>
                          {validErrors.collegeSubject && (
                            <span style={{ color: "red" }}>
                              {validErrors.collegeSubject}
                            </span>
                          )}
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Percentage *</label>
                            <input
                              class="form-control"
                              type="text"
                              name="collegePercentage"
                              id="collegePercentage"
                              placeholder=""
                              onChange={handleChange}
                              value={inputData.collegePercentage}
                            />
                          </div>
                          {validErrors.collegePercentage && (
                            <span style={{ color: "red" }}>
                              {validErrors.collegePercentage}
                            </span>
                          )}
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>12th Marksheet *</label>
                            <input
                              class="form-control"
                              type="file"
                              name="twelfthMarksheet"
                              placeholder="select file"
                              id="twelfthMarksheet"
                              onChange={handleChange}
                              value={inputData.twelfthMarksheet}
                            />
                          </div>
                          {validErrors.twelfthMarksheet && (
                            <span style={{ color: "red" }}>
                              {validErrors.twelfthMarksheet}
                            </span>
                          )}
                        </div>
                        {/* <div className="col-md-6 add-btn-main">
                          <div className="form-group">
                            <button
                              type="submit"
                              onClick={handleAddCourse}
                              className="mt-4 text-align-center Add-btn"
                            >
                              <FaPlus /> ADD Class
                            </button>
                          </div>
                        </div> */}
                      </div>

                      {/* {selectClass && (
                        <>
                          {renderLabel()} */}
                      {/* <div className='col-md-6 add-btn-main'>
                                                            <button type="button" className="Add-btn" onClick={handleAddCourse}>Add Class</button>
                                                            </div> */}

                      {/* <div className="col-md-6 add-btn-main">
                            <div className="form-group">
                              <button
                                type="submit"
                                onClick={handleAddCourse}
                                className="mt-4 text-align-center Add-btn"
                              >
                                <FaPlus /> ADD Class
                              </button>
                            </div>
                          </div> */}
                      {/* </> */}
                      {/* )} */}
                      {/* <div class="col-md-6">
                                            <div class="form-group">
                                                <label>School / College Name *</label> 
                                                <input class="form-control" type="text" name="name" placeholder=""/> 
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Board *</label> 
                                                <input class="form-control" type="text" name="name" placeholder=""/> 
                                            </div>
                                        </div>
                                    <div class="col-md-6">
                                        <div class="form-group"> */}
                      {/* <label>Information</label> 
                                            <div class="custom-file">
                                              <input type="file" class="custom-file-input" id="customFile"/>
                                              <label class="custom-file-label" for="customFile">Select file</label>
                                            </div> */}
                      {/* <label htmlFor="">Passing Year *</label>
                                            <input type="text" name="" id="" placeholder='' className='form-control'/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Subject *</label> 
                                            <select name="" id="" className='form-control'>
                                                <option value="Math">Mathematics</option>
                                                <option value="Sci">Science</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Percentage *</label> 
                                            <input class="form-control" type="text" name="name" placeholder=""/> 
                                        </div>
                                    </div> */}
                    </div>
                    {/* <div className='col-md-6'>
                                        <button type="button" className="btn btn-primary form-control" onClick={handleAddCourse} value={selectClass} onChange={handleClassChange}>Add Class</button>
                                        </div> */}

                    <ul className="list-inline pull-right">
                      <li>
                        <button
                          type="button"
                          id="inline-btn"
                          className="default-btn prev-step"
                          onClick={handlePrevStep}
                        >
                          Back
                        </button>
                      </li>
                      {/* <li><button type="button" id='inline-btn' className="default-btn next-step skip-btn" onClick={handleNextStep}>Skip</button></li> */}
                      <li>
                        <button
                          type="button"
                          id="inline-btn"
                          className="default-btn next-step"
                          onClick={handleNextStep}
                        >
                          Continue
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane ${step === 4 ? "active" : ""}`}
                    role="tabpanel"
                    id="step4"
                  >
                    {/* <h4 className="text-center">Step 4</h4> */}
                    <h4 className="text-danger">Check Before Submit</h4>
                    <div className="all-info-container">
                      {/* Step 4 content */}
                      <form action="" onSubmit={handlePreviewSubmit}>
                        {previewForm()}
                      </form>
                    </div>
                    <ul className="list-inline pull-right">
                      <li>
                        <button
                          type="button"
                          id="inline-btn"
                          className="default-btn prev-step"
                          onClick={handlePrevStep}
                        >
                          Back
                        </button>
                      </li>
                      <li>
                        <button
                          type="submit"
                          id="inline-btn"
                          className="default-btn next-step"
                          onClick={handlePreviewSubmit}
                        >
                          Submit
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentForm;
