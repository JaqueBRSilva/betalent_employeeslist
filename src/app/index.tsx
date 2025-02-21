import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";
import SearchInput from "../components/SearchInput/SearchInput";
import TableData from "../components/TableData/TableData";
import TableHeader from "../components/TableHeader/TableHeader";
import { COLORS } from "../styles/colors";
import { DataTypes } from "../types/DataTypes";

export default function Index() {
  const [loading, setLoading] = useState(false)
  const [employees, setEmployees] = useState<[] | any>()
  const [keyword, setKeyword] = useState("")
  const [filteredResults, setFilteredResults] = useState()

  const getEmployeesList = () => {
    const URL_API = 'http://192.168.15.111:3000/employees'

    setLoading(true)

    fetch(URL_API)
      .then(response => {
        response.json()
          .then(data => {
            setEmployees(data)
            setLoading(false)
          })
      })

      .catch(error => {
        Alert.alert('Sem Acesso Ao Servidor', 'Não foi possível carregar a lista de funcionários.\n' +
          `\nVerifique a conexão e tente novamente.\n\n Erro: ${error}`, [
          {
            text: "Cancelar",
            style: 'cancel'
          },
          {
            text: 'Carregar Novamente',
            onPress: () => getEmployeesList()
          }
        ])
      })
  }

  useEffect(() => {
    getEmployeesList()
  }, [])

  useEffect(() => {
    if (keyword === '') {
      setFilteredResults(employees)

    } else {
      setFilteredResults(
        employees.filter(
          (item: DataTypes) =>
            item.name.toLowerCase().includes(keyword.toLowerCase()) ||
            item.job.toLowerCase().includes(keyword.toLowerCase()) ||
            item.phone.includes(keyword)
        )
      )
    }
  }, [keyword])


  return (
    <View style={indexStyles.defaultContainer}>
      <Header />

      <SearchInput
        queryValue={keyword}
        onQueryChangeText={(txt) => setKeyword(txt)}
      />

      {
        loading ?

          <Loading />

          :

          <FlatList
            data={filteredResults || employees}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical
            ListHeaderComponent={<TableHeader />}
            renderItem={({ item, index }) => {
              return (
                <TableData
                  id={item.id || index}
                  image={item.image}
                  name={item.name}
                  job={item.job}
                  admission_date={item.admission_date}
                  phone={item.phone}
                />
              )
            }}
          />
      }
    </View>
  );
}

const indexStyles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.WHITE
  },
})