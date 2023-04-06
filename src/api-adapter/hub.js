const BASE_URL = "https://driveze-api.onrender.com/api";

export const getAllHubs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/hubs`, {
      method: "GET",
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};
