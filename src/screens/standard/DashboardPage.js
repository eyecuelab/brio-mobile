import React from "react";
import { View } from "react-native";
import bg from "../../styles/ScreenStyle";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

function DashboardPage() {
  return (
    <>
      <View style={bg.robin}>
        <Card.Title
          subtitle="Welcome back! You are doing great!"
          left={(props) => (
            <Icon name="grin-stars" size={30} color="#900" {...props} />
          )}
        />
      </View>
    </>
  );
}
export default DashboardPage;
