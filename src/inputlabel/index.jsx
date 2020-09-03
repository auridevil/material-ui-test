import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Fragment } from "react";

const useStylesLabel = makeStyles({
  root: {
    fontSize: "14px",
    color: "#152935",
    letterSpacing: "0",
    lineHeight: "18px",
    fontFamily: "Roboto",
    fontWeight: "500",
    textAlign: "left",
    paddingBottom: "12px",
  },
  optionalText: {
    fontSize: "14px",
    color: "#152935",
    letterSpacing: "0",
    lineHeight: "18px",
    fontFamily: "Roboto",
    fontWeight: "500",
    textAlign: "left",
    paddingBottom: "8px",
  },
  disabled: {
    color: "#9DA6AD",
  },
});
const useStylesOptional = makeStyles({
  root: {
    fontSize: "12px",
    color: "#9DA6AD",
    lineHeight: "18px",
    fontFamily: "Roboto",
    fontWeight: "400",
    textAlign: "left",
    paddingBottom: "8px",
  },
  disabled: {
    color: "#9DA6AD",
  },
});

const VInputLabel = (props) => {
  const { children, disabled, optionalText, required } = props;
  const labelClasses = useStylesLabel(props);
  const optionalClasses = useStylesOptional(props);

  return (
    <Fragment>
      <InputLabel
        classes={{
          disabled: labelClasses.disabled,
          root: optionalText ? labelClasses.optionalText : labelClasses.root,
        }}
        disabled={disabled}
        required={required}
      >
        {children}
      </InputLabel>
      {optionalText && (
        <InputLabel
          classes={{
            disabled: optionalClasses.disabled,
            root: optionalClasses.root,
          }}
        >
          {optionalText}
        </InputLabel>
      )}
    </Fragment>
  );
};

VInputLabel.propTypes = {
  disabled: PropTypes.bool,
  optionalText: PropTypes.node,
  required: PropTypes.bool,
};

VInputLabel.defaultProps = {
  disabled: false,
  required: false,
};

export default VInputLabel;
