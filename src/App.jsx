import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";
import Container from "./components/Container/Container";

function App() {
  const reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <Container>
      <Description />
      <Options good={`Good: ${reviews.good}`} />
      <Notification message="There is no feedback" />
      <Feedback />
    </Container>
  );
}

export default App;
