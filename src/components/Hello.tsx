import * as React from "react";
import * as ReactDOM from "react-dom";

export class HelloComponent extends React.Component<any, any> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}