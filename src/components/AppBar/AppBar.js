import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import styles from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Navigation />

      <AuthNav />
    </header>
  );
}
