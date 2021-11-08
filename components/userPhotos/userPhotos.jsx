import React from 'react';
import {
  Divider,
  Grid, List, ListItem, Paper,
  Typography
} from '@material-ui/core';
import './userPhotos.css';



/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);

  }


  commentGrid(comments) {
    let grid = [];
    for (let i = 0; i < comments.length; i++) {
      let comment = comments[i];
      grid.push(
          <Grid item xs={12}>
            <Typography variant="button"><a href={`#/user/`+comment.user._id+`/details`}>{comment.user.first_name} {comment.user.last_name} |</a></Typography>
            <Typography variant="caption">{comment.date_time}</Typography>
            <br/>
            <Typography variant="subtitle2">{comment.comment}</Typography>
          </Grid>)
    }
    return <Grid container spacing={1.5}>{grid}</Grid>
  }

  photoGrid(userId) {
    let photos = window.cs142models.photoOfUserModel(userId);
    let grid = [];
    for (let i = 0; i < photos.length; i++) {
      grid.push(
          <Grid item xs={12} sm={6} md={4}>
            <Paper>
              <img src={`../../images/`+photos[i].file_name} alt={photos[i].file_name} className={"photo"}/>
              <Grid container spacing={0.25}>
                <Grid item xs={12}>
                  <Typography variant="button">{cs142models.userModel(photos[i].user_id).first_name} {cs142models.userModel(photos[i].user_id).last_name} |</Typography>
                  <Typography variant="caption">{photos[i].date_time}</Typography>

                </Grid>

              </Grid>
              <Divider/>
              {photos[i].comments && (this.commentGrid(photos[i].comments))}
            </Paper>
          </Grid>)
    }

    return <Grid container spacing={2}>{grid}</Grid>;

  }

  render() {
    return (
        this.photoGrid(this.props.match.params.userId)
    );
  }
}

export default UserPhotos;
