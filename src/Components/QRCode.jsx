import React, { useState, useEffect } from "react";
import axios from "axios";
import Base_URL from "../Common/Apis";
import "../Assets/Styles/QRScanner.css"; 

const QRCode = () => {
  const [qrCodeData, setQRCodeData] = useState("");

  useEffect(() => {
    const fetchQRCodeData = async () => {
      try {
        const response = await axios.get(`${Base_URL}qr/generate`);
        console.log("Response:", response);
        setQRCodeData(response.data.qrCodeDataUrl);
      } catch (error) {
        console.error("Error fetching QR code data:", error);
        // Handle error
      }
    };

    fetchQRCodeData();
  }, []);

  return (
    <div className="qr-code-container">
      <h2 className="qr-code-heading">QR Code</h2>
      {qrCodeData ? (
        <img className="qr-code-image" src={qrCodeData} alt="QR Code" />
      ) : (
        <p className="loading-message">Loading QR Code...</p>
      )}
    </div>
  );
};

export default QRCode;
