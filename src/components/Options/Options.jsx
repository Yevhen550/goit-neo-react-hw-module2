import { useState } from "react";
import s from "./Options.module.css";

const Options = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className={s.buttonList}>
      <button className={s.button_85} onClick={handleClick}>
        Good
      </button>
      <button className={s.button_85} onClick={handleClick}>
        Neutral
      </button>
      <button className={s.button_85} onClick={handleClick}>
        Bad
      </button>
    </div>
  );
};

export default Options;
