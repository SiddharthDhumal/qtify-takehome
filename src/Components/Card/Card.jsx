import React from "react";
import styles from "./Card.module.css";
import RectangleImg from "../../assets/Rectangle 2139.svg";

const Card = () => {
  return (
    // <Tooltip title={`${songs.length} songs`} placement="top" arrow>
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={RectangleImg} alt="album" />
        <div className={styles.banner}>
          {/* <Chip
            label={`${follows} Follows`}
            size="small"
            className={styles.chip}
          /> */}
          <p className={styles.para}>100M Follows</p>
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <p>New English Songs</p>
      </div>
    </div>
    // </Tooltip>
  );
};

export default Card;
