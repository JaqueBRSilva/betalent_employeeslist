import { COLORS } from "@/src/styles/colors"
import { FONTS } from "@/src/styles/fonts"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default function AvatarImage() {

    return (
        <TouchableOpacity style={styles.profileArea}>
            <Text style={styles.profileName}>
                CG
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    profileArea: {
        backgroundColor: COLORS.GRAY_05,
        height: 46,
        width: 46,
        borderRadius: 23,
        alignItems: "center",
        justifyContent: "center"
    },

    profileName: {
        fontFamily: FONTS.HELVETICA,
        fontSize: 16,
    }
})