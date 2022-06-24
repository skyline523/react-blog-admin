import React from 'react'
import { ToggleThemeButton, LocalesMenuButton, AppBar, defaultTheme } from 'react-admin'
import { Typography } from '@mui/material'

const darkTheme = {
  palette: { mode: 'dark' }
}

export const MyAppBar = props => (
  <AppBar {...props}>
    <Typography flex='1' variant='h6' id='react-admin-title' />
    <LocalesMenuButton
      languages={[
        { locale: 'en', name: 'English' },
        { locale: 'cn', name: '中文' }
      ]}
    />
    <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />
  </AppBar>
)
