import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList172364Navigator from '../features/ArticleList172364/navigator';
import Maps172351Navigator from '../features/Maps172351/navigator';
import ArticleList172346Navigator from '../features/ArticleList172346/navigator';
import Maps172333Navigator from '../features/Maps172333/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList172364: { screen: ArticleList172364Navigator },
Maps172351: { screen: Maps172351Navigator },
ArticleList172346: { screen: ArticleList172346Navigator },
Maps172333: { screen: Maps172333Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
