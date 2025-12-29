import React from "react";
import {  Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
 
import AllTrip from "./AllTrip";
import useStyles from "./styles"; 
const AddTrip = () => {
  const classes= useStyles()
  const trips = useSelector((state) => state.tripsReducer);

  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {trips &&
        trips?.map((data) => (
          <Grid key={data._id} item xs={12} sm={12} md={6} lg={3}>
            <AllTrip data={data} key={data?._id} />
          </Grid>
        ))}
    </Grid>
  );
};
export default AddTrip;
