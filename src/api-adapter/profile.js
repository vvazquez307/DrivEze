import { BASE_URL } from "./index";

export const getUser = async (token) => {
  console.log(token, "TOKEN LOG");
  try {
    const response = await fetch(`${BASE_URL}users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response, "USER RESPONSE");
    const result = await response.json();
    console.log(result, "USER RESULT");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (userId, fields, token) => {
  try {
    if (token) {
      const response = await fetch(`${BASE_URL}users`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(fields),
      });
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user");
  }
};
