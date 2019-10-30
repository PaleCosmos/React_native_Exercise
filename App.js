import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.redView}>
        <Text style={styles.text}>이것은 빨강색</Text>
      </View>
      <View style={styles.greenView} >
      <Text style={styles.text}>이것은 초록색</Text>
      </View>
      <View style={styles.blueView} >
      <Text style={styles.text}>이것은 파랑색</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccfafd',
    justifyContent: 'center',
  },

  text: {
    color: "white",
    textAlign:"center",
    alignContent: "center",
    fontSize: 20
  },

  redView: {
    flex: 1,
    justifyContent: 'center',
    textAlign:"center",
    backgroundColor: "red"
  },
  greenView: {
    flex: 1,
    justifyContent: 'center',
    textAlign:"center",
    backgroundColor: "green"
  },
  blueView: {
    flex: 1,
    justifyContent: 'center',
    textAlign:"center",
    backgroundColor: "blue"
  }
});
