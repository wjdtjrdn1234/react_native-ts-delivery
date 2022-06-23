import {useCallback} from 'react';
import SocketIOClient, {Socket} from 'socket.io-client';
import Config from 'react-native-config';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';

let socket: Socket | undefined;
const useSocket = (): [typeof socket, () => void] => {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  //소켓끊기
  const disconnect = useCallback(() => {
    if (socket && !isLoggedIn) {
      console.log(socket && !isLoggedIn, '웹소켓 연결을 해제합니다.');
      socket.disconnect();
      socket = undefined;
    }
  }, [isLoggedIn]);
  //소켓연결
  if (!socket && isLoggedIn) {
    console.log(!socket && isLoggedIn, '웹소켓 연결을 진행합니다.');
    socket = SocketIOClient(`${Config.API_URL}`, {
      transports: ['websocket'],
    });
  }
  return [socket, disconnect];
};

export default useSocket;
//socketio는 websocket과 다르게 옛날 브라우저도지원
