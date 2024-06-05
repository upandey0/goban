import { useRecoilValue } from "recoil";
import { responseState } from "../recoil/atoms";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

const UserCard = ({ user }) => {
  return (
    <Card variant="outlined" sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          User ID: {user.id}
        </Typography>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user.username}
        </Typography>
        <Typography variant="body2">
          Email: {user.email}
          <br />
          Address: {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

const Todos = () => {
  const { data, loading, error } = useRecoilValue(responseState);

  if (loading) {
    return <div className="flex items-center justify-center"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="flex items-center justify-center"><p>{error}</p></div>;
  }

  if (!data || !Array.isArray(data)) {
    return <div className="flex items-center justify-center"><p>No data available</p></div>;
  }

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        {data.map((user, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Todos;
