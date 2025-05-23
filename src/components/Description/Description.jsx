import s from "./Description.module.css";

const Description = () => {
  return (
    <div className={s.description}>
      <h1 className={s.descriptionTitle}>"Sip Happens Café"</h1>
      <p className={s.descriptionText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
