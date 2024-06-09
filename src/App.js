import React from "react";
import { Survey } from "survey-react-ui";
import "survey-core/modern.min.css";
import { Model } from "survey-core";

const App = () => {
  const surveyJson = {
    title: "Customer Feedback Survey",
    questions: [
      {
        type: "text",
        name: "customerName",
        title: "What is your name?",
      },
      {
        type: "dropdown",
        name: "productSatisfaction",
        title: "How satisfied are you with the product?",
        choices: ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied", "Very Unsatisfied"]
      },
      {
        type: "rating",
        name: "productRating",
        title: "Please rate the product:",
        rateMax: 5
      }
    ]
  };

  const survey = new Model(surveyJson);

  return (
    <div className="App">
      <h1>{survey.title}</h1>
      <Survey model={survey} />
    </div>
  );
};

export default App;
