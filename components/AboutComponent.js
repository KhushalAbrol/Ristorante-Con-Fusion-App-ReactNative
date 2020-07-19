import React, {Component} from 'react';
import { Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
      leaders: state.leaders
    }
  }

const RenderLeader = ({item, index}) => {
    
    return(
        <ListItem 
            key={index}
            title={item.name}
            subtitle={item.description}
            subtitleNumberOfLines={15}
            hideChevron={true}
            leftAvatar={{source: {uri: baseUrl + item.image}}}
        />
    )
}

const History = () => {
    return(
        <Text>
            Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.

            The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
        </Text> 
    )
}

class About extends Component{
    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        return(
            <ScrollView>
                <Card title="Our History">                    
                    <History />
                </Card>
                <Card title="Corporate Leadership">
                    <FlatList
                    data={this.props.leaders.leaders}
                    renderItem={renderLeader}
                    keyExtractor={item => item.id.toString()}
                    />
                    <RenderLeader leaders={this.state.leaders}/>
                </Card>
            </ScrollView>            
        );
    }
}

export default connect(mapStateToProps)(About);