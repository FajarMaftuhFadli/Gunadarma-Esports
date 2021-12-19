import styles from "./ScrollDown.module.css";

export default function ScrollDown() {
  return (
    <div className={styles.container}>
      <div className={styles.chevron + " before:g-bg3 after:g-bg3"}></div>
      <div className={styles.chevron + " before:g-bg3 after:g-bg3"}></div>
      <div className={styles.chevron + " before:g-bg3 after:g-bg3"}></div>
    </div>
  );
}
