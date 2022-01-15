import styles from "./ArrowDownAnim.module.css";

export default function ArrowDownAnim() {
  return (
    <div className={styles.container}>
      <div className={styles.chevron + " before:g-bg3 after:g-bg3"}></div>
      <div className={styles.chevron + " before:g-bg3 after:g-bg3"}></div>
      <div className={styles.chevron + " before:g-bg3 after:g-bg3"}></div>
    </div>
  );
}
