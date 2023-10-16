import React from "react";
import { Map } from "../../../utils/map-screen-styles";
import { MapSearch } from "../components/map.search.component";
import { SafeArea } from "../../../utils/safe-area.utils";
export const MapScreen = () => {
  return (
    <>
      <SafeArea>
        <MapSearch />
        <Map />
      </SafeArea>
    </>
  );
};
