import { COLORS } from "@/src/styles/colors";
import { FONTS } from "@/src/styles/fonts";
import Octicons from '@expo/vector-icons/Octicons';
import { StyleSheet, Text, View } from "react-native";

export default function TableHeader() {
    return (
        <View style={styles.titlesContainer}>
            <View style={styles.groupTitlesContainer}>
                <Text style={styles.headerTitles}>
                    Foto
                </Text>
                <Text style={styles.headerTitles}>
                    Nome
                </Text>
            </View>

            <View style={styles.dotContainer}>
                <Octicons name="dot-fill" size={20} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titlesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingLeft: 15,
        backgroundColor: COLORS.BLUE_10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.GRAY_10,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },

    groupTitlesContainer: {
        flexDirection: 'row',
        gap: 24,
    },

    headerTitles: {
        fontFamily: FONTS.HELVETICA_BOLD,
        fontSize: 16,
    },

    dotContainer: {
        paddingRight: 21,
    },
})