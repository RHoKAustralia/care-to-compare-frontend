import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../components/Button'

storiesOf('Button', module)
  .add('no type', () => <Button onClick={action('clicked')}>Hello World</Button>)
  .add('default', () => <Button type='default' onClick={action('clicked')}>Hello World</Button>)
  .add('inverted', () => <Button type='inverted' onClick={action('clicked')}>Hello World</Button>)
  .add('secondary', () => <Button type='secondary' onClick={action('clicked')}>Hello World</Button>);
