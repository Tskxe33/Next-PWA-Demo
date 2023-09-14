import { Tabs } from "@/pages/qrcodePage";
import React, { useState } from "react";

const activeTab = `text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`;

interface Props {
  isTabActive: Tabs;
  setIsTabActive: React.Dispatch<React.SetStateAction<Tabs>>;
}

const QRCodeTabs: React.FC<Props> = ({ isTabActive, setIsTabActive }) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          <a
            onClick={() => setIsTabActive(Tabs.READ)}
            className={`${
              isTabActive === Tabs.READ && activeTab
            } inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
          >
            Read QRCode
          </a>
        </li>
        <li className="mr-2">
          <a
            onClick={() => setIsTabActive(Tabs.GENERATE)}
            className={`
          ${isTabActive === Tabs.GENERATE && activeTab}
          inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
            aria-current="page"
          >
            Generate
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QRCodeTabs;
