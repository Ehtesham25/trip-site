import React, { useState, useEffect } from "react";
import { Typography, Paper, TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateTrip } from "../actions/TripActions";
import useStyle from "./styles";

const EditTrip = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tripId = useSelector((state) => state?.authReducer);
  const trips = useSelector((state) => state?.tripsReducer);

  const [postData, setPostData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    setPostData(trips?.find((singleTrip) => singleTrip._id === tripId[1]));
  }, [tripId]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTrip(tripId[1], postData));
    navigate("/");
  };
  return (
    <>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleUpdate}
        >
          <Typography variant="h6">Edit Trip</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={postData?.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            variant="outlined"
            fullWidth
            value={postData?.description}
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
            }
          />
          <Button
            variant="contained"
            color="inherit"
            size="large"
            type="submit"
            fullWidth
            className={classes.buttonSubmit}
          >
            Update
          </Button>
        </form>
      </Paper>
    </>
  );
};
export default EditTrip;
