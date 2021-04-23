/*
  Mobile Menu component

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Menu,
  Link,
} from "@material-ui/core";
import { videoSubmissionLink } from "../app-constants";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import InfoIcon from "@material-ui/icons/Info";
import GreenButton from "./common/green-button";
import { hashtagObjects } from "../app-constants";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperMobile: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  normalText: {
    textTransform: "none",
  },
  blockQuote: {
    paddingLeft: "15px",
  },
  normalText: {
    textTransform: "none",
    textDecoration: "none",
    color: "#000000",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      color: "#000000",
      textDecoration: "none",
    },
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const MobileMenu = ({ fetchSelectedHashtag }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onAboutClick = () => {
    setModalOpen(true);
    setDrawerOpen(false);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleDrawerOpen = (event) => {
    setDrawerOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const CustomLink = (props) => (
    <Link
      href={videoSubmissionLink}
      {...props}
      target="_blank"
      rel="noreferrer"
    />
  );

  const onHashtagClick = (hashtag) => {
    fetchSelectedHashtag(hashtag);
    handleModalClose();
  };

  return (
    <Box pr={1}>
      <IconButton onClick={handleDrawerOpen} size="medium">
        <MenuIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <MenuItem>
          <ListItem button onClick={onAboutClick} key="about">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="What is VIVA?" />
          </ListItem>
        </MenuItem>
        <MenuItem>
          <ListItem button component={CustomLink} key="shareYourExprience">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.normalText}
              primary="Share Your Experience"
            />
          </ListItem>
        </MenuItem>
      </StyledMenu>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paperMobile}>
          <Box mb={2} display="flex">
            <Box width="100%">
              <Typography variant="h5" id="simple-modal-title">
                Welcome to VIVA!
              </Typography>
            </Box>
            <Box flexShrink={0}>
              <IconButton onClick={handleModalClose} size="small">
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Box mb={2}>
            <Typography id="simple-modal-description">
              <Typography>
                VIVA is a social exploration platform where you can quickly and
                easily discover places to go and things to do from people like
                you.
              </Typography>
              <br></br>
              <Typography>
                If you ever feel like changing up your day, VIVA gets you
                instant access to a vast library of recommendations from your
                local community.
              </Typography>
              <br></br>
              <div className={classes.blockQuote}>
                <Typography>
                  Stop by a{" "}
                  <a
                    href="/#"
                    onClick={() =>
                      onHashtagClick(hashtagObjects.picturePerfect)
                    }
                  >
                    #pictureperfect
                  </a>{" "}
                  coffee shop
                </Typography>
                <Typography>
                  Have{" "}
                  <a
                    href="/#"
                    onClick={() =>
                      onHashtagClick(hashtagObjects.funWithFriends)
                    }
                  >
                    #funwithfriends
                  </a>{" "}
                  at a vineyard nearby
                </Typography>
                <Typography>
                  Discover cool restaurants that are{" "}
                  <a
                    href="/#"
                    onClick={() => onHashtagClick(hashtagObjects.worthTheHype)}
                  >
                    #worththehype
                  </a>
                </Typography>
              </div>
              <br></br>
              <Typography>
                VIVA uncovers all the #hiddengems for you, making your everyday
                fun and exciting.
              </Typography>
              <br></br>
              <Typography>Happy exploring!</Typography>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <GreenButton buttonText="Got it!" onClick={handleModalClose} />
          </Box>
        </div>
      </Modal>
    </Box>
  );
};

export default MobileMenu;
