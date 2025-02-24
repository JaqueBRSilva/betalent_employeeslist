import { FONTS } from "@/src/styles/fonts"
import { StyleSheet, Text, View } from "react-native"

interface ITitleScreen {
    screenName: string
}

export default function TitleScreen(props: ITitleScreen) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                {props.screenName}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        marginBottom: 15,
    },

    title: {
        fontFamily: FONTS.HELVETICA_BOLD,
        fontSize: 20,
    }
})