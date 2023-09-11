import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';

// TrafficChart component
function TrafficChart({ selectedFilter, onFilterChange }) {
  const [filteredData, setFilteredData] = useState([]);
  const [maxValue, setMaxValue] = useState(0);

  const mockData = [
    { country: 'USA', city: 'New York', signups: 1200 },
    { country: 'USA', city: 'Texas', signups: 1500 },
    { country: 'Canada', city: 'Toronto', signups: 1800 },
    { country: 'Russia', city: 'Moscow', signups: 1070 },
    { country: 'India', city: 'Delhi', signups: 900 },
    // Add more mock data as needed
  ];

  useEffect(() => {
    const processData = () => {
      const data = {};
      let maxValue = 0;

      for (const entry of mockData) {
        const key = selectedFilter === 'country' ? entry.country : entry.city;
        if (!data[key]) data[key] = 0;
        data[key] += entry.signups;
        if (data[key] > maxValue) maxValue = data[key];
      }

      setFilteredData(data);
      setMaxValue(maxValue);
    };

    processData();
  }, [selectedFilter]);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <h2>Signup Location</h2>
            <div>
             <Button
                variant={selectedFilter === 'country' ? 'contained' : 'outlined'}
                  onClick={() => onFilterChange('country')}
                     >
                       Country
              </Button>
                <Button
                variant={selectedFilter === 'city' ? 'contained' : 'outlined'}
                   onClick={() => onFilterChange('city')}
                    >
                        City
                  </Button>
                      </div>
        </Box>  

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell> </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(filteredData).map((location) => (
              <TableRow key={location}>
                <TableCell>
                  <div
                    style={{
                      width: `${(filteredData[location] / maxValue) * 100}%`,
                      height: '20px',
                      backgroundColor: 'rgba(255, 255, 0, 0.3)',
                    }}
                  >
                    {location}
                  </div>
                </TableCell>
                <TableCell>{filteredData[location]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        style={{
          borderRadius: '8px',
          marginTop: '10px',
          backgroundColor: '#e0e0e0',
          color: 'black',
        }}
      >
        See all countries
      </Button>
    </Box>
  );
}

TrafficChart.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default TrafficChart;
