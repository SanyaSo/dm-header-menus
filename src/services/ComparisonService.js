import httpClient from "./httpClient";

export default async function getUserComparisonCount() {
  try {
    const data = await httpClient.get('/housing/count?isComparison=true');
    return data.data.data;
  } catch (err) {
    console.log(err);
  }
}
