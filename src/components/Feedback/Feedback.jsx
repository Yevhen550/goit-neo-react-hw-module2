import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total }) => {
  const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  return (
    <ul className={s.feedbackList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positivePercentage}%</li>
    </ul>
  );
};

export default Feedback;
