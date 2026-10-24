import  { useState } from "react";
import { useLocation } from "react-router-dom";
import MemberHeader from "./MemberHeader";
import QrcodeImage from '../../assets/QR.jpeg';
import Swal from "sweetalert2"
import axios from "axios";

const EnrollmentForm = () => {
    const APIURL ="http://localhost:3000/member/enrollment"

    const location = useLocation();// it is used to react state object data
  const { course, memberEmail } = location.state;// destructuring the state object

  const [formData, setFormData] = useState({
    course: course._id,
    emailAddress: memberEmail,
    fullName: "",
    phoneNumber: "",
    city: "",
    address: "",
    dateOfBirth: "",
    transactionNo: "",
    imageFile: null, 
  });

  const fetchData = (e) => {
    // setFormData({...formData,[e.target.name]:e.target.value})
    const { name, value } = e.target; //target object destructuring
    setFormData({ ...formData, [name]: value });
  };

  // Handle image file separately
  const fetchImage = (e) => {
    setFormData({ ...formData, imageFile: e.target.files[0] });
  };

  const submitForm = async(e) => {
    e.preventDefault();

    // If you want to send the image to the backend
    const fd = new FormData();// use FormData only when we upload some thing
    for (const key in formData) {
      fd.append(key, formData[key]);
    }
    // console.log("Form Submitted:", formData);
    // alert("Form submitted successfully!");

    try{
        const serverResponse = await axios.post(APIURL,fd)
        console.log(serverResponse.data)
        // alert(serverResponse.data.message)
        Swal.fire(serverResponse.data.message)


    }
    catch(error){
        console.log(error)
    }

  };//Submit From closed

  return (
    <>
      <MemberHeader />

      <div className="container py-5 d-flex flex-column align-items-center justify-content-center">
        {/* Header Section */}
        <div className="text-center mb-4" style={{ maxWidth: "800px" }}>
          <h2 className="fw-bold mb-3">Enroll Yourself by Filling the Form</h2>
          <p className="text-muted">
            You have chosen the course{" "}
            <span className="fw-semibold text-dark">{course.courseName}</span>. Pay the{" "}
            <span className="text-danger fw-bold">₹{course.courseFees}</span>{" "}
            by scanning the QR code, then fill out the details below.
          </p>
        </div>

        {/* Flex Container */}
        <div
          className="d-flex flex-wrap justify-content-center align-items-start gap-5 w-100"
          style={{ maxWidth: "1100px" }}
        >
          {/* Left Side - QR Code */}
          <div
            className="d-flex flex-column align-items-center p-4 bg-white shadow rounded"
            style={{ minWidth: "280px", flex: "1" }}
          >
            <h4 className="mb-3">Scan to Pay</h4>
            <img
              src={QrcodeImage}
              alt="QR Code"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: "250px" }}
            />
            <p className="text-muted small text-center">
              After payment, note down the transaction number and enter it in the form.
            </p>
          </div>

          {/* Right Side - Form */}
          <div
            className="bg-white p-4 rounded shadow"
            style={{ minWidth: "320px", flex: "1", maxWidth: "500px" }}
          >
            <form onSubmit={submitForm} encType="multipart/form-data">
              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.emailAddress}
                  onChange={fetchData}
                  readOnly
                />
              </div>

              {/* Full Name */}
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={fetchData}
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={fetchData}
                  required
                />
              </div>

              {/* City */}
              <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={fetchData}
                  required
                />
              </div>

              {/* Address */}
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea
                  className="form-control"
                  id="address"
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={fetchData}
                  required
                ></textarea>
              </div>

              {/* Date of Birth */}
              <div className="mb-3">
                <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={fetchData}
                  required
                />
              </div>

              {/* Transaction No */}
              <div className="mb-3">
                <label htmlFor="transactionNo" className="form-label">Transaction No</label>
                <input
                  type="text"
                  className="form-control"
                  id="transactionNo"
                  name="transactionNo"
                  value={formData.transactionNo}
                  onChange={fetchData}
                  required
                />
              </div>

              {/* Image Upload */}
              <div className="mb-3">
                <label htmlFor="imageFile" className="form-label">Upload Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="imageFile"
                  name="imageFile"
                  accept="image/*"
                  onChange={fetchImage}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollmentForm;
