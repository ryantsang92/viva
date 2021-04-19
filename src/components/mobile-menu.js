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
import { aboutText } from "../app-constants";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperMobile: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  normalText: {
    textTransform: "none",
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

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const MobileMenu = () => {
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

  return (
    <>
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
        <StyledMenuItem>
          <ListItem button onClick={onAboutClick} key="about">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="What is VIVA?" />
          </ListItem>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItem button component={CustomLink} key="shareYourExprience">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Share Your Experience" />
          </ListItem>
        </StyledMenuItem>
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
              <Typography variant="h4" id="simple-modal-title">
                What is VIVA?
              </Typography>
            </Box>
            <Box flexShrink={0}>
              <IconButton onClick={handleModalClose} size="small">
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Box mb={2}>
            <Typography id="simple-modal-description">{aboutText()}</Typography>
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <GreenButton buttonText="Got it!" onClick={handleModalClose} />
          </Box>
        </div>
      </Modal>
    </>
  );
};

export default MobileMenu;
