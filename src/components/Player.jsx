import React, { Component } from 'react';

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.playerId !== this.props.playerId) {
            this.getData(nextProps);
        }
    }

    getData(props) {
        console.log("Getting data");
        if (props.playerId) {
            const url = `https://statsapi.web.nhl.com/api/v1/people/${props.playerId}`

            fetch(url)
                .then(data => data.json())
                .then(result => this.setState({data: result.people[0]}));
        }
    }

    render() {
        return (
        <div className="playercontainer">
            {this.state.data !== {} ? Object.keys(this.state.data).map((key, index) => {
                if (typeof this.state.data[key] == 'object') {
                    return undefined;
                }

                return (
                    <div key={index} className="playeritemcontainer">
                        {key}: {this.state.data[key].toString()}
                    </div>
                );
            }) : <div>Fetching data</div>}
        </div>);
    }
}