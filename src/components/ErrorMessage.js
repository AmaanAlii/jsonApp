import React from "react";

function ErrorMessage({ message }) {
  return (
    <div className="p-2 bg-red-600 text-white rounded mt-4">{message}</div>
  );
}

export default ErrorMessage;
