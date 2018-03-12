import { Notifications, Permissions } from 'expo';
import axios from 'axios';

let PUSH_ENDPOINT; //= ...some place

export default async () => {
  let previousToken = await AsyncStorage.getItem('pushtoken')
  console.log(previousToken);
  if (previousToken) {
    return;
  } else {
    let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS)
  if (status !== 'granted') return;

  let token = await Notifications.getExpoPushTokenAsync();
  await axios.post(PUSH_ENDPOINT, {token: {token}});
  AsyncStorage.setItem('pushtoken', token)
  }
}
