import AsyncStorage from "@react-native-async-storage/async-storage";
import base64 from "react-native-base64";

const API_URL = "https://police-cad-app-api-bc6d659b60b3.herokuapp.com";

export const login = async (username, password) => {
  const payload = {
    username,
    password,
  };

  var encoded = base64.encode(`${username}:${password}`);

  try {
    const response = await fetch(`${API_URL}/api/v1/auth/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${encoded}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      await AsyncStorage.setItem("token", data.token);
      return { success: true, message: "" };
    } else {
      return { success: false, message: data.message || "Login failed" };
    }
  } catch (error) {
    return { success: false, message: "An error occurred. Please try again." };
  }
};

export const fetchProtectedData = async () => {
  const token = await AsyncStorage.getItem("token");

  try {
    const response = await fetch(`${API_URL}/api/v1/civilians`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data: data.message };
    } else {
      return {
        success: false,
        message: data.message || "Failed to fetch data",
      };
    }
  } catch (error) {
    return { success: false, message: "An error occurred. Please try again." };
  }
};

export const logout = async () => {
  await AsyncStorage.removeItem("token");
};

export const createAccount = async (emailAddress, password, username) => {
  try {
    const response = await fetch(`${API_URL}/api/v1/user/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailAddress,
        password: password,
        username: username,
      }),
    });

    const data = await response.json();
    if (response.code === 201) {
      return { success: true, data: data };
    } else {
      return { success: false, message: data.Response.Message };
    }
  } catch (error) {
    // we get back an empty body which triggers this error, but it really isn't an error
    return { success: true, message: null };
  }
};

export async function checkEmailExists(emailAddress) {
  try {
    const response = await fetch(`${API_URL}/api/v1/user/check-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailAddress,
      }),
    });

    const data = await response.json();
    if (response.code === 201) {
      return { success: true, data: data };
    } else {
      return { success: false, message: data.Response.Message };
    }
  } catch (error) {
    // we get back an empty body which triggers this error, but it really isn't an error
    return { success: true, message: null };
  }
}
