import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { VictoryPie } from "victory-native";
import { Svg, Circle } from "react-native-svg";
import SvgEyeballPie from "../../../svg_assets/SvgEyeballPie";

export const PieChart = (props) => {
  const { allBlockers } = props;
  const navigation = useNavigation();

  const exerciseBlockers = allBlockers.filter(
    (blocker) => blocker.category === "exercise"
  );
  const musicBlockers = allBlockers.filter(
    (blocker) => blocker.category === "music"
  );
  const socialBlockers = allBlockers.filter(
    (blocker) => blocker.category === "social"
  );
  const exerciseColor = "#D8A1D5";
  const musicColor = "#94D7B5";
  const socialColor = "#E0C45E";
  const colorScale = [exerciseColor, musicColor, socialColor];
  const navs = ["CheckinExercise", "CheckinMusic", "CheckinSocial"];

  const displayPieChart = () => {
    const data = [
      { x: "Exercise", y: exercisePts() },
      { x: "Music", y: musicPts() },
      { x: "Social", y: socialPts() },
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
          <SvgEyeballPie />
        </View>
      </>
    );
  };
  const exercisePts = () => {
    let currentExercisePts = 0;

    const completedBlockers = exerciseBlockers.filter(
      (blocker) => blocker.completedAt !== null
    );
    
    if (completedBlockers && completedBlockers.length > 0) {
      const currentExercisePtsArr = completedBlockers.map(
        (completedBlocker) => {
          return completedBlocker.points;
        }
      );
      currentExercisePts = currentExercisePtsArr.reduce((acc, cur) => {
        return acc + cur;
      });  
    }

    const completedSuggestions = completedBlockers.filter((suggestion) => suggestion.completedAt !== null)
    
    if (completedSuggestions && completedSuggestions.length > 0) {
      const currentSuggestionPtsArr = completedSuggestions.map(
        (completedSuggestion) => {
          return completedSuggestion.points;
        }
      );
      currentExercisePts = currentSuggestionPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });  
    }
    
    return currentExercisePts;
  };

  const musicPts = () => {
    const completedBlockers = musicBlockers.filter(
      (blocker) => blocker.completedAt !== null
    );
    let currentMusicPts = 0;
    if (completedBlockers && completedBlockers.length > 0) {
      const currentMusicPtsArr = completedBlockers.map((completedBlocker) => {
        return completedBlocker.points;
      });
      currentMusicPts = currentMusicPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      return currentMusicPts;
    }
  };

  const socialPts = () => {
    const completedBlockers = socialBlockers.filter(
      (blocker) => blocker.completedAt !== null
    );
    let currentSocialPts = 0;
    if (completedBlockers && completedBlockers.length > 0) {
      const currentSocialPtsArr = completedBlockers.map((completedBlocker) => {
        return completedBlocker.points;
      });
      currentSocialPts = currentSocialPtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      return currentSocialPts;
    }
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
          {/* <Circle cx={200} cy={200} r={110} fill="#fff"/> */}
          {displayPieChart()}
        </Svg>
        {showEyeball()}
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allBlockers: state.blockersState.blockers,
  };
};

export default connect(mapStateToProps)(PieChart);
