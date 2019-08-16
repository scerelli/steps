import React, { Component } from 'react'
import { Text, SafeAreaView } from 'react-native'
import Fitness from "@ovalmoney/react-native-fitness"



export default class Steps extends Component {
  async componentDidMount() {
    const authorized = await Fitness.requestPermissions();
    console.log(authorized)
    if (authorized) {
      const res = Fitness.getSteps({
        startDate: new Date("08/12/2019"),
        endDate: new Date("08/13/2019"),
      });
      console.log(res);
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Text style={{ color: "black" }}> textInComponent </Text>
      </SafeAreaView>
    )
  }
}
