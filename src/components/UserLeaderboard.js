import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from '@mui/material';

// UserLeaderboard component
function UserLeaderboard({ selectedTimePeriod }) {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch data based on the selectedTimePeriod and update leaderboardData state
    const fetchData = async () => {
      try {
        const newData = await fetchLeaderboardData(selectedTimePeriod);
        setLeaderboardData(newData);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchData();
  }, [selectedTimePeriod]);

  // Mock data for the leaderboard
  const fetchLeaderboardData = async (timePeriod) => {
    // Implement fetching data based on the selectedTimePeriod
    // For example, make an API call to get data for the specific time period
    // Return the fetched data
    const mockData = [
      {
        email: 'user1@example.com',
        friendsInvited: 1089,
        country: 'United States',
      },
      {
        email: 'user2@example.com',
        friendsInvited: 555,
        country: 'Canada',
      },
      {
        email: 'user3@example.com',
        friendsInvited: 97,
        country: 'China',
      },
      {
        email: 'user4@example.com',
        friendsInvited: 88,
        country: 'India',
      },
    ];

    return mockData;
  };

  return (
    <Box>
      <h2>User Leaderboard</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Friends Invited</TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Map through leaderboard data */}
            {leaderboardData.map((entry) => (
              <TableRow key={entry.email}>
                <TableCell>{entry.email}</TableCell>
                <TableCell>{entry.friendsInvited}</TableCell>
                <TableCell>{entry.country}</TableCell>
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
        See Leaderboard
      </Button>
    </Box>
  );
}

UserLeaderboard.propTypes = {
  selectedTimePeriod: PropTypes.string.isRequired,
};

export default UserLeaderboard;
