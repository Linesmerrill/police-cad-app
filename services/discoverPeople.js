import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "https://police-cad-app-api-bc6d659b60b3.herokuapp.com";

export async function fetchDiscoverPeopleData() {
  const token = await AsyncStorage.getItem("token");
  const email = await AsyncStorage.getItem("email");
  console.debug("[fetchDiscoverPeopleData] token", token);
  const response = await fetch(
    `${API_URL}/api/v1/users/discover-people?email=${email}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    console.error(
      response.status,
      `Failed to fetch data for /api/v1/users/discover-people?email=${email}`
    );
    return [];
  }

  const data = await response.json();
  if (data === null || data === undefined) {
    console.error("No data found");
    return [];
  } else {
    console.debug("[fetchDiscoverPeopleData] data", data);
    return data;
  }
}
