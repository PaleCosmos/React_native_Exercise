import React from 'react';
import Loading from "./Loading"
import * as Location from "expo-location"
import { Alert } from "react-native"

export default class App extends React.Component {

  state = {
    isLoading: true
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      //this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}