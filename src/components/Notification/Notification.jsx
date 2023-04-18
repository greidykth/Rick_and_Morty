import React, { useEffect } from "react";
import styles from "./notification.module.css";
import { useDispatch, useSelector } from "react-redux";
import { hideNotificacion } from "../../redux/actions/actions";

const Notification = ({ message }) => {
  const { notification } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideNotificacion());
    }, 3100);
  }, []);

  return (
    <div class={styles.notification + " " + styles[notification.type]}>
      <p>{notification.message}</p>
      <span className={styles.notificationProgress}></span>
    </div>
  );
};

export default Notification;
