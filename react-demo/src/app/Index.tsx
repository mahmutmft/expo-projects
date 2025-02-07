import {View, Text} from 'react-native'
import React from 'react'
import TextComponenet from "@/components/TextComponent";
import ViewComponent from "@/components/ViewComponent";
import ButtonCompomemt from "@/components/ButtonCompomemt";

export default function Index() {
    return (
        <View>
            <TextComponenet/>
            <ViewComponent/>
            <ButtonCompomemt/>
        </View>
    )
}
