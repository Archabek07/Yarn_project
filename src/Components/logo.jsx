import LogoSvg from "../assets/img/logo.svg";
// import styles from "./logo.module.scss";

function Logo(props) {
  const { src, alt } = props;
  return (
    <div className="header__logo">
      {/*   className={styles.header__logo} */}
      <img width="38" src={src ? src : LogoSvg} alt={alt ? alt : "Logo"} />
      <div>
        <h1>Kids-books</h1>
        <p>читайте вместе с нами</p>
      </div>
    </div>
  );
}

export default Logo;
