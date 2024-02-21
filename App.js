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
import CommunityHomeScreen from "./screens/CommunityHomeScreen";
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
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
  UserIcon,
  StarIcon,
  ComputerDesktopIcon,
  MapIcon,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeIconSolid,
  RectangleGroupIcon as RectangleGroupIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconSolid,
  Bars3Icon as Bars3IconSolid,
  HomeModernIcon as HomeModernIconSolid,
  UserIcon as UserIconSolid,
  StarIcon as StarIconSolid,
  ComputerDesktopIcon as ComputerDesktopIconSolid,
  RectangleStackIcon as RectangleStackSolidIcon,
  MapIcon as MapIconSolid,
} from "react-native-heroicons/solid";
import SearchScreen from "./screens/SearchScreen";
import ChatScreen from "./screens/ChatScreen";
import MenuScreen from "./screens/MenuScreen";
import SearchPeopleScreen from "./screens/SearchPeopleScreen";
import NotificationScreen from "./screens/NotificationScreen";
import DepartmentsScreen from "./screens/DepartmentsScreen";
import MapScreen from "./screens/MapScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="SearchPeople" component={SearchPeopleScreen} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

function CommunitiesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Communities" component={CommunitiesScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <HomeIconSolid name="home-solid" color={color} size={size} />
            ) : (
              <HomeIcon name="home-outline" color={color} size={size} />
            ),
          tabBarActiveTintColor: "#FFF",
        }}
      />
      <Tab.Screen
        name="CommunitiesStack"
        component={CommunitiesStack}
        options={{
          tabBarLabel: "Communities",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <RectangleGroupIconSolid
                name="communities-solid"
                color={color}
                size={size}
              />
            ) : (
              <RectangleGroupIcon
                name="communities-outline"
                color={color}
                size={size}
              />
            ),
          tabBarActiveTintColor: "#FFF",
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <MagnifyingGlassIconSolid
                name="search-solid"
                color={color}
                size={size}
              />
            ) : (
              <MagnifyingGlassIcon
                name="search-outline"
                color={color}
                size={size}
              />
            ),
          tabBarActiveTintColor: "#FFF",
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatStack}
        options={{
          headerShown: false,
          tabBarLabel: "Chats",
          tabBarBadge: "4",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <ChatBubbleLeftRightIconSolid
                name="chats-solid"
                color={color}
                size={size}
              />
            ) : (
              <ChatBubbleLeftRightIcon
                name="chats-outline"
                color={color}
                size={size}
              />
            ),
          tabBarActiveTintColor: "#FFF",
        }}
      />
      {/* tab for Menu */}
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: "Menu",
          tabBarBadge: "",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Bars3IconSolid name="menu-solid" color={color} size={size} />
            ) : (
              <Bars3Icon name="menu-outline" color={color} size={size} />
            ),
          tabBarActiveTintColor: "#FFF",
        }}
      />
    </Tab.Navigator>
  );
}

function CommunityStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Community" component={CommunityHomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

function DepartmentsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Departments" component={DepartmentsScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

function CadTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="CommunityStack"
        component={CommunityStack}
        options={{
          tabBarLabel: "Community",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <HomeModernIconSolid
                name="home-solid"
                color={color}
                size={size}
              />
            ) : (
              <HomeModernIcon name="home-outline" color={color} size={size} />
            ),
          tabBarActiveTintColor: "#FFF",
        }}
      />
      <Tab.Screen
        name="DepartmentsStack"
        component={DepartmentsStack}
        options={{
          tabBarLabel: "Departments",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <RectangleStackSolidIcon
                name="rectangle-stack-solid"
                color={color}
                size={size}
              />
            ) : (
              <RectangleStackIcon
                name="rectangle-stack-outline"
                color={color}
                size={size}
              />
            ),
          tabBarActiveTintColor: "#FFF",
        }}
      />
      <Tab.Screen
        name="MapStack"
        component={MapStack}
        options={{
          tabBarLabel: "Map",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <MapIconSolid name="map-solid" color={color} size={size} />
            ) : (
              <MapIcon name="map-outline" color={color} size={size} />
            ),
          tabBarActiveTintColor: "#FFF",
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: "Menu",
          tabBarBadge: "",
          tabBarBadgeStyle: {
            backgroundColor: "red",
            minWidth: 14,
            minHeight: 14,
            maxWidth: 14,
            maxHeight: 14,
            borderRadius: 7,
          },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Bars3IconSolid name="menu-solid" color={color} size={size} />
            ) : (
              <Bars3Icon name="menu-outline" color={color} size={size} />
            ),
          tabBarActiveTintColor: "#FFF",
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
            name="CommunityHome"
            component={CadTabs}
            options={{ headerShown: false }}
          />

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
