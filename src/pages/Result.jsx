import React from "react";

const Result = ({ result }) => {
  return (
    <div>
      <h2>Your QR-code:</h2>
      <img src={result.qrcode} alt="QR-code" />
    </div>
  );
};

export default Result;
