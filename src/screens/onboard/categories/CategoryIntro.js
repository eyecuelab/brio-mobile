import React from "react";
import { View, Text } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import CategoryList from "./CategoryList";

function Category() {
  const RightAction = () => {
    return <CategoryList />;
  };
  return (
    <Swipeable
      renderRightActions={RightAction}
      onSwipeableRightOpen={() => console.log("OPENING")}
    >
      <View>
        <View>
          <Text>
            To get started on anything, you sometimes need a few categories to
            generate ideas.
          </Text>
        </View>
        <View>
          <Text>Let’s see some popular areas we can start focusing on now...</Text>
        </View>
        <View>
          <Text>Swipe here</Text>
        </View>
      </View>
    </Swipeable>
  );
}

export default Category;
