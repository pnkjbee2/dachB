import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';

// TrafficChart component
function Traffics({ selectedFilters, onFilterChanges }) {
  const [filteredData, setFilteredData] = useState([]);
  const [maxValue, setMaxValue] = useState(0);

  const mockData = [
    { Source: 'Google', Cities: 'New York', signup: 1200 },
    { Source: 'Facebook', Cities: 'Texas', signup: 1500 },
    { Source: 'YouTube', Cities: 'Toronto', signup: 1800 },
    { Source: 'LinkedIn', Cities: 'Moscow', signup: 1070 },
    { Source: 'Twitter', Cities: 'Delhi', signup: 900 },
    // Add more mock data as needed
  ];

  useEffect(() => {
    const processData = () => {
      const data = {};
      let maxValue = 0;

      for (const entry of mockData) {
        const key = selectedFilters === 'Source' ? entry.Source : entry.Cities;
        if (!data[key]) data[key] = 0;
        data[key] += entry.signup;
        if (data[key] > maxValue) maxValue = data[key];
      }

      setFilteredData(data);
      setMaxValue(maxValue);
    };

    processData();
  }, [selectedFilters]);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <h2>Traffic Location</h2>
            <div>
             <Button
                variant={selectedFilters === 'Source' ? 'contained' : 'outlined'}
                  onClick={() => onFilterChanges('Source')}
                     >
                       Source
              </Button>
                <Button
                variant={selectedFilters === 'Cities' ? 'contained' : 'outlined'}
                   onClick={() => onFilterChanges('Cities')}
                    >
                        City
                  </Button>
                      </div>
        </Box>  

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
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
        See Traffic sources
      </Button>
    </Box>
  );
}

Traffics.propTypes = {
  selectedFilters: PropTypes.string.isRequired,
  onFilterChanges: PropTypes.func.isRequired,
};

export default Traffics;
