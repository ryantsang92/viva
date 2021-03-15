/*
  Video PLayer component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { Component } from "react";
// import { ReactVideo } from "reactjs-media";
import { ReactVideo } from "./video/react-video"

const sources = {
  sintelTrailer: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  bunnyTrailer: "http://media.w3.org/2010/05/bunny/trailer.mp4",
  bunnyMovie: "http://media.w3.org/2010/05/bunny/movie.mp4",
  test: "http://media.w3.org/2010/05/video/movie_300.webm",
};

export default class VideoPlayer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources.bunnyMovie,
    };
  }

  render() {
    return (
      <div>
        <ReactVideo
          src="http://media.w3.org/2010/05/bunny/movie.mp4"
          poster="https://image.freepik.com/free-vector/colorful-abstract-wallpaper-design_23-2148467625.jpg"
          primaryColor="#278A6E"
          // other props
        />
      </div>
    );
  }
}
