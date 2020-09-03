import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Fragment } from "react";

const useStylesLabel = makeStyles({
  root: {
    fontSize: "12px",
    color: "#D82829",
    lineHeight: "18px",
    fontFamily: "Roboto",
    fontWeight: "400",
    textAlign: "left",
    paddingBottom: "12px",
  },
});

const VErrorLabel = (props) => {
  const { children, show } = props;
  const labelClasses = useStylesLabel(props);

  return (
    <Fragment>
      {show && (
        <InputLabel
          classes={{
            root: labelClasses.root,
          }}
        >
          {children}
        </InputLabel>
      )}
    </Fragment>
  );
};

VErrorLabel.propTypes = {
  show: PropTypes.bool,
};

VErrorLabel.defaultProps = {
  disabled: false,
  required: false,
};

export default VErrorLabel;
