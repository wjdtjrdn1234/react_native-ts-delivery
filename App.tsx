/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Text, View, Pressable} from 'react-native';
import {useCallback} from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  //flex는 웹이랑 다르게 세로가 기준 ,flex:1 비율 ,justifyContent: 세로기준 ,alignItems: 가로기준
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
      }}>
      <Pressable
        onPress={onClick}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: "blue",
        }}>
        <Text>Home Screen</Text>
      </Pressable>
    </View>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable onPress={onClick}>
        <Text>Details Screen</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈화면', headerShown: false}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        {/* <Stack.Screen name="Details">
          {props => <DetailsScreen {...props} />}
        </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// safe-area가 적용되어 있음(설명)
// react-navigation로 router
// NavigationContainer: 내비게이션 상태 저장
// Navigator 안에 Screen들 배치(screen들을 묶어줌)
// Screen name 대소문자 상관 없음, component는 보통 두 가지 방식 사용(컴포넌트 그 자체 vs Render Callback)
// props로 navigation과 route가 전달됨
// Pressable, Button, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback (button 종류)
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
