import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import { Outlet } from "react-router-dom";
const cx = classNames.bind(styles);

function DefaultLayout() {
  return (
    <div>
      <div>Header</div>
      <div className={cx("content")}>
        <Outlet />
      </div>
      <div>Footer</div>
    </div>
  );
}
export default DefaultLayout;
