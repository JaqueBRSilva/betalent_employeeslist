import { StyleSheet, View } from "react-native";
import AvatarImage from "../AvatarImage/AvatarImage";
import IconNotification from "../IconNotification/IconNotification";

export default function Header() {

    return (
        <View style={styles.headerContainer}>
            <AvatarImage />

            <IconNotification />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 68,
        marginBottom: 20,
    },
})