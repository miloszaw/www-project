import React from 'react';
import {
  Divider,
  Grid, List, ListItem, Paper,
  Typography
} from '@material-ui/core';
import './userPhotos.css';
import fetchModel from "../../lib/fetchModelData";



/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "photos" : "",
    }
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

  fetchPhotos(userId) {
    fetchModel("/photosOfUser/" + userId).then( result => {
      this.setState({photos: JSON.parse(result)});
    });
  }

  photoGrid(userId) {
    this.fetchPhotos(userId);
    let grid = [];
    for (let i = 0; i < this.state.photos.length; i++) {
      grid.push(
          <Grid item xs={12} sm={6} md={4}>
            <Paper>
              <img src={`../../images/`+this.state.photos[i].file_name} alt={this.state.photos[i].file_name} className={"photo"}/>
              <Grid container spacing={0.25}>
                <Grid item xs={12}>
                  <Typography variant="button">{cs142models.userModel(this.state.photos[i].user_id).first_name} {cs142models.userModel(this.state.photos[i].user_id).last_name} |</Typography>
                  <Typography variant="caption">{this.state.photos[i].date_time}</Typography>

                </Grid>

              </Grid>
              <Divider/>
              {this.state.photos[i].comments && (this.commentGrid(this.state.photos[i].comments))}
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
