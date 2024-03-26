import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Assets/Styles/StudentsTable.css";
import Base_URL from "../Common/Apis";
import Loader from "../Components/Loader";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null); // Track the selected student
  const [modalOpen, setModalOpen] = useState(false); // Modal visibility state
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Base_URL}student/getstudent`);
        if (response.data.success) {
          setStudents(response.data.result);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Function to handle opening the modal and setting the selected student
  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setSelectedStudent(null);
    setModalOpen(false);
  };
  const filteredStudents = students.filter((student) => {
    const studentName = student.personalDetails.name.toLowerCase();
    const batchName = student.courseDetails.courseName.toLowerCase();
    const query = searchQuery.toLowerCase();
    return studentName.includes(query) || batchName.includes(query);
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <h2 className="text-center mb-4">Students</h2>
          <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name or batch name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear
                  </button>
                </div>
              </div>
          <div className="row">
            {/* Display table on large devices */}
            <div className="col-lg-12 d-none d-lg-block">
              <table className="table table-striped table-bordered text-center custom-table">
                <thead className="thead-dark">
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile Number</th>
                    <th>Gender</th>
                    <th>Batch Name</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, index) => (
                    <tr key={index}>
                      <td>{student.personalDetails.name.split(" ")[0]}</td>
                      <td>{student.personalDetails.name.split(" ")[1]}</td>
                      <td>{student.contactDetails.mobileNumber}</td>
                      <td>{student.personalDetails.gender}</td>
                      <td>{student.courseDetails.courseName}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleViewDetails(student)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredStudents.map((student, index) => (
              <div key={index} className="col-12 d-lg-none mb-3">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">
                      Sutdent Name : {student.personalDetails.name}
                    </p>
                    <p className="card-text">
                      Mobile Number: {student.contactDetails.mobileNumber}
                    </p>
                    <p className="card-text">
                      Gender: {student.personalDetails.gender}
                    </p>
                    <p className="card-text">
                      Batch Name: {student.courseDetails.courseName}
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleViewDetails(student)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {modalOpen && selectedStudent && (
            <div
              className="modal"
              tabIndex="-1"
              role="dialog"
              style={{
                display: "block",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                // zIndex: "999999999",
              }}
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Student Details</h5>
                    <button
                      type="button"
                      className="close btn btn-primary"
                      aria-label="Close"
                      onClick={handleCloseModal}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th>Student Name</th>
                          <th>{selectedStudent.personalDetails.name}</th>
                        </tr>
                        <tr>
                          <td>Mobile Number</td>
                          <td>{selectedStudent.contactDetails.mobileNumber}</td>
                        </tr>
                        <tr>
                          <td>Gender</td>
                          <td>{selectedStudent.personalDetails.gender}</td>
                        </tr>
                        <tr>
                          <td>Batch Name</td>
                          <td>{selectedStudent.courseDetails.courseName}</td>
                        </tr>
                        <tr>
                          <td>Date of Birth</td>
                          <td>{selectedStudent.personalDetails.dateOfBirth}</td>
                        </tr>
                        <tr>
                          <td>Nationality</td>
                          <td>{selectedStudent.personalDetails.nationality}</td>
                        </tr>
                        <tr>
                          <td>Correspondence Address</td>
                          <td>
                            {
                              selectedStudent.contactDetails
                                .correspondenceAddress
                            }
                          </td>
                        </tr>
                        <tr>
                          <td>Email ID</td>
                          <td>{selectedStudent.contactDetails.emailId}</td>
                        </tr>
                        <tr>
                          <td>Father's Name</td>
                          <td>{selectedStudent.contactDetails.fatherName}</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* <div>
  <h6>Attendance Details:</h6>
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {selectedStudent.attandanceDetails.map((attendance, index) => (
        <tr key={index}>
          <td>{attendance.date}</td>
          <td>
            <div className={`attendance-status ${attendance.present ? 'present' : 'absent'}`}></div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div> */}

                    <div className="education-section">
                      <h4 className="text-center">
                        <strong>Education Details:</strong>
                      </h4>

                      <div className="table-container">
                        <h6>Tenth</h6>
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td>
                                <strong>Name of School:</strong>
                              </td>
                              <td>
                                {
                                  selectedStudent.educationalDetails[0].tenth
                                    .nameOfSchool
                                }
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Board:</strong>
                              </td>
                              <td>
                                {
                                  selectedStudent.educationalDetails[0].tenth
                                    .board
                                }
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Year of Passing:</strong>
                              </td>
                              <td>
                                {
                                  selectedStudent.educationalDetails[0].tenth
                                    .yearOfPassing
                                }
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Subjects:</strong>
                              </td>
                              <td>
                                {selectedStudent.educationalDetails[0].tenth.subjects.join(
                                  ", "
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Percentage:</strong>
                              </td>
                              <td>
                                {
                                  selectedStudent.educationalDetails[0].tenth
                                    .percentage
                                }
                                %
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="table-container">
                        <h6>Twelfth</h6>
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td>
                                <strong>Name of College:</strong>
                              </td>
                              <td>
                                {
                                  selectedStudent.educationalDetails[0].twelfth
                                    .nameOfCollege
                                }
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Board:</strong>
                              </td>
                              <td>
                                {
                                  selectedStudent.educationalDetails[0].twelfth
                                    .board
                                }
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Year of Passing:</strong>
                              </td>
                              <td>
                                {
                                  selectedStudent.educationalDetails[0].twelfth
                                    .yearOfPassing
                                }
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Subjects:</strong>
                              </td>
                              <td>
                                {selectedStudent.educationalDetails[0].twelfth.subjects.join(
                                  ", "
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Percentage:</strong>
                              </td>
                              <td>
                                {
                                  selectedStudent.educationalDetails[0].twelfth
                                    .percentage
                                }
                                %
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="table-container">
                        <h6>Graduation</h6>
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td>
                                <strong>Name of College:</strong>
                              </td>
                              <td>
                                {
                                  selectedStudent.educationalDetails[0]
                                    .graduation.nameOfCollege
                                }
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Board:</strong>
                              </td>
                              <td>
                                {
                                  selectedStudent.educationalDetails[0]
                                    .graduation.board
                                }
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Year of Passing:</strong>
                              </td>
                              <td>
                                {
                                  selectedStudent.educationalDetails[0]
                                    .graduation.yearOfPassing
                                }
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Subjects:</strong>
                              </td>
                              <td>
                                {selectedStudent.educationalDetails[0].graduation.subjects.join(
                                  ", "
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Percentage:</strong>
                              </td>
                              <td>
                                {
                                  selectedStudent.educationalDetails[0]
                                    .graduation.percentage
                                }
                                %
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default StudentsTable;
