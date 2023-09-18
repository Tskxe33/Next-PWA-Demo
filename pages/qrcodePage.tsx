import React, { useState } from "react";
import Navbar from "../components/navbar";
import QRCodeTabs from "@/components/QRCodeTabs";
import QRCode from "react-qr-code";
import QRGenerator from "@/components/QRGenerator";
import { QrReader, OnResultFunction } from "react-qr-reader";
import NotificationLayout from "@/components/Notification";

export enum Tabs {
  READ = "Read",
  GENERATE = "Generate",
}

const QrcodePage = () => {
  const [isTabActive, setIsTabActive] = useState(Tabs.READ);
  const [qrCodeValue, setQrCodeValue] = useState("https://itengine.rs/");
  const [data, setData] = useState<string>("No result");

  return (
    <NotificationLayout>
      <Navbar />
      <QRCodeTabs isTabActive={isTabActive} setIsTabActive={setIsTabActive} />
      {isTabActive === Tabs.GENERATE && (
        <QRGenerator
          qrCodeValue={qrCodeValue}
          setQrCodeValue={setQrCodeValue}
        />
      )}

      {isTabActive === Tabs.READ && (
        <div className="flex flex-col justify-center items-center">
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.getText());
              }

              if (!!error) {
                console.info(error);
              }
            }}
            constraints={{ facingMode: "environment" }}
            className="w-96 h-96"
          />
          <p>{data}</p>
        </div>
      )}
    </NotificationLayout>
  );
};

export default QrcodePage;
