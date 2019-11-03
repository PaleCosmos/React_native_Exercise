import React from 'react';
import Loading from "./Loading"
import * as Location from "expo-location"
import { Alert } from "react-native"
import axios from "axios";
import Weather from "./Weather"

const API_KEY = "fd29906bce9f84f7b0759d7e6e5a49e5";

export default class App extends React.Component {

  state = {
    isLoading: true
  }
  getWeather = async (latitude, longitude) => {
    const { data: { main: { temp }, weather } } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    )

    this.setState({
      isLoading: false, temp, condition: weather[0].main
    });
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
     
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp * 10) / 10} condition={condition} />;
  }
}