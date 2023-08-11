import React, { useState } from "react";
import PrettyRadioButton from "./components/PrettyRadioButton";
import "./styles.css";
import dandelion from "./images/dandelion.jpeg";
import sunset from "./images/sunset.jpeg";
import moon from "./images/moon.jpeg";
import water from "./images/water.jpeg";
import trees from "./images/trees.jpeg";
import trauma from "./images/trauma.jpeg";
import stars from "./images/stars.jpeg";
import orchid from "./images/orchid.jpeg";
import mountains from "./images/mountains.jpeg";
import leaves from "./images/leaves.jpeg";

const recommendationInfo = [
  {
    id: 1,
    recommended: true,
    topRecommendation: true,
    title: "Balancing intense emotions",
    description:
      "Learn skills to balance emotions and improve relationships.",
    image: dandelion,
  },
  {
    id: 2,
    recommended: true,
    topRecommendation: false,
    title: "Improving sleep",
    description: "Discover proven ways to get your sleep back on track.",
    image: moon,
  },
  {
    id: 3,
    recommended: true,
    topRecommendation: false,
    title: "Managing depression",
    description: "Learn simple, everyday skills to help improve your mood.",
    image: sunset,
  },
  {
    id: 4,
    title: "Mindfulness and meditation",
    description:
      "Learn skills to help you live a more present and fulfilled life.",
    image: water,
  },
  {
    id: 5,
    title: "Reducing stress",
    description: "Proven ways to help lower your stress.",
    image: orchid,
  },
  {
    id: 6,
    title: "Living with bipolar disorder",
    description: "Live well with your diagnosis",
    image: mountains,
  },
  {
    id: 7,
    recommended: false,
    topRecommendation: false,
    title: "Managing anxiety",
    description: "Manage anxiety with simple, everyday skills.",
    image: stars,
  },
  {
    id: 8,
    title: "Managing chronic pain",
    description: "Live the life you want.",
    image: trees,
  },
  {
    id: 9,
    title: "Trauma recovery",
    description: "Process and move beyond truama.",
    image: trauma,
  },
  {
    id: 10,
    title: "Embracing life changes",
    description: "Discover your new path.",
    image: leaves,
  },
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [focusId, setFocusId] = useState("");

  const handleChange = ({currentTarget}) => {
    setFocusId(currentTarget.id);
    setSelectedOption(currentTarget.id);
  };

  function handleInitialContainerFocus() {
    if (!focusId) {
      setFocusId(recommendationInfo[0].title);
    }
  }

  function renderButtons(start, end) {
    return recommendationInfo.slice(start, end).map((item) => (
      <div className="row" key={item.id}>
        <PrettyRadioButton
          selectedOption={selectedOption}
          handleChange={handleChange}
          value={selectedOption === `${item.title}`}
          {...item}
        />
      </div>
    ));
  }
  return (
    <div className="App container">
      <div className="row">
        <div className="col-sm-8 col-md-6 col-lg-4">
          <h1>What would you like to focus on instead?</h1>
          <p>
            Choose one area to focus on for now. You'll still be able to explore
            our full library of content.
          </p>
        </div>
      </div>

      <div
        className="radio-btn-container"
        role="radiogroup"
        aria-label="Choose an area to focus on"
        onFocus={handleInitialContainerFocus}
      >

        {renderButtons(0, 3)}
        <h2>Other focus areas</h2>
        <h3>Building resilience</h3>
        {renderButtons(3, 5)}
        <h3>Conditions</h3>
        {renderButtons(5, 9)}
        <h3>Navigating life</h3>
        {renderButtons(9, 10)}
      </div>
    </div>
  );
}
