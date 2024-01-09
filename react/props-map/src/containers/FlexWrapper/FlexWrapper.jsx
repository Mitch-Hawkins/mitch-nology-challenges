import styles from "./FlexWrapper.module.scss";

const FlexWrapper = ({ direction, children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default FlexWrapper;
