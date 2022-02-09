import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";
import Header from "./components/Header";
import FeedbackData from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

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
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <React.Fragment>
                  <FeedbackForm handleAdd={feedbackHandler} />
                  <FeedbackStats feedback={feedbackData} />
                  <FeedbackList
                    deleteFeedback={deleteFeedbackHandler}
                    feedback={feedbackData}
                  />
                </React.Fragment>
              }
            />

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
};

export default App;
