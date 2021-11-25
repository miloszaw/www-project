import ReactDOM from "react-dom";
import React from "react";
import fetchModel from "./lib/fetchModelData";


class StatusInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "data": "",
        }
    }

    componentDidMount() {

        fetchModel("/test/info").then( result => {
            this.setState({data: result});
        });
    }

    render() {
        return (
            this.state.data
        );
    }
}


ReactDOM.render(
    <StatusInfo />,
    document.getElementById('statusinfoapp'),
);