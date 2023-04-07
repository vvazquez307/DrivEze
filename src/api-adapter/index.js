//export const BASE_URL = "https://driveze-api.onrender.com/api/";
export const BASE_URL = "http://localhost:3000/api/";

function makeHeaders(token) {
  const header = { "Content-Type": "application/json" };
  if (token) {
    header.Authorization = `Bearer ${token}`;
  }
  return header;
}

export const addCarToCart = async (token, carId, price) => {
  try {
    const response = await fetch(`${BASE_URL}/cart/`, {
      method: "POST",
      headers: makeHeaders(token),
      body: JSON.stringify({ carId, price }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};

//Car Endpoints
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
