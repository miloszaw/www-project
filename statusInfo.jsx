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
            <div>
                <h1>test</h1>
                <p>{"Status: "+ JSON.stringify(this.state.data)}</p>
                <input type="button"/>
            </div>
        );
    }
}


ReactDOM.render(
    <StatusInfo />,
    document.getElementById('statusinfoapp'),
);