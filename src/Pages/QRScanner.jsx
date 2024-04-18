import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import Webcam from "react-webcam";
import Swal from "sweetalert2"; // Import SweetAlert
import axios from "axios";

import "../Assets/Styles/QRScanner.css";
import Base_URL from "../Common/Apis";

const QRScanner = () => {
  const [result, setResult] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const [scanning, setScanning] = useState(false);
  const webcamRef = useRef(null);
  const studentId = "65fbdc7d9a1c657d5e4fd6a8";

  const handleScan = async (data) => {
    if (data) {
      setResult(data);
      try {
        const response = await axios.post(`${Base_URL}qr/scan`, {
          qrData: data,
          studentId: studentId
        });
        handleSuccess(response.data.message);
      } catch (error) {
        handleError(error.response.data.error);
      }
    }
  };

  const handleError = (error) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error,
    });
    setScanning(false); // Stop scanning on error
  };

  const handleSuccess = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
    });
    setScanning(false); // Stop scanning on success
  };

  const toggleScanner = () => {
    setShowScanner((prev) => !prev);
    setResult(""); // Clear previous scan result
  };

  const startScanning = () => {
    setScanning(true);
    toggleScanner();
  };

  const flipCamera = () => {
    // No need to flip camera since we're using the back camera by default
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        const imageData = reader.result;
        try {
          const response = await axios.post(`${Base_URL}qr/scan`, {
            qrData: imageData,
            studentId: studentId // Include _id in the payload
          });
          handleSuccess(response.data.message);
        } catch (error) {
          handleError(error.response.data.error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="scanner-container">
        {showScanner ? (
          <div className="scanner-wrapper">
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{
                width: "100%",
                height: "100%",
              }}
              continuous={true} // Enable continuous scanning
            />
          </div>
        ) : (
          <div className="scanner-wrapper">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode: { exact: "environment" } }}
              style={{
                width: "70%",
                height: "100%",
                border: "2px solid #fff",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                marginLeft: "80px",
                marginTop: "50px",
              }}
            />

            <div className="flip-icon" onClick={flipCamera}></div>
            <div className="qr-border"></div>
          </div>
        )}
      </div>
      <div>
        <input type="file" accept="image/*" onChange={handleFileUpload} />
      </div>
      {scanning && <p>Loading...</p>}
      <button onClick={startScanning} style={{ width: "300px" }} disabled={scanning}>
        Scan
      </button>
      <p>{result}</p>
    </div>
  );
};

export default QRScanner;
