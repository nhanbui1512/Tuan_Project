import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout() {
  return <div className={cx("wrapper")}>Default Layout</div>;
}
export default DefaultLayout;
