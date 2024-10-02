import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import "./App.css";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const storedFeedbacks = localStorage.getItem("feedback");
    return storedFeedbacks ? JSON.parse(storedFeedbacks) : [];
  });

  // Save feedbacks to local storage whenever the feedback state changes
  localStorage.setItem("feedback", JSON.stringify(feedback));

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedBack = (id) => {
    // if (window.confirm("Are you sure want to delete?")) {
    setFeedback(feedback.filter((item) => item.id !== id));
    //   }
  };

  // Save feedbacks to local storage whenever feedbacks state changes

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  );
}

export default App;
