import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CurrentUserNav ,theme,Box} from '@admin-bro/design-system'


function CurrentNav(){
    const name = 'Admin'
    const avatar = 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX32629588.jpg'

    const handleClick = (event) => {
      event.preventDefault()
    }

    const dropActions = [{
      label: <h3>My Profile</h3>,
      onClick: handleClick,
      icon: 'User',
    }, {
      label: <h3>log out</h3>,
      onClick: handleClick,
      icon: 'Logout',
    }]

    const lineActions = [{
      label: 'Notification',
      onClick: handleClick,
      icon: 'NotificationNew',
    }, {
      label: 'Settings',
      onClick: handleClick,
      icon: 'Settings',
    }]

    return (
    <ThemeProvider theme={theme}>
      <Box width='100%' >
        <Box  style={{boxShadow:'0px 5px 10px rgba(0,0,0,0.2)'}} flex flexDirection="row-reverse"height="navbarHeight" alignItems='center' >
          <CurrentUserNav
            name={name}
            avatarUrl={avatar}
            dropActions={dropActions}
            lineActions={lineActions}
          />
        </Box>
      </Box>
      </ThemeProvider>
    )

}
export default CurrentNav
