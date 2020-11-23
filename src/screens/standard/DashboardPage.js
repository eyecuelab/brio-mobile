import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../rdx/actions";
import bg from "../../styles/ScreenStyle";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

function DashboardPage(props) {
  const { dispatch, allBlockers } = props;

  useEffect(() => {
    const action = actions.loadedBlockers();
    dispatch(action);
    return () => {}
  }, [])

  return (
    <>
    {console.log("LOADED BLOCKERS", allBlockers)}
      <View style={bg.robin}>
        <Card.Title
          subtitle="Welcome back! You are doing great!"
          left={(props) => (
            <Icon name="grin-stars" size={30} color="#900" {...props} />
          )}
        />
        <View>
          <Text>Conversation points: </Text>
        </View>
      </View>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
  }
}
const DashboardPageConnected = connect(mapStateToProps)(DashboardPage)
export default DashboardPageConnected;
