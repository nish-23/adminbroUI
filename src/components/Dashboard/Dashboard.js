import { Box,theme,InfoBox,Button,Icon,Text } from '@admin-bro/design-system';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <ThemeProvider theme={theme}>
        <Box className='Dashboard'>
            <Box bg='lightgrey'>
            <InfoBox title="No Company is registered">
                  <Text>Currently there are no company in the system</Text>
                  <Text>To create first click</Text>
                  <Button mt="lg" variant='primary'><Icon icon="Add" />Create</Button>
           </InfoBox>
            </Box>
        </Box>
        </ThemeProvider>
    )
}

export default Dashboard
