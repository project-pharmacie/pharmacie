import { NavigationContainer } from "@react-navigation/native";
import DrawerContent from "./Drawer/DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutNavigation from "./Navigation/GlobalNavigation";
import { NativeBaseProvider } from "native-base";
import React, { useState } from "react";

const Drawer = createDrawerNavigator();
function App() {
  const [logged, setLogged] = useState(false);
  return (
    <NativeBaseProvider>
      <Drawer.Navigator
        screenOption={{ headerShow: false }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Menu" component={AboutNavigation} />
      </Drawer.Navigator>
    </NativeBaseProvider>
  
)}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
