import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import useFcmToken from "@/utils/hooks/useFcmToken";
import {
  NotificationPayload,
  getMessaging,
  onMessage,
} from "firebase/messaging";
import firebaseApp from "@/utils/firebase/firebase";
interface Props {
  children: React.ReactNode;
}

const NotificationLayout: React.FC<Props> = ({ children }) => {
  const { fcmToken } = useFcmToken();

  fcmToken && console.log("FCM token:", fcmToken);

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log(
          "Foreground push notification received:",
          payload.notification
        );

        if (payload.notification) {
          toast.success(
            <div>
              <h5>{payload?.notification?.title}</h5>
              <h6>{payload?.notification?.body}</h6>
            </div>,
            {
              closeOnClick: false,
            }
          );
        }
      });
      return () => {
        unsubscribe();
      };
    }
  }, []);

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default NotificationLayout;
