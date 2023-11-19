/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const { geoCodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.geoCode = onRequest((request, response) => {
  geoCodeRequest(request, response);
});

exports.placesNearby = onRequest((request, response) => {
  placesRequest(request, response);
});
