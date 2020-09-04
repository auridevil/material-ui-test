import React, { Fragment } from "react";

import Input from "./input";
import InputLabel from "./inputlabel";
import ErrorLabel from "./errorlabel";

import InputAdornment from "./inputadornments";

export default function App() {
  return (
    <Fragment>
      {/* */}
      <InputLabel>Regular</InputLabel>
      <Input placeholder="Hint text" />
      <br /> <br />
      {/* */}
      <InputLabel optionalText="Optional text goes here (E.g. help text)">
        Regular with optional text
      </InputLabel>
      <Input placeholder="Hint text" />
      <br /> <br />
      {/* */}
      <InputLabel disabled={true}>Disabled</InputLabel>
      <Input placeholder="Disabled" disabled={true} />
      <br /> <br />
      {/* */}
      <InputLabel
        disabled={true}
        optionalText="Optional text goes here (E.g. help text)"
      >
        Disabled with optional text
      </InputLabel>
      <Input placeholder="Disabled" disabled={true} />
      <br /> <br />
      {/* */}
      <InputLabel required={true}>Filled</InputLabel>
      <Input value={"Hello, is there anybody in there?"} readonly={false} />
      <ErrorLabel show={false}>This should be hidden</ErrorLabel>
      <br /> <br />
      {/* */}
      <InputLabel>Readonly</InputLabel>
      <Input
        placeholder={"Hint text"}
        value={"Paragraph Input (read only)"}
        readOnly={true}
        type="default"
      />
      <br /> <br />
      {/* */}
      <InputLabel error={true}>Error</InputLabel>
      <Input placeholder="Error Hint text" type="error" />
      <ErrorLabel show={true}>Alert Message Here</ErrorLabel>
      <br /> <br />
      {/* */}
      <InputLabel
        optionalText="Optional text goes here (E.g. help text)"
        error={true}
      >
        Error
      </InputLabel>
      <Input placeholder="Error Hint text" type="error" />
      <ErrorLabel show={true}>Alert Message Here</ErrorLabel>
      {/* */}
      <InputLabel>Prefix</InputLabel>
      <Input
        placeholder="Prefix Hint text"
        startAdornment={<InputAdornment position="start">www.</InputAdornment>}
      />
    </Fragment>
  );
}
