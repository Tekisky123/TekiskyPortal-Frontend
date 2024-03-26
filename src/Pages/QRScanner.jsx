import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import Webcam from "react-webcam";
import Swal from "sweetalert2";
import axios from "axios";

import "../Assets/Styles/QRScanner.css";
import Base_URL from "../Common/Apis";

const QRScanner = () => {
  const [result, setResult] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [apiCalling, setApiCalling] = useState(false);
  const webcamRef = useRef(null);
  const _id = "65fac8c09a1c657d5e4fd67b";
  const qrToken="110110001111000011001101010111100111100010110010101"
  const qrdata = "data:image/png;base64,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"

  const handleScan = async (data) => {
    if (data) {
      setResult(data);
      setApiCalling(true);
      try {
        const response = await axios.post(`http://localhost:6060/qr/scan`, {
          qrData: qrdata,
          _id: _id,
          qrToken:qrToken
        });
        handleSuccess(response.data.message);
      } catch (error) {
        handleError(error.response.data.error);
      } finally {
        setApiCalling(false);
      }
    }
  };

  const handleError = (error) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error,
    });
    setScanning(false);
  };

  const handleSuccess = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
    });
    setScanning(false);
  };

  const toggleScanner = () => {
    setShowScanner((prev) => !prev);
    setResult("");
  };

  const startScanning = () => {
    setScanning(true);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        const imageData = reader.result;
        setApiCalling(true);
        try {
          const response = await axios.post(`http://localhost:6060/qr/scan`, {
            
            qrData: qrdata,
            _id: _id,
            qrToken:qrToken
          });
          handleSuccess(response.data.message);
        } catch (error) {
          handleError(error.response.data.error);
        } finally {
          setApiCalling(false);
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
              facingMode="environment"
            />
          </div>
        ) : (
          <div className="scanner-wrapper">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode: "environment" }}
              style={{
                width: "100%", // Adjusted to take full width
                height: "auto", // Adjusted to maintain aspect ratio
              }}
            />
          </div>
        )}
      </div>
      <div>
        <input type="file" accept="image/*" onChange={handleFileUpload} />
      </div>
      {scanning && <p>Loading...</p>}
      {apiCalling && <h1>Calling API...</h1>}
      <button onClick={startScanning} style={{ width: "300px" }} disabled={scanning}>
        Scan
      </button>
      <p>{result}</p>
    </div>
  );
};

export default QRScanner;
