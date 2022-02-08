import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

const App = () => {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);

  const deleteFeedbackHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbackData(
        feedbackData.filter((feedbackItem) => feedbackItem.id !== id)
      );
    }
  };

  const feedbackHandler = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbackData([newFeedback, ...feedbackData]);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={feedbackHandler} />
        <FeedbackStats feedback={feedbackData} />
        <FeedbackList
          deleteFeedback={deleteFeedbackHandler}
          feedback={feedbackData}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
