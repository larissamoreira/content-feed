import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap'

const ContentItem = ( {item} ) => (
    <Card>
        <CardImg top width="100%" src={item.image} alt="Card image cap" />
        <CardBody>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.description}</CardText>
        </CardBody>
    </Card>
)

export default ContentItem