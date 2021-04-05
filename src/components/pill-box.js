/*
  Pill Box

  author: Ryan Tsang <ryan@vivatheapp.com>
*/

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import ScrollMenu from "react-horizontal-scrolling-menu";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  pill: {
    marginLeft: 2,
    marginRight: 2,
    borderRadius: "15px",
    backgroundColor: "#F2F2F2",
    color: "#333333",
  },
});

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const PillBox = ({
  hashtags,
  selectedHashtag,
  fetchHashtags,
  fetchSelectedHashtag,
}) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(null);
  let menu = [];

  // list of items
  const list = [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
    { name: "item5" },
    { name: "item6" },
    { name: "item7" },
    { name: "item8" },
    { name: "item9" },
  ];

  useEffect(() => {
    if (!hashtags || !hashtags.length) {
      fetchHashtags();
    }
    console.log('here');
    // menu = hashtagComponents(hashtags);
    menu = Menu(list, selected);
  }, [hashtags]);

  const hashtagComponents = (hashtags) => {
    return hashtags.map((hashtag) => (
      <ToggleButtonGroup
        size="small"
        value={selectedHashtag}
        exclusive
        onChange={handleChange}
        key={hashtag.id}
      >
        <ToggleButton
          name="radio"
          value={hashtag}
          border={1}
          className={classes.pill}
        >
          {hashtag.hashtag}
        </ToggleButton>
      </ToggleButtonGroup>
    ));
  };

  const MenuItem = ({ text, selected }) => {
    return (
      <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>
    );
  };

  // All items component
  // Important! add unique key
  const Menu = (list, selected) => {
    console.log(list);
    return list.map((el) => {
      const { name } = el;

      return <MenuItem text={name} key={name} selected={selected} />;
    });
  }

  const handleChange = (event, hashtag) => {
    fetchSelectedHashtag(hashtag);
  };

  const onSelect = (selected) => {
    setSelected(selected);
  };

  const test = () => {
    return <div>test</div>;
  };

  console.log(hashtags);
  console.log(menu);
  return (
    <>
      <ScrollMenu
        data={menu}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
        onSelect={onSelect}
      />
      {/* {test()} */}
    </>
  );
};

PillBox.propTypes = {
  hashtags: PropTypes.array,
  fetchHashtags: PropTypes.func,
  fetchSelectedHashtag: PropTypes.func,
};

PillBox.defaultProps = {
  hashtags: [],
  fetchHashtags() {},
  fetchSelectedHashtag() {},
};

export default PillBox;







// import React, { useState, useEffect } from "react";
// import ScrollMenu from "react-horizontal-scrolling-menu";
// import "./PillBox.css";

// // list of items
// const list = [
//   { name: "item1" },
//   { name: "item2" },
//   { name: "item3" },
//   { name: "item4" },
//   { name: "item5" },
//   { name: "item6" },
//   { name: "item7" },
//   { name: "item8" },
//   { name: "item9" },
// ];

// // One item component
// // selected prop will be passed
// const MenuItem = ({ text, selected }) => {
//   return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
// };

// // All items component
// // Important! add unique key
// export const Menu = (list, selected) =>
//   list.map((el) => {
//     const { name } = el;

//     return <MenuItem text={name} key={name} selected={selected} />;
//   });

// const Arrow = ({ text, className }) => {
//   return <div className={className}>{text}</div>;
// };

// const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
// const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

// const selected = "item1";

// const PillBox = ({
//   hashtags,
//   selectedHashtag,
//   fetchHashtags,
//   fetchSelectedHashtag,
// }) => {
//   let menuItems;
//   useEffect(() => {
//     menuItems = Menu(list, selected);
//   }, [list]);

//   // const classes = useStyles();
//   const [selected, setSelected] = useState(null);

//   const onSelect = (selected) => {
//     setSelected(selected);
//   };

//   // return {
//   // const { selected } = this.state;
//   // Create menu from items
//   const menu = menuItems;

//   return (
//     <div >
//       <ScrollMenu
//         data={menu}
//         arrowLeft={ArrowLeft}
//         arrowRight={ArrowRight}
//         selected={selected}
//         onSelect={onSelect}
//       />
//     </div>
//   );
//   // }
// };

// export default PillBox;
