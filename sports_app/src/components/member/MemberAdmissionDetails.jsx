import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MemberHeader from './MemberHeader';

function MemberAdmissionDetails() {
  const email = localStorage.getItem("memberEmail");
  const [admissionData, setAdmissionData] = useState([]);

  const API_URL = "http://localhost:3000/member/admissionDetail";

  const fetchData = async () => {
    try {
      const params = { memEmail: email };
      const response = await axios.get(API_URL, { params });
      console.log(response.data.details);
      setAdmissionData(response.data.details);
    } catch (err) {
      console.error("Error fetching admission details:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MemberHeader />
      <h2 style={{ marginTop: "100px", textAlign: "center" }}>
        Your Admission Details for Enrolled Courses
      </h2>

      <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
        {admissionData.length > 0 ? (
          admissionData.map((formObj, index) => (
            <div
              key={index}
              style={{
                width: "250px",
                backgroundColor: "#e0f7fa",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                padding: "15px",
                textAlign: "center"
              }}
            >
              <img
                src={`http://localhost:3000/pics/${formObj.imageFile}`}
                alt={formObj.fullName}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px"
                }}
              />
              <p><strong>Name:</strong> {formObj.fullName}</p>
              <p><strong>Course:</strong> {formObj.course.courseName}</p>
              <p><strong>Fees:</strong> ₹{formObj.course.courseFees}</p>
              <p><strong>Status:</strong> {formObj.admissionStatus}</p>

              <button
                style={{
                  marginTop: "10px",
                  backgroundColor: "#25D366",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  padding: "6px 12px",
                  cursor: "pointer"
                }}
                onClick={() =>
                  window.open(
                    'https://wa.me/7388841881',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                Contact on WhatsApp
              </button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No admission details found.
          </p>
        )}
      </div>
    </>
  );
}

export default MemberAdmissionDetails;
