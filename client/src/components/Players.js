import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Players = (props) =>(


    <Card>
        <Card.Content>
            <h1>{props.players.name}</h1>
        </Card.Content>
        <Card.Content>
            <Feed>
                <Feed.Event>
                <h4>Searches:{props.players.searches}</h4>
                </Feed.Event>
                 <h2>Country:</h2>
                 <p>{props.players.country}</p>

            </Feed>
        </Card.Content>
    </Card>

)

export default Players;