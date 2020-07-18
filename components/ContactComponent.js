import React, {Component} from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, CardBody, CardHeader } from 'react-native-elements';

const ContactCard =
            <Card>
                <CardHeader>
                    <Text>
                        Contact Information
                    </Text>
                </CardHeader>
                <CardBody>
                    <Text>
                        121, Clear Water Bay Road
                        Clear Water Bay, Kowloon
                        HONG KONG
                        Tel: +852 1234 5678
                        Fax: +852 8765 4321
                        Email:confusion@food.net
                    </Text>
                </CardBody>
            </Card>

class Contact extends Component{

    static navigationOptions = {
        title: 'Contact Us'
    };
    
    render() {
        return(
            <ScrollView>
                {ContactCard}
            </ScrollView>
        );
    }
}

export default Contact;