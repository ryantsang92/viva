/*
  Content panel

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { SafeAreaView } from "react-native";
import { tileData } from "../mock-data";

// to-do: find a better way to style this
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    minHeight: 550,
  },
  videos: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  videoContainer: {
    maxHeight: 450,
  },
});

const ContentPanel = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Card className={classes.root}>
        <CardHeader title="Videos" subheader="Click on videos" />
        <CardContent>
          <SafeAreaView>
            <GridList
              className={classes.videoContainer}
              cellHeight={200}
              cols={2}
            >
              {tileData.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </SafeAreaView>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContentPanel;
