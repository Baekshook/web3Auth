import PropTypes from "prop-types";
import React from "react";
import "./Header.css";

export const HeaderArea = ({
  className,
  divClassName,
}) => {
  return (
    <div className={`header-area ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>
        @WE-ING with_ Wepublic
      </div>
      <img
        className="iconly-broken-chat"
        alt="Iconly broken chat"
        src="/image/vector.png"
      />
      <img
        className="iconly-broken-chat"
        alt="Iconly broken chat"
        src="/image/vector.png"
      />
    </div>
  );
};

HeaderArea.propTypes = {
  iconlyBrokenChat: PropTypes.string,
  iconShareAltComponentAdditionalIconsColor: PropTypes.string,
};
