import { createDrawerNavigator } from '@react-navigation/drawer';
import Explorer from './Explorer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Explorer" component={Explorer} />
    </Drawer.Navigator>
  );
}