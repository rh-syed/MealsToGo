import React, { useContext, useEffect, useState } from "react";
import { Map } from "../../../utils/map-screen-styles";
import { MapSearch } from "../components/map.search.component";
import { SafeArea } from "../../../utils/safe-area.utils";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Callout, Marker } from "react-native-maps";
import { MapCallOut } from "../components/map-callout.component";
import { RESTAURANT_DETAILS } from "../../../infrastrucutre/navigation/utils/navigation-keys";
export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northEastLat = viewport.northeast.lat;
    const southWestLat = viewport.southwest.lat;

    setLatDelta(northEastLat - southWestLat);
  }, [location, viewport]);
  return (
    <>
      <MapSearch />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() => {
                  navigation.navigate(RESTAURANT_DETAILS, { restaurant });
                }}
              >
                <MapCallOut restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
