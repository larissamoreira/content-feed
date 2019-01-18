import React, { Component } from 'react'

class ContentItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.item.title}</h1>
                <p>{this.props.item.description}</p>
            </div>
        )
    }
}

export default ContentItem