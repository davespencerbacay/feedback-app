import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
const RatingSelect = ({ select }) => {
  const { feedbackEdit } = useContext(FeedbackContext);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <ul className="rating">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
        return (
          <li key={number}>
            <input
              type="radio"
              id={`num${number + 1}`}
              value={number + 1}
              onChange={handleChange}
              checked={selected === number + 1}
            />
            <label htmlFor={`num${number + 1}`}>{number + 1}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default RatingSelect;
