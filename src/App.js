import * as React from 'react'
import { Admin, Resource } from 'react-admin'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import en from 'ra-language-english'
import cn from 'ra-language-chinese'

import dataProvider from './dataProvider'
import authProvider from './authProvider'
import { Layout } from './layout'
import { Dashboard } from './dashboard'
import posts from './posts'
import categories from './categories'
import tags from './tags'
import profile from './profile'
import websiteLogs from './websiteLogs'

const translations = { en, cn }

const i18nProvider = polyglotI18nProvider(locale => translations[locale], 'en')

function App() {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      layout={Layout}
      dashboard={Dashboard}
      requireAuth
    >
      <Resource name='posts' {...posts} />
      <Resource name='categories' {...categories} />
      <Resource name='tags' {...tags} />
      <Resource name='about' {...profile} />
      <Resource name='websiteLogs' {...websiteLogs} />
    </Admin>
  )
}

export default App
