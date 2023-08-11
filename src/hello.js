import React, { useCallback, useState } from "react";
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

export default function App() {
  // const recommendationInfo = [
  //   {
  //     id: 1,
  //     recommended: true,
  //     topRecommendation: true,
  //     title: "Balancing intense emotions",
  //     description:
  //       "Learn skills to balance emotions and improve relationships.",
  //     image: dandelion,
  //   },
  //   {
  //     id: 2,
  //     recommended: true,
  //     topRecommendation: false,
  //     title: "Improving sleep",
  //     description: "Discover proven ways to get your sleep back on track.",
  //     image: moon,
  //   },
  //   {
  //     id: 3,
  //     recommended: true,
  //     topRecommendation: false,
  //     title: "Managing depression",
  //     description: "Learn simple, everyday skills to help improve your mood.",
  //     image: sunset,
  //   },
  //   { id: 4 },
  //   {
  //     id: 5,
  //     title: "Mindfulness and meditation",
  //     description:
  //       "Learn skills to help you live a more present and fulfilled life.",
  //     image: water,
  //   },
  //   {
  //     id: 6,
  //     title: "Reducing stress",
  //     description: "Proven ways to help lower your stress.",
  //     image: orchid,
  //   },
  //   { id: 7 },
  //   {
  //     id: 8,
  //     title: "Living with bipolar disorder",
  //     description: "Live well with your diagnosis",
  //     image: mountains,
  //   },
  //   {
  //     id: 9,
  //     recommended: false,
  //     topRecommendation: false,
  //     title: "Managing anxiety",
  //     description: "Manage anxiety with simple, everyday skills.",
  //     image: stars,
  //   },
  //   {
  //     id: 10,
  //     title: "Managing chronic pain",
  //     description: "Live the life you want.",
  //     image: trees,
  //   },
  //   {
  //     id: 11,
  //     title: "Trauma recovery",
  //     description: "Process and move beyond truama.",
  //     image: trauma,
  //   },
  //   { id: 12 },
  //   {
  //     id: 13,
  //     title: "Embracing life changes",
  //     description: "Discover your new path.",
  //     image: leaves,
  //   },
  // ];

  // const [selectedOption, setSelectedOption] = useState("");
  // const [focusId, setFocusId ]= useState("");

  // const handleChange = (event) => {
  //   setSelectedOption(event.currentTarget.id);
  // };

  // function handleInitialContainerFocus(){
  //   if(!focusId){
  //     setFocusId(recommendationInfo[0].id);
  //   }
  // }
  // function renderButtons (){
  //   return recommendationInfo.map((item) => (
  //     <div className="row">
  //       <PrettyRadioButton
  //         id={item.id}
  //         selectedOption={selectedOption}
  //         imageName={item.image}
  //         title={item.title}
  //         description={item.description}
  //         handleChange={handleChange}
  //         value={selectedOption === `${item.title}`}
  //       />
  //     </div>
  //   ))
  // }
  return (
  //   <div className="App container">
  //     <div className="row">
  //       <div className="col-sm-8 col-md-6 col-lg-4">
  //         <h1>What would you like to focus on instead?</h1>

  //         <p>
  //           Choose one area to focus on for now. You'll still be able to explore
  //           our full library of content.
  //         </p>
  //       </div>
  //     </div>

  //     <div
  //       className="radio-btn-container"
  //       role="radiogroup"
  //       aria-label="Choose an area to focus on"
  //       tabIndex={0}
  //       aria-activedescendant={focusId}
  //       onFocus={handleInitialContainerFocus}
  //       //aria-labelledby="radio-label"
  //     >
        {/* {recommendationInfo.map((item) =>
          item.id === 4 ? (
            <>
              <h2>Other focus areas</h2>
              <h3>Building resilience</h3>{" "}
            </>
          ) : item.id === 7 ? (
            <>
              <h3>Conditions</h3>
            </>
          ) : item.id === 12 ? (
            <>
              <h3>Navigating life</h3>
            </>
          ) : (
            <div className="row">
              <PrettyRadioButton
                id={item.id}
                recommended={item.recommended}
                topRecommendation={item.topRecommendation}
                selectedOption={selectedOption}
                imageName={item.image}
                title={item.title}
                description={item.description}
                handleChange={handleChange}
                value={selectedOption === `${item.title}`}
              />
            </div>
          )
        )} */}

        // <h2>Other focus areas</h2>
        // <h3>Building resilience</h3>

        // {renderButtons()}
{/*
        <h3>Conditions</h3>

        {recommendationInfo.slice(5, 9).map((item) => (
          <div className="row">
            <PrettyRadioButton
              id={item.id}
              selectedOption={selectedOption}
              imageName={item.image}
              title={item.title}
              description={item.description}
              handleChange={handleChange}
              value={selectedOption === `${item.title}`}
            />
          </div>
        ))}

        <h3>Navigating life</h3>

        {recommendationInfo.slice(9).map((item) => (
          <div className="row">
            <PrettyRadioButton
              id={item.id}
              selectedOption={selectedOption}
              imageName={item.image}
              title={item.title}
              description={item.description}
              handleChange={handleChange}
              value={selectedOption === `${item.title}`}
            />
          </div>
        ))} */}
    //   </div>
    // </div>
  );
}
