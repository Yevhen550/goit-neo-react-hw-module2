import s from "./Options.module.css";

const Options = ({ onLeaveFeedback, hasFeedback }) => {
  return (
    <div className={s.buttonList}>
      <button className={s.btn} onClick={() => onLeaveFeedback("good")}>
        Good
      </button>
      <button className={s.btn} onClick={() => onLeaveFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.btn} onClick={() => onLeaveFeedback("bad")}>
        Bad
      </button>
      {hasFeedback && (
        <button className={s.btn} onClick={() => onLeaveFeedback("reset")}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
