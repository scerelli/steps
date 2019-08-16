import React, { Component } from 'react'
import { Text, View, DeviceEventEmitter } from 'react-native'
import Fitness from "@ovalmoney/react-native-fitness"



export default class Steps extends Component {
  componentDidMount() {
    console.log(Fitness);
    Fitness.requestPermissions()
      .then((authorized) => {
        debugger
        Fitness.getSteps({
          startDate: "08/12/2019",
          endDate: "08/13/2019",
        }).then(res => {
          console.log(res);
          debugger
        }).catch(ex => {
          debugger
        })
      })
      .catch((error) => {
        //Do something
      });

  }

  render() {
    return (
      <View>
        <Text style={{ color: "black" }}> textInComponent </Text>
      </View>
    )
  }
}
