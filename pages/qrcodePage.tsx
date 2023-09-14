import React, { useState } from "react";
import Navbar from "../components/navbar";
import QRCodeTabs from "@/components/QRCodeTabs";
import QRCode from "react-qr-code";

export enum Tabs {
  READ = "Read",
  GENERATE = "Generate",
}

const QrcodePage = () => {
  const [isTabActive, setIsTabActive] = useState(Tabs.READ);
  const [qrCodeValue, setQrCodeValue] = useState("");

  return (
    <div>
      <Navbar />
      <QRCodeTabs isTabActive={isTabActive} setIsTabActive={setIsTabActive} />
      {isTabActive === Tabs.GENERATE && (
        <div className="flex flex-col justify-center items-center mt-10">
          <QRCode value={qrCodeValue} />
          <div className="flex flex-col justify-center items-center mt-10">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Type Here 👇
            </label>
            <input
              onChange={(e) => {
                setQrCodeValue(e.target.value);
              }}
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Hello World"
              required
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QrcodePage;
