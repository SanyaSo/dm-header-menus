import httpClient from "./httpClient";

export default async function getUserFavoriteCount() {
  try {
    const data = await httpClient.get('/housing/count?isFavorite=true');
    return data.data.data;
  } catch (err) {
    console.log(err);
  }
}
