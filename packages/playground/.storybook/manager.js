// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import yourTheme from './theming';

addons.setConfig({
    theme: yourTheme,
});