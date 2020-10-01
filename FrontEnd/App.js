import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accueil from './Components/Accueil'
import Nav from "./Navigation/Nav";
import Header from "./Components/Header";

export default function App() {
  return (
      <>
        <Header/>
        <Nav/>

      </>
  );
}

const styles = StyleSheet.create({});
