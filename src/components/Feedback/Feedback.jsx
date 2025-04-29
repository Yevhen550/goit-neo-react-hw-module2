import { useState } from "react";
import s from "./Feedback.module.css";

const Feedback = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Feedback;
