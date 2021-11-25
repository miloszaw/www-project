import React from 'react';
import {
  Divider,
  Grid, Paper,
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
      "photoGrid" : "",
      "user" : "",
    }
  }

  /**
   * Fetches photos for a given userId
   * @param userId user ID
   */
  fetchPhotos(userId) {
    fetchModel("/photosOfUser/" + userId).then( result => {
      console.log(result);
      this.setState({photos: JSON.parse(result)});
    });
  }

  /**
   * Fetches user for a given userId
   * @param userId user ID
   */
  fetchUser(userId) {
    fetchModel("/user/" + userId).then( result => {
      this.setState({user: JSON.parse(result)});
    });
  }

  componentDidMount() {
    this.fetchPhotos(this.props.match.params.userId);
    this.fetchUser(this.props.match.params.userId);
  }

  /**
   * Constructs a photo grid
   * @returns {JSX.Element} Photo grid
   */
  photoGrid() {
    let grid = [];
    for (let i = 0; i < this.state.photos.length; i++) {
      grid.push(
          <Grid item xs={12} sm={6} md={4}>
            <Paper>
              <img src={`../../images/`+this.state.photos[i].file_name} alt={this.state.photos[i].file_name} className={"photo"}/>
              <Grid container spacing={0.25}>
                <Grid item xs={12}>
                  <Typography variant="button">{this.state.user.first_name} {this.state.user.last_name} |</Typography>
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

  /**
   * Constructs a comment grid
   * @param comments array containing comments
   * @returns {JSX.Element} Comment grid
   */
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

  render() {
    return (
        <div>{this.photoGrid()}</div>
    );
  }
}

export default UserPhotos;
