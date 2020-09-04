import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles({
  root: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    width: "300px",
    backgroundColor: "#f2f5f8",
    border: "1px solid #c9d9e8",
    marginBottom: "8px",
    color: "#152935",
    "&:hover": {
      border: "1px solid #0090d1",
    },
    "&:placeholder": { color: "#9DA6AD" },
  },
  input: {
    textIndent: "8px",
    "&:read-only": {
      color: "#9DA6AD",
      backgroundColor: "#FAFBFD",
      border: "0px solid #C1C1C4 !important",
    },
  },
  focused: {
    border: "1px solid #0090d1",
    outline: "0px",
  },
  disabled: {
    backgroundColor: "#FAFBFD",
    cursor: "not-allowed",
    border: "0.1px solid #C1C1C4 !important",
    opacity: "0.64",
    "&::placeholder": {
      color: "#C1C1C4",
    },
    "&:hover": {
      border: "0px solid #C1C1C4",
    },
  },
  error: {
    border: "1px solid #D82829 !important",
  },
});

const VInput = (props) => {
  const {
    disabled,
    placeholder,
    readOnly,
    startAdornment,
    type,
    value,
  } = props;
  const classes = useStyles(props);

  return (
    <Input
      classes={{
        disabled: classes.disabled,
        error: classes.error,
        focused: classes.focused,
        input: classes.input,
        root: classes.root,
      }}
      disabled={disabled}
      disableUnderline={true}
      error={type === "error" ? true : false}
      placeholder={placeholder}
      readOnly={readOnly}
      startAdornment={startAdornment}
      value={value}
    />
  );
};

VInput.propTypes = {
  disabled: PropTypes.bool,
  errorMessage: PropTypes.node,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  startAdornment: PropTypes.object,
  type: PropTypes.oneOf(["default", "error"]),
  value: PropTypes.string.isRequired,
};

VInput.defaultProps = {
  disabled: false,
  readOnly: false,
  type: "default",
};

export default VInput;
