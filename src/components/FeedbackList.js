import React from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

const FeedbackList = ({ feedback, deleteFeedback }) => {
  if (!feedback || feedback.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "2em" }}>No feedback yet.</p>
    );
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                item={item}
                deleteFeedback={() => deleteFeedback(item.id)}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => {
  //       return (
  //         <FeedbackItem
  //           key={item.id}
  //           item={item}
  //           deleteFeedback={() => deleteFeedback(item.id)}
  //         />
  //       );
  //     })}
  //   </div>
  // );
};

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
