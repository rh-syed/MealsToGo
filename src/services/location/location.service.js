import camelize from "camelize";
export const locationRequest = (searchTerm) => {
  return fetch(
    `http://localhost:5000/mealstogo-798f9/us-central1/geoCode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
