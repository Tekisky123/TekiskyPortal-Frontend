import React from 'react';
import "../Assets/Styles/StudentsTable.css"

const StudentsTable = ({ students }) => {
  return (
    <div className="container">
      <h2 className="text-center mb-4">Students Table</h2>
      <div className="table-responsive">
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
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.mobileNumber}</td>
                <td>{student.gender}</td>
                <td>{student.batchName}</td>
                <td>
                  <button className="btn btn-primary">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsTable;
