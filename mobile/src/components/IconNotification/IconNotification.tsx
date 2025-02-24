import { COLORS } from "@/src/styles/colors"
import { FONTS } from "@/src/styles/fonts"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function IconNotification() {
    const BELL_ICON = require("@/src/imgs/bell-notification.png")

    return (
        <TouchableOpacity
            style={styles.bellButton}
            onPress={() => { }}
        >
            <View>
                <View style={styles.notificationBadgeView}>
                    <Text style={styles.notificationNumber}>
                        02
                    </Text>
                </View>

                <Image
                    style={styles.bellImage}
                    source={BELL_ICON}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bellButton: {
        marginRight: 5,
    },

    bellImage: {
        width: 34,
        height: 34,
        resizeMode: "contain",
    },

    notificationBadgeView: {
        backgroundColor: COLORS.BLUE_PRIMARY,
        alignItems: "center",
        justifyContent: "center",
        height: 21,
        width: 21,
        borderRadius: 44,

        position: "absolute",
        top: -4,
        right: -4,
        zIndex: 99
    },

    notificationNumber: {
        fontFamily: FONTS.HELVETICA_BOLD,
        fontSize: 12,
        color: COLORS.WHITE,
    }
})
