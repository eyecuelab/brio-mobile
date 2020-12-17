import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { VictoryPie } from "victory-native";
import { Svg, Circle } from "react-native-svg";
import SvgEyeballPie from "../../../svg_assets/SvgEyeballPie";

export const SadPieChart = (props) => {
  const { eyeBallColor } = props;
  const navigation = useNavigation();
  const exerciseGrey = "#8A8A8A";
  const musicGrey = "#5E5E5E";
  const socialGrey = "#BEBEBE";
  const colorScale = [exerciseGrey, musicGrey, socialGrey];
  const navs = ["CheckinExercise", "CheckinMusic", "CheckinSocial"];

  const displayPieChart = () => {
    const data = [
      { x: "Exercise", y: 1 },
      { x: "Music", y: 1 },
      { x: "Social", y: 1 },
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
          <Circle cx={200} cy={200} r={110} fill="#fff" />

          {displayPieChart()}
        </Svg>
        {showEyeball()}
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    eyeBallColor: state.user.eyeColor,
  };
};

export default connect(mapStateToProps)(SadPieChart);
