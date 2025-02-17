import { COLORS } from "@/src/styles/colors";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Loading() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator
                size={'large'}
                color={COLORS.GRAY_10}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        justifyContent: "center",
        alignContent: "center",
        minHeight: 350,
    },
})