import styles from "../../../../../styles/Cloud.module.scss";

const Cloud = ({ type }) => {
  const circles = Array.from({ length: 8 }, (_, i) => (
    <div key={i} className={`${styles.circle} ${styles[`circle_c${i}`]}`} />
  ));

  return (
    <div className={`${styles.cloud} ${styles[`cloud_${type}`]}`}>
      {circles}
    </div>
  );
};

export default Cloud;
