import { useState } from "react";
import s from "./Options.module.css";

const Options = ({ name }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className={s.buttonList}>
      <button className={s.button_85} onClick={handleClick}>
        {name}
        {clicks}
      </button>
    </div>
  );
};

export default Options;
