import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {boolean, text} from '@storybook/addon-knobs';

import Button from './Button.tsx';

storiesOf('Next Buttons', module).add('Button', () => (
  <Button
    loading={boolean('loading', false)}
    text={text('text', 'Button')}
    onPress={() => console.log('Pressed')}
  />
));
