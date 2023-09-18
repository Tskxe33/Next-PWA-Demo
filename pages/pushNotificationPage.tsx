import NotificationLayout from "@/components/Notification";
import Navbar from "@/components/navbar";
import useFcmToken from "@/utils/hooks/useFcmToken";
import axios from "axios";
import React from "react";

const PushNotificationPage = () => {
  const { fcmToken } = useFcmToken();

  const sendPushNotification = async () => {
    await axios.post(
      "https://fcm.googleapis.com/fcm/send",
      {
        to: fcmToken,
        notification: {
          title: "NextJS PWA title",
          body: "some message in your body",
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "key=AAAAlNMzQ0M:APA91bE3LeCqkGtMZzxPGKOf1mpDhPj45esNrDZ1SANt_L0N8B2mFcSdm0fuwVkqKz63z1-NUmht9usTliRa4vEuFuhL-l9RzyR-m7H90ruZdrP3YP6zHOEMMABH-BQhViSGSdKc5cP0",
        },
      }
    );
  };

  return (
    <NotificationLayout>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <button
          onClick={sendPushNotification}
          className="my-5 relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span className="flex justify-center items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <p className="from-slate-200 mr-5">Send Push Notification</p>
          </span>
        </button>
      </div>
    </NotificationLayout>
  );
};

export default PushNotificationPage;
