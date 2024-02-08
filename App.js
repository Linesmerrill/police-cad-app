import {
  NavigationContainer,
  StackActions,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TailwindProvider } from "tailwindcss-react-native";
import AccountScreen from "./screens/AccountScreen";
import CivilianListScreen from "./screens/CivilianListScreen";
import CivilianScreen from "./screens/CivilianScreen";
import CommunitiesScreen from "./screens/CommunitiesScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import CreateCivilianScreen from "./screens/CreateCivilianScreen";
import CreateFirearmScreen from "./screens/CreateFirearmScreen";
import CreateVehicleScreen from "./screens/CreateVehicleScreen";
import DispatchScreen from "./screens/DispatchScreen";
import FirearmListScreen from "./screens/FirearmListScreen";
import FireEmsScreen from "./screens/FireEmsScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import PoliceScreen from "./screens/PoliceScreen";
import VehicleListScreen from "./screens/VehicleListScreen";
import CreateAccountScreen2 from "./screens/CreateAccountScreen2";
import CreateAccountScreen3 from "./screens/CreateAccountScreen3";
import {
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  RectangleStackIcon,
  UserGroupIcon,
  RectangleGroupIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import SearchScreen from "./screens/SearchScreen";
import ChatScreen from "./screens/ChatScreen";
import MenuScreen from "./screens/MenuScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Communities"
        component={CommunitiesScreen}
        options={{
          tabBarLabel: "Communities",
          tabBarIcon: ({ color, size }) => (
            <RectangleGroupIcon name="communities" color={color} size={size} />
          ),
        }}
      />
      {/* add a search tab with magnifying glass icon */}
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MagnifyingGlassIcon name="search" color={color} size={size} />
          ),
        }}
      />
      {/* tab for chat screen */}
      <Tab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size }) => (
            <ChatBubbleLeftIcon name="chats" color={color} size={size} />
          ),
        }}
      />
      {/* tab for Menu */}
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color, size }) => (
            <Bars3Icon name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <TailwindProvider>
        <Stack.Navigator>
          {/* Screens */}
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccountScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateAccount2"
            component={CreateAccountScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateAccount3"
            component={CreateAccountScreen3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Civilian" component={CivilianScreen} />
          <Stack.Screen
            name="CreateCivilian"
            component={CreateCivilianScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name="CreateVehicle"
            component={CreateVehicleScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name="CreateFirearm"
            component={CreateFirearmScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen name="CivilianList" component={CivilianListScreen} />
          <Stack.Screen name="VehicleList" component={VehicleListScreen} />
          <Stack.Screen name="FirearmList" component={FirearmListScreen} />
          <Stack.Screen name="Police" component={PoliceScreen} />
          <Stack.Screen name="Dispatch" component={DispatchScreen} />
          <Stack.Screen name="FireEms" component={FireEmsScreen} />
          <Stack.Screen name="Communities" component={CommunitiesScreen} />

          <Stack.Screen
            name="Account"
            component={AccountScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
