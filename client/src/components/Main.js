import React from 'react'

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    async componentDidMount() {
        let response = await fetch('/api/');
        let json = await response.json();
        this.setState({
            message: json.message
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default Main
