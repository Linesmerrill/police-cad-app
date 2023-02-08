import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
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
