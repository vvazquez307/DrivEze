import { BASE_URL } from "./index";

export const getAllTags = async () => {
  try {
    const response = await fetch(`${BASE_URL}tags/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const carsByTags = async (tagId) => {
  try {
    const response = await fetch(`${BASE_URL}car-tags/cars-by-tag/${tagId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const tagsByCars = async (carId) => {
  try {
    const response = await fetch(`${BASE_URL}car-tags/tags-by-car/${carId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
