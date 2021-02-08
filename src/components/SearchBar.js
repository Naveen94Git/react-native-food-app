import React from "react"
import { StyleSheet, TextInput, View } from "react-native"
import { Feather } from "@expo/vector-icons"

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}></Feather>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        style={styles.inputStyle}
        placeholder="Search"
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      ></TextInput>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#b2b2b2",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginBottom:10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center"
  }
})
