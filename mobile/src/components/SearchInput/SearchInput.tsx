import { COLORS } from "@/src/styles/colors";
import { FONTS } from "@/src/styles/fonts";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import TitleScreen from "../TitleScreen/TitleScreen";

interface ISearchInput {
    queryValue: string
    onQueryChangeText: (txt: string) => void
}

export default function SearchInput(props: ISearchInput) {
    return (
        <>
            <TitleScreen screenName="Funcionários" />

            <View style={styles.inputContainer}>
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => props.onQueryChangeText}
                >
                    <MaterialCommunityIcons name="magnify" size={24} color={COLORS.BLACK} />
                </TouchableOpacity>

                <TextInput
                    placeholder="Pesquisar"
                    placeholderTextColor={COLORS.BLACK}
                    enterKeyHint="search"
                    value={props.queryValue}
                    onChangeText={props.onQueryChangeText}
                    style={styles.txtInput}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: 'auto',
        flexDirection: 'row',
        backgroundColor: COLORS.GRAY_05,
        borderRadius: 40,
        marginBottom: 24,
        paddingLeft: 15,
        paddingVertical: 5,
    },

    txtInput: {
        fontFamily: FONTS.HELVETICA,
        fontSize: 16,
    },

    iconContainer: {
        justifyContent: "center",
    },
})