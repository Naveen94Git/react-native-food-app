import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, ScrollView } from "react-native"

import SearchBar from "../components/SearchBar"
import yelp from "../api/yelp"
import useResults from "../hooks/useResults"
import ResultsList from "../components/ResultsList"

const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) => {
    //price === "$" || "$$" || "$$$"
    return results.filter((result) => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)}></SearchBar>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice("$")} title="cost effective"></ResultsList>
        <ResultsList results={filterResultsByPrice("$$")} title="bit pricier"></ResultsList>
        <ResultsList results={filterResultsByPrice("$$$")} title="big spender"></ResultsList>
      </ScrollView>
    </>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
