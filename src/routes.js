import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: Login,
        navigationOptions: {
          title: "Login"
        }
      },

      Main: {
        screen: Main,
        navigationOptions: {
          title: "VaguinhApp"
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "Perfil no Github"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#FFF",
        headerBackTitleVisible: null,
        headerStyle: {
          backgroundColor: "#6d57a5"
        }
      }
    }
  )
);

export default Routes;
