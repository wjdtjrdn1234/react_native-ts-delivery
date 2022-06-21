/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store';
import AppInner from './AppIneer';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppInner />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
//flex는 웹이랑 다르게 세로가 기준 ,flex:1 비율 ,justifyContent: 세로기준 ,alignItems: 가로기준
//부모요소 view를 만들고 flexDirection:'row' 웹처럼 동작

// safe-area가 적용되어 있음(설명)
// react-navigation로 router
// NavigationContainer: 내비게이션 상태 저장
// Navigator 안에 Screen들 배치(screen들을 묶어줌)
// Screen name 대소문자 상관 없음, component는 보통 두 가지 방식 사용(컴포넌트 그 자체 vs Render Callback)
// props로 navigation과 route가 전달됨
// Pressable, Button, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback (button 종류)
// ios,android 둘다 똑같이 적용시 Pressable이나 TouchableWithoutFeedback추천
// navigation.navigate로 이동 가능
// navigation.push로 쌓기 가능
// navigation.goBack으로 이전으로 이동
// params 추가 가능(params에 user같은 객체를 통째로 넣지 말기, id를 넣고 user는 글로벌 스토어에 넣기)
// Screen options.title: 제목
// Screen options에 함수를 넣어 route.params로 params 접근 가능
// navigation.setOptions로 옵션 변경 가능
// Navigator screenOptions로 공통 옵션 설정
// Screen options.headerShown로 헤더표시여부
// Screen options.headerTitle로 커스텀 컴포넌트
// Screen options.headerRight로 우측 버튼(useLayoutEffect)
