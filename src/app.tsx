import * as React from "react";
import * as ReactDOM from "react-dom";

import Message from "./components/Message";
import { Hello } from './Hello'

ReactDOM.render(
    <Message from='Max' body='Hi there!' />,
    document.getElementById("root")
);


Hello('Hello From a TS file');