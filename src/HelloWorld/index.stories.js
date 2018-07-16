import React from 'react'

import { storiesOf } from '@storybook/react'

import HelloWorld from '../HelloWorld'

storiesOf('HelloWorld', module).add('simple component', () => <HelloWorld />)
