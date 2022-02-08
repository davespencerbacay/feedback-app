import React from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, deleteFeedback }) => {
  if (!feedback || feedback.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "2em" }}>No feedback yet.</p>
    );
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <FeedbackItem
            key={item.id}
            item={item}
            deleteFeedback={() => deleteFeedback(item.id)}
          />
        );
      })}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
