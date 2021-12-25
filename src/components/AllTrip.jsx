import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { dispatchId } from "../actions/authAction";
import { deleteTrip } from "../actions/TripActions";
import useStyles from "./styles";

const AllTrip = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [likes, setLikes] = useState(0);

  const handleDispatchId = (id) => {
    dispatch(dispatchId(id));
    navigate("/editTrip");
  };

  const handleDelete = (id) => {
    dispatch(deleteTrip(id));
  };
  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            data?.image ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title={data.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{data?.title}</Typography>
          <Typography variant="body2">
            {moment(data.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => handleDispatchId(data._id)}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {data?.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => setLikes((likes + 1))}
          >
            {likes > 0 ? (
              <>
                <ThumbUpAltIcon fontSize="small" /> likes {likes}
              </>
            ) : (
              <>
                <ThumbUpAltOutlinedIcon fontSize="small" /> Like {likes}
              </>
            )}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => handleDelete(data._id)}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default AllTrip;
