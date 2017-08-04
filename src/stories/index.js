import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '../components'

storiesOf('Button', module)
  .add('no type', () => <Button onClick={action('clicked')}>Hello World</Button>)
  .add('default', () => <Button type='default' onClick={action('clicked')}>Hello World</Button>);
