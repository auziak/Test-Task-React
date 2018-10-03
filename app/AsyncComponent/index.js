import React, { Component } from "react"
import PropTypes from "prop-types"

export default class AsyncComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Component: null,
        }
    }

    componentDidMount() {
        // console.log(this.props.loader)
        
        this.props.loader
            .then(module => this.setState({Component: module.default}))
            .catch(err => this.setState({Component: null}))
    }

    render() {
        const {Component} = this.state
        //console.log(this.state.Component)
        if (Component)
            return <Component {...this.props} />
        return <p>Unable to resolve component module</p>;
    }
}

AsyncComponent.propTypes = {
    loader: PropTypes.instanceOf(Promise).isRequired
}