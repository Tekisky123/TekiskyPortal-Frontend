import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import Webcam from "react-webcam";
import { MdFlipCameraIos } from "react-icons/md";
import "../Assets/Styles/QRScanner.css";

const QRScanner = () => {
  const [result, setResult] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const webcamRef = useRef(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const toggleScanner = () => {
    setShowScanner((prev) => !prev);
  };

  const flipCamera = () => {
    // No need to flip camera since we're using the back camera by default
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
              
            />
          </div>
        ) : (
          <div className="scanner-wrapper">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode: "environment" }} // Request the back camera
              style={{
                width: "70%",
                height: "100%",
                border: "2px solid #fff", // Example border style
                borderRadius: "8px", // Example border radius
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Example box shadow
                marginLeft: "80px",
                marginTop:"50px"
              }}
            />
            <div className="flip-icon" onClick={flipCamera}></div>
            <div className="qr-border"></div>
          </div>
        )}
      </div>
      <p>{result}</p>
    </div>
  );
};

export default QRScanner;
