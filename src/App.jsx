import React, { Fragment } from "react";

import Input from "./input";
import InputLabel from "./inputlabel";

export default function App() {
  return (
    <Fragment>
      <InputLabel>Regular</InputLabel>
      <Input placeholder="Hint text" />
      <br /> <br />
      <InputLabel optionalText="Optional text goes here (E.g. help text)">
        Regular with optional text
      </InputLabel>
      <Input placeholder="Hint text" />
      <br /> <br />
      <InputLabel disabled={true}>Disabled</InputLabel>
      <Input placeholder="Disabled" disabled={true} />
      <br /> <br />
      <InputLabel
        disabled={true}
        optionalText="Optional text goes here (E.g. help text)"
      >
        Disabled with optional text
      </InputLabel>
      <Input placeholder="Disabled" disabled={true} />
      <br /> <br />
      <InputLabel required={true}>Filled</InputLabel>
      <Input value={"Hello, is there anybody in there?"} readonly={false} />
      <br /> <br />
      <InputLabel>Readonly</InputLabel>
      <Input
        placeholder={"Hint text"}
        value={"Paragraph Input (read only)"}
        readOnly={true}
        type="default"
      />
      <br /> <br />
      <InputLabel error={true}>Error</InputLabel>
      <Input placeholder="Error Hint text" type="error" />
    </Fragment>
  );
}
