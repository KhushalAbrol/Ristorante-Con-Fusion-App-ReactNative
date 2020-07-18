import React, {Component} from 'react';
import { Text, FlatList } from 'react-native';
import { Card, CardBody, CardHeader, ListItem } from 'react-native-elements';
import {LEADERS} from '../shared/leaders'

const RenderLeader = ({leaders}) => {
    
    return(
        <ListItem 
            key={leaders.id}
            title={leaders.name}
            subtitle={item.description}
            hideChevron={true}
            leftAvatar={{ source: require('./images/alberto.png')}}
        />
    )
}

class Aboutus extends Component{

    constructor(props) {
        super(props);
        this.state = {
          leaders: LEADERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        return(
            <FlatList>
                <Card>
                    <CardHeader>
                        <Text>
                            Our History
                        </Text>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.

                            The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                        </Text>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        Corporate Leadership
                    </CardHeader>
                    <CardBody>
                        <RenderLeader leaders={this.state.leaders}/>
                    </CardBody>
                </Card>
            </FlatList>
            
        );
    }
}

export default Aboutus;