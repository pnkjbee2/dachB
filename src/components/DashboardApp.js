import React, { useState, useEffect } from 'react';
import { Grid, Container, Button, Box, Typography } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import {
  Chart,
  TrafficChart,
  UserLeaderboard,
  Traffics,
  Behave,
  AnalyticsCard,
} from '/home/pnkj/Documents/dashanal/src/components'

// ----------------------------------------------------------------------

  const DashboardApp = () => {
    const [selectedTimePeriod, setSelectedTimePeriod] = useState('30d');
    const [totalSignups, setTotalSignups] = useState(0);
    const [selectedFilter, setSelectedFilter] = useState('country'); // Initial filter state
    const [selectedFilters, setSelectedFilters] = useState('Source');
    
    const [selectedFilter2, setSelectedFilter2] = useState('country');
    const onFilterChanges = (filters) => {
      setSelectedFilters(filters);
    };
    
    

    const handleTimePeriodChange = (timePeriod) => {
      setSelectedTimePeriod(timePeriod);
    };
  
    const handleFilterChange = (filter) => {
      setSelectedFilter(filter);
    };

  useEffect(() => {
    // Update total signups based on selected time period
    let newTotalSignups = 0;
    if (selectedTimePeriod === '1h') {
      newTotalSignups = 100;
    } else if (selectedTimePeriod === '24h') {
      newTotalSignups = 1200;
    } else if (selectedTimePeriod === '30d') {
      newTotalSignups = 15000;
    } else if (selectedTimePeriod === '60d') {
      newTotalSignups = 30000;
    }
    setTotalSignups(newTotalSignups);
  }, [selectedTimePeriod]);

  return ( 

    <Container maxWidth="xl">
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
        <Typography variant="h4" sx={{ mb: 0 }}>
          Summer referral competition
        </Typography>
        <Box p={2} bgcolor="white" boxShadow={2} sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Buttons for selecting time period */}
          <Button variant={selectedTimePeriod === '1h' ? 'contained' : 'outlined'} onClick={() => handleTimePeriodChange('1h')}>
            1 Hour
          </Button>
          <Button variant={selectedTimePeriod === '24h' ? 'contained' : 'outlined'} onClick={() => handleTimePeriodChange('24h')}>
            24 Hours
          </Button>
          <Button variant={selectedTimePeriod === '30d' ? 'contained' : 'outlined'} onClick={() => handleTimePeriodChange('30d')}>
            30 Days
          </Button>
          <Button variant={selectedTimePeriod === '60d' ? 'contained' : 'outlined'} onClick={() => handleTimePeriodChange('60d')}>
            60 Days
          </Button>
        </Box>
      </Box>
      
      <Grid container spacing={5}>
        <Grid item xs={12}>
         <Box p={2} bgcolor="white" boxShadow={2}>
         <Typography variant="h5" component="div">
          <Box display="flex" alignItems="center">
            {totalSignups.toLocaleString()} <PeopleOutlineIcon fontSize="large" />
          </Box>
        </Typography>
          <Chart selectedTimePeriod={selectedTimePeriod} />
          </Box>
        </Grid>


        <Grid item xs={12} sx={{ mt: 4 }}>
        <Box p={2} bgcolor="white" boxShadow={2}>
          <AnalyticsCard />
         </Box> 
        </Grid>

        <Grid item xs={12} md={6}>
        <Box p={2} bgcolor="white" boxShadow={2}>
         <TrafficChart selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
         </Box>
          </Grid>
        <Grid item xs={12} md={6}>
        <Box p={2} bgcolor="white" boxShadow={2}>
            <UserLeaderboard selectedTimePeriod={selectedTimePeriod} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
        <Box p={2} bgcolor="white" boxShadow={2}>
         <Traffics selectedFilters={selectedFilters} onFilterChanges={setSelectedFilters} />
         </Box>
          </Grid>
          <Grid item xs={12} md={6}>
        <Box p={2} bgcolor="white" boxShadow={2}>
        <Behave selectedFilter={selectedFilter2} onFilterChange={setSelectedFilter2} />
         </Box>
          </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardApp;
