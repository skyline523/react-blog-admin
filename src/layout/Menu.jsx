import * as React from 'react'
import { DashboardMenuItem, Menu, MenuItemLink } from 'react-admin'
import PostIcon from '@mui/icons-material/Article'
import CategoryIcon from '@mui/icons-material/LocalOffer'
import TagIcon from '@mui/icons-material/Label'
import ProfileIcon from '@mui/icons-material/ManageAccounts'
import LogIcon from '@mui/icons-material/ListAlt'

export default props => {
  return (
    <Menu {...props}>
      <DashboardMenuItem />
      <MenuItemLink to='/posts' primaryText='Posts' leftIcon={<PostIcon />} />
      <MenuItemLink
        to='/categories'
        primaryText='Categories'
        leftIcon={<CategoryIcon />}
      />
      <MenuItemLink to='/tags' primaryText='Tags' leftIcon={<TagIcon />} />
      <MenuItemLink
        to='/about'
        primaryText='Profile'
        leftIcon={<ProfileIcon />}
      />
      <MenuItemLink
        to='/websiteLogs'
        primaryText='Website Log'
        leftIcon={<LogIcon />}
      />
    </Menu>
  )
}
