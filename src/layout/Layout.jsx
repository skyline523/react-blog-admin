import * as React from 'react'
import { Layout } from 'react-admin'
import { MyAppBar } from '../MyAppBar'

import Menu from './Menu'

export default props => <Layout {...props} menu={Menu} appBar={MyAppBar} />
