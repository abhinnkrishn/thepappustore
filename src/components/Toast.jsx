import React, { useEffect } from "react";
import toast from "./css/toast.css";

function Toast({ message }) {
  return (
    <div>
      <div id="snackbar">{message}</div>
    </div>
  );
}

export default Toast;
