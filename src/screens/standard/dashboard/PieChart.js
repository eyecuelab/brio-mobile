import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { VictoryPie } from "victory-native";
import { Svg, Circle } from "react-native-svg";
import SvgEyeballPie from "../../../svg_assets/SvgEyeballPie";

export const PieChart = (props) => {
  const { catPoints, eyeBallColor } = props;
  const navigation = useNavigation();

  const exerciseColor = "#D8A1D5";
  const musicColor = "#94D7B5";
  const socialColor = "#E0C45E";
  const colorScale = [exerciseColor, musicColor, socialColor];
  const navs = ["CheckinExercise", "CheckinMusic", "CheckinSocial"];

  const displayPieChart = () => {
    const data = [
      { x: "Exercise", y: catPoints.exercise },
      { x: "Music", y: catPoints.music },
      { x: "Social", y: catPoints.social },
    ];

    return (
      <>
        <VictoryPie
          standalone={false}
          innerRadius={100}
          labelRadius={125}
          data={data}
          colorScale={colorScale}
          style={{ labels: { display: "none" } }}
          events={[
            {
              target: "data",
              eventHandlers: {
                onPressIn: () => {
                  return [
                    {
                      target: "data",
                      mutation: (dataProps) => {
                        navigation.navigate(navs[dataProps.index]);
                        return {};
                      },
                    },
                  ];
                },
                onPressOut: () => {},
              },
            },
          ]}
        />
      </>
    );
  };

  const showEyeball = () => {
    return (
      <>
        <View style={{ position: "absolute" }}>
          <SvgEyeballPie eyeColor={eyeBallColor} />
        </View>
      </>
    );
  };

  return (
    <>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Svg
          width={300}
          height={300}
          viewBox="0 0 400 400"
          style={{ width: "100%", height: "auto" }}
        >
          <Circle cx={200} cy={200} r={120} fill="#fff" />
          {displayPieChart()}
        </Svg>
        {showEyeball()}
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    catPoints: state.blockersState.currentPoints,
    eyeBallColor: state.user.eyeColor,
  };
};

export default connect(mapStateToProps)(PieChart);
