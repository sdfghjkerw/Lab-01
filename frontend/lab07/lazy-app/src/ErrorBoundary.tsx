import React, { Component } from "react"
import type {ReactNode, ErrorInfo} from "react"

interface Props{
    children: ReactNode
    fallback: ReactNode
}

interface State{
    hasError: boolean
}

class ErrorBoundary extends Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(): State{
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo){
        console.error("ErrorBoundary caught an error", error, errorInfo)
    }

    resetError = () => {
        this.setState({hasError: false})
    }

    render(){
        if(this.state.hasError){
            return (
                <div>
                    {this.props.fallback}
                    <button onClick={this.resetError}>try again!</button>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary