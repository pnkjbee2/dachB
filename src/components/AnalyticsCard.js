import React from 'react';
import { Grid, Box, Typography, Divider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloudIcon from '@mui/icons-material/Cloud';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const AnalyticsCard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box p={2} >
          <Typography variant="h6">Zootools</Typography>
          <Typography variant="subtitle1">Making Analytics Simple and Actionable</Typography>
          <Divider sx={{ my: 2 }} />

          <Box display="flex" flexDirection="column" alignItems="flex-start" mb={2}>
            <Typography variant="subtitle2">Summary</Typography>
            
          </Box>

          <Box display="flex" alignItems="center" mb={2}>
            <FavoriteIcon color="success" />
            <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
            Signups are slowing down, -5% new last week.
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={2}>
            <CloudIcon color="success" />
            <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
              80% of your signups were invited by other members.
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <EmojiObjectsIcon sx={{ bgcolor: 'warning.main', borderRadius: '50%', p: 1 }} />
            <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
              80% of your signups were invited.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2}  textAlign="flex-start">
          <Typography variant="h6">
            Recommendation
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ my: 2 }}>
            Make sure to promote and share your form.
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 1 }}>
            congrats! This is huge.Keep giving rewards for your users.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AnalyticsCard;
