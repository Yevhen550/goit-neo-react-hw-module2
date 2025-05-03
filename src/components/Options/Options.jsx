import s from "./Options.module.css";

const Options = ({ onLeaveFeedback }) => {
  return (
    <div className={s.buttonList}>
      <button className={s.button_85} onClick={() => onLeaveFeedback("good")}>
        Good
      </button>
      <button
        className={s.button_85}
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={s.button_85} onClick={() => onLeaveFeedback("bad")}>
        Bad
      </button>
    </div>
  );
};

export default Options;
