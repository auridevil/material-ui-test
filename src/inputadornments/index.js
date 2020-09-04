import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    fontSize: "10px",
    backgroundColor: "#FFFFFF",
    color: "#9DA6AD",
    letterSpacing: "0",
    fontFamily: "Roboto",
    fontWeight: "400",
    textAlign: "left",
    display: "flex",
    //alignItems: "center",
    whiteSpace: "nowrap",
    padding: "0px 16px",
    border: "1px solid #C9D9E8",
    height: "100%",
    alignItems: "stretch",
  },
});

const VInputAdornment = (props) => {
  const { children, position } = props;
  const classes = useStyles(props);

  return (
    <InputAdornment
      classes={{
        root: classes.root,
      }}
      position={position}
    >
      {children}
    </InputAdornment>
  );
};

VInputAdornment.propTypes = {
  position: PropTypes.oneOf("start", "end"),
};

VInputAdornment.defaultProps = {};

export default VInputAdornment;
