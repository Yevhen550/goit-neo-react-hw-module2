import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";
import Container from "./components/Container/Container";

const getInitialFeedback = () => {
  const saved = localStorage.getItem("feedback");
  return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
};

function App() {
  const [feedback, setFeedback] = useState(getInitialFeedback);

  const total = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    if (type === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    }
  };

  return (
    <Container>
      <Description />
      <Options onLeaveFeedback={updateFeedback} hasFeedback={total > 0} />
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
        />
      )}
    </Container>
  );
}

export default App;
