import React from 'react'
import { Text, View } from "react-native";
import { connect } from 'react-redux'

export const DashboardHome = () => {
  return (
    <>
     <View>
       <Text>DashboardHome</Text>
      </View> 
    </>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHome)
