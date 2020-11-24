import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export const ConvoDashBar = () => {
  return (
    <>
    <View>
      <Text>Hello</Text>
    </View>
  </>
  )
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps)(ConvoDashBar)
