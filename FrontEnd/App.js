import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home'
import Nav from "./Navigation/Nav";
import Header from "./Components/Header";
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import * as eva from "@eva-design/eva";

import HamburgerIcon from "./Components/HamburgerIcon";



export default function App() {



  return (

      <>

        <Nav/>


      </>

  );
}

const styles = StyleSheet.create({});
