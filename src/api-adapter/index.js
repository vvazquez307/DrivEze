export const BASE_URL = "http://localhost:3000/api";

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

export const carsByTag = async (tagId) => {
  try {
    const response = await fetch(`${BASE_URL}/car`);
  } catch (error) {}
};

export const addCarToCart = async (userId, carId, price) => {
  try {
    const response = await fetch(`${BASE_URL}/cart/${userId}/${carId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, carId, price }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
