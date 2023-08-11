import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";
import blueCheck from "../images/blue-check.png";

function PrettyRadioButton({
  id,
  value,
  title,
  description,
  recommended,
  topRecommendation,
  image,
  selectedOption,
  handleChange,
}) {
  const buttonStyle = "col-sm-8 col-md-6 col-lg-4 radio-btn";
  const checkMark = `url("${blueCheck}")`;
  return (
    <div
      className={
        selectedOption === title ? buttonStyle + " outlined" : buttonStyle
      }
      id={`radio-button-${id}`}
    >
      {/* recommendation icon and title */}
      {recommended && (
        <div className="recommended">
          <FontAwesomeIcon icon={faStar} />{" "}
          {topRecommendation ? "Top recommendation" : "Also recommended"}
        </div>
      )}
      {/* decorative image - changes on selection */}
      <div
        className="image"
        style={{
          backgroundImage:
            selectedOption === title && value ? checkMark : `url("${image}")`,
        }}
      ></div>
      
      <input
        type="radio"
        value={title}
        name="focus_area"
        id={title}
        onChange={(e) => handleChange(e)}
        onClick={(e) => handleChange(e)}
        checked={value}
        tabIndex={0}
        aria-label={title}
      />
      <label htmlFor={title} id={`radio-label-${id}`} className="title">
        {title}
        <div className="description"> {description} </div>
      </label>
    </div>
  );
}
export default memo(PrettyRadioButton);
