const BASE_URL = "http://localhost:3000/api";

export const getAllVehicles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/cars`, {
      method: "GET",
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};
