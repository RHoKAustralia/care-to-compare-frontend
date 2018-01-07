import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Button from '../components/Button'

storiesOf('Button', module)
  .add('no type', () => (
    <Button onClick={action('clicked')}>Hello World</Button>
  ))
  .add('primary', () => (
    <Button primary onClick={action('clicked')}>
      Hello World
    </Button>
  ))
  .add('ghost', () => (
    <Button ghost onClick={action('clicked')}>
      Hello World
    </Button>
  ))
  .add('secondary', () => (
    <Button secondary onClick={action('clicked')}>
      Hello World
    </Button>
  ))
