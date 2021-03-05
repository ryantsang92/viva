import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  container: {
    borderWidth: 5,
    borderColor: "#000000",
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

const tileData = [
  {
    img:
      "https://www.friv5online.com/files/images/c8/c82c86713ab84bb30028a096bc8b7f7e.jpg",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img:
      "https://www.friv5online.com/files/images/c8/c82c86713ab84bb30028a096bc8b7f7e.jpg",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img:
      "https://www.friv5online.com/files/images/c8/c82c86713ab84bb30028a096bc8b7f7e.jpg",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img:
      "https://www.friv5online.com/files/images/c8/c82c86713ab84bb30028a096bc8b7f7e.jpg",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img:
      "https://www.friv5online.com/files/images/c8/c82c86713ab84bb30028a096bc8b7f7e.jpg",
    title: "Image",
    author: "author",
    cols: 1,
  },
];

const ContentPanel = () => {
  const classes = useStyles();
  return (
    <Container>
      <Card className={classes.root}>
        <CardHeader title="Videos" subheader="Click on videos" />
        <CardContent>
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContentPanel;
