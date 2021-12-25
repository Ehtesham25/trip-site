import React, { useState } from "react";
import { Typography, Paper, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";

import { createTrip } from "../actions/TripActions";
import useStyle from "./styles";

const AddNewTrip = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tripData, setTripData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createTrip(tripData));
    navigate("/")
  };
  const Clear = () => {
    setTripData({
      title: "",
      description: "",
      image: "",
    });
  };
  return (
    <>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleCreate}
        >
          <Typography variant="h6">Create a Trip</Typography>
          <TextField
            name="Title"
            label="Title"
            variant="outlined"
            fullWidth
            value={tripData?.title}
            onChange={(e) =>
              setTripData({ ...tripData, title: e.target.value })
            }
          />
          <TextField
            name="Discription"
            label="Discription"
            variant="outlined"
            fullWidth
            value={tripData?.description}
            onChange={(e) =>
              setTripData({ ...tripData, description: e.target.value })
            }
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setTripData({ ...tripData, image: base64 })
              }
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            className={classes.buttonSubmit}
          >
            Submit
          </Button>
          <Button
            onClick={() => Clear()}
            variant="contained"
            color="secondary"
            size="small"
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};
export default AddNewTrip;
