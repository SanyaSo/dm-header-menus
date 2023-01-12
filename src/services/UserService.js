import httpClient from "./httpClient";

export default async function getUserInfo() {
  try {
    const data = await httpClient.get('/profile');
    return data.data.data;
  } catch (err) {
    console.log(err);
  }
}
