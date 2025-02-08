import {View, Text, InteractionManager} from 'react-native'
import React from 'react'
import HugeComponent from "react-demo/src/components/HugeComponent";

export default function Index() {
    return (
        <View>
            <Text style={
                {
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 30,
                }
            }>Learning Arrays</Text>
            <HugeComponent/>
        </View>
    )
}
