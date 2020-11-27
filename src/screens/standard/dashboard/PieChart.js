import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { VictoryPie } from "victory-native";
import Svg from "react-native-svg";

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
  const navs = ["ExerciseCheck", "MusicCheck", "SocialCheck"]

  const displayPieChart = () => {
    const data = [
      { x: "Exercise", y: exercisePts() },
      { x: "Music", y: musicPts() },
      { x: "Social", y: socialPts() },
    ];

    return (
      <VictoryPie
        standalone={false}
        innerRadius={75}
        labelRadius={125}
        data={data}
        colorScale={colorScale}
        style={{ labels: { display: 'none' } }}
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
    );
  };

  const exercisePts = () => {
    const completedBlockers = exerciseBlockers.filter(
      (blocker) => blocker.completedAt !== null
    );
    let currentExercisePts = 0;
    if (completedBlockers && completedBlockers.length > 0) {
      const currentExercisePtsArr = completedBlockers.map(
        (completedBlocker) => {
          return completedBlocker.points;
        }
      );
      currentExercisePts = currentExercisePtsArr.reduce((acc, cur) => {
        return acc + cur;
      });
      return currentExercisePts;
    }
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
      <View>
        <Svg
          width={350}
          height={350}
          viewBox="-15 50 400 400"
          style={{ width: "100%", height: "auto" }}
        >
          {displayPieChart()}
        </Svg>
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
