export const parseJsonResult = (placeData: any) => {
  if (!placeData) {
    return;
  }

  const categories = placeData[13];

  // Some places don't have any address
  const addressDetail = placeData[183]?.[1];
  const addressParsed = {
    neighborhood: addressDetail?.[1],
    street: addressDetail?.[2],
    city: addressDetail?.[3],
    postalCode: addressDetail?.[4],
    state: addressDetail?.[5],
    countryCode: addressDetail?.[6],
  };

  const coordsArr = placeData[9];
  const coords = coordsArr
    ? { lat: coordsArr[2], lng: coordsArr[3] }
    : { lat: null, lng: null };

  return {
    placeId: placeData[78],
    coords,
    addressParsed,
    website: placeData[7]?.[0] || null,
    categories,
    title: placeData[11],
  };
};
