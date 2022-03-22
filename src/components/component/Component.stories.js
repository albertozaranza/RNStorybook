import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Component from './Component.tsx';

storiesOf('Test Component', module).add('example', () => <Component />);
