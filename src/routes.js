import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginPage from './pages/LoginPage';

const Routes = createAppContainer(createSwitchNavigator({ LoginPage }));

export default Routes;
