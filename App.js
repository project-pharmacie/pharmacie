import { NavigationContainer } from "@react-navigation/native";
import DrawerContent from "./Drawer/DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutNavigation from "./Navigation/GlobalNavigation";
import { NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import GlobalNavigation from "./Navigation/GlobalNavigation";

const Drawer = createDrawerNavigator();
function App() {
  // console.log("Aa", Drawer.Navigator);
  return (
    <Drawer.Navigator
      screenOption={{ headerShow: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Menu" component={AboutNavigation} />
    </Drawer.Navigator>
  );
}
// export default  App ;
// export default App;
export default () => {
  const [logged, setLogged] = useState(true);

  return (
    <NavigationContainer>
      {/* // <GlobalNavigation /> */}
      {logged ? <App /> : null}
    </NavigationContainer>
  );
};
