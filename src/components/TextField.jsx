import { useMemo } from "react";
import "./TextField.css";
const TextField = ({
  label,
  icon,
  prop,
  icons,
  textFieldWidth,
  textFieldZIndex,
  rectangle1Display,
  propDisplay,
}) => {
  const textFieldStyle = useMemo(() => {
    return {
      width: textFieldWidth,
      zIndex: textFieldZIndex,
    };
  }, [textFieldWidth, textFieldZIndex]);

  const passwordHideSeeStyle = useMemo(() => {
    return {
      display: rectangle1Display,
    };
  }, [rectangle1Display]);

  const rectangleDivStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className="text-field2" style={textFieldStyle}>
      <div className="label-group">
        <div className="label1">{label}</div>
        <div className="password-hide-see1" style={passwordHideSeeStyle}>
          <img className="icon1" alt="" src={icon} />
          <div className="hide1">Hide</div>
        </div>
      </div>
      <div className="text-field3">
        <div className="inputs1">
          <div className="div7">{prop}</div>
          <div className="inputs-item" style={rectangleDivStyle} />
        </div>
        <img className="icons2" alt="" src={icons} />
      </div>
      <div className="error-message1">Error message</div>
    </div>
  );
};

export default TextField;
