import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

export const RestaurantMenu = () => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <List.Section>
      <List.Accordion
        title="Breakfast"
        left={(props) => <List.Icon {...props} icon="bread-slice" />}
        expanded={breakfastExpanded}
        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
      >
        <ScrollView>
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </ScrollView>
      </List.Accordion>
      <List.Accordion
        title="Lunch"
        left={(props) => <List.Icon {...props} icon="food" />}
        expanded={lunchExpanded}
        onPress={() => setLunchExpanded(!lunchExpanded)}
      >
        <ScrollView>
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </ScrollView>
      </List.Accordion>
      <List.Accordion
        title="Dinner"
        left={(props) => (
          <List.Icon {...props} icon="food-takeout-box-outline" />
        )}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExpanded(!dinnerExpanded)}
      >
        <ScrollView>
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </ScrollView>
      </List.Accordion>
      <List.Accordion
        title="Drinks"
        left={(props) => <List.Icon {...props} icon="food-fork-drink" />}
        expanded={drinksExpanded}
        onPress={() => setDrinksExpanded(!drinksExpanded)}
      >
        <ScrollView>
          <List.Item title="Coke" />
          <List.Item title="Sandia Bebida" />
          <List.Item title="Smoothies" />
        </ScrollView>
      </List.Accordion>
    </List.Section>
  );
};
