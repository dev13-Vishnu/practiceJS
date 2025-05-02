import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError:false};
    }
    static getDerivedStateFromError(error) {
        return {hasError: true};

    }

    componentDidCatch(error,errorInfo){
        console.log("Error caught by boundary:",error,errorInfo);
    }
  render() {

    if(this.state.hasError) {
        return <h2>Something Went Wrong</h2>
    }


    return this.props.children;
  }
}
