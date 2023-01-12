import httpNotificationClient from './httpNotificationClient'


export default async function userHasNotification() {
  try {
    const data = await httpNotificationClient.get('/search?pageNum=1&pageSize=8');
    return data.data.data.length;
  } catch (err) {
    console.log(err)
  }

}
