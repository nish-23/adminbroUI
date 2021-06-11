import React from 'react';
import { ThemeProvider, } from 'styled-components';
import { theme,Navigation,Box} from '@admin-bro/design-system';
import img from '../../../assets/autocloud.png';
import './Head.css';


function Head(){

  const [postgresOpen, setPostgresOpen] = React.useState(false)


  const handleClick = (event) => {
    event.preventDefault()
    console.log(event)
  }


  const navigationElements = [{
    label: 'Dashboard',
    href: '/',
    icon:'Dashboard',
    onClick: handleClick,
    id: 'dashboard',
  }, {
    label: 'Global History',
    icon:'History',
    onClick: (event) => {
      event.preventDefault()
      setPostgresOpen(!postgresOpen)
    }
   },
   {
    label: 'Settings',
    icon: 'Settings',
    onClick: (event) => {
      event.preventDefault()
      setPostgresOpen(!postgresOpen)
    }
   }

]



    return (
        <ThemeProvider theme={theme}>

           <Box className='sideNav'variant="lightgrey" height="100vh" width='340px' p='0' display='flex'bg='#e1f1e8'>
            <Box width="sidebarWidth" fontSize="h4" className='fonter'>
            <img style={{height:'50px'}} src={img} alt="logo"></img>
            <Navigation elements={navigationElements} />
           </Box>
           </Box>
      </ThemeProvider>

    )
}

export default Head
