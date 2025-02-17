import { COLORS } from "@/src/styles/colors";
import { FONTS } from "@/src/styles/fonts";
import { DataTypes } from "@/src/types/DataTypes";
import { formatAdmissionDate } from "@/src/utils/formatAdmissionDate";
import { formatPhoneNumber } from "@/src/utils/formatPhoneNumber";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function TableData(props: DataTypes) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    return (
        <View style={styles.rowDataContent}>
            <View style={styles.rowInfos}>
                <View style={styles.groupColumns}>
                    <Image
                        style={styles.imageProfile}
                        source={{ uri: props.image }}
                    />
                    <Text style={styles.employeesName}>
                        {props.name}
                    </Text>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setIsExpanded(!isExpanded)}
                    >
                        <Entypo
                            name={isExpanded ? "chevron-thin-up" : "chevron-thin-down"}
                            size={24}
                            color={COLORS.BLUE_PRIMARY}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {isExpanded &&
                <View style={styles.menuContent}>
                    <View style={styles.groupFields}>
                        <Text style={styles.label}>
                            Cargo
                        </Text>
                        <Text style={styles.value}>
                            {props.hiddenProps.job}
                        </Text>
                    </View>

                    <View style={styles.groupFields}>
                        <Text style={styles.label}>
                            Data de admissão
                        </Text>
                        <Text style={styles.value}>
                            {formatAdmissionDate(props.hiddenProps.admission_date)}
                        </Text>
                    </View>

                    <View style={styles.groupFields}>
                        <Text style={styles.label}>
                            Telefone
                        </Text>
                        <Text style={styles.value}>
                            {formatPhoneNumber(props.hiddenProps.phone)}
                        </Text>
                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    rowDataContent: {
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 13,

        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: COLORS.GRAY_10,
    },

    rowInfos: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
    },

    groupColumns: {
        flexDirection: 'row',
        gap: 24,
    },

    imageProfile: {
        width: 34,
        height: 34,
        resizeMode: 'cover',
        borderRadius: 17,
    },

    employeesName: {
        fontFamily: FONTS.HELVETICA,
        fontSize: 16,
        textAlign: "left",
        textAlignVertical: "center"
    },

    button: {
        alignSelf: "flex-end",
    },

    // MENU DROPDOWN
    menuContent: {
        flexDirection: 'column',
        paddingVertical: 15,
    },

    dropdownMenuOpen: {
        flexDirection: 'column',
    },

    groupFields: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,

        borderBottomWidth: 1,
        borderBottomColor: COLORS.GRAY_05,
        borderStyle: 'dotted'
    },

    label: {
        fontFamily: FONTS.HELVETICA_BOLD,
        fontSize: 16,
    },

    value: {
        fontFamily: FONTS.HELVETICA,
        fontSize: 16
    }
})