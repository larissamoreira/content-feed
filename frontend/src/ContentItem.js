import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap'

class ContentItem extends Component {
    render() {
        return (
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{this.props.item.title}</CardTitle>
                    <CardText>{this.props.item.description}</CardText>
                </CardBody>
            </Card>
        )
    }
}

export default ContentItem