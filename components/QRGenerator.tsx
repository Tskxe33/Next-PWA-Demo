import React from "react";
import QRCode from "react-qr-code";

interface Props {
  setQrCodeValue: React.Dispatch<React.SetStateAction<string>>;
  qrCodeValue: string;
}

const QRGenerator: React.FC<Props> = ({ qrCodeValue, setQrCodeValue }) => {
  return (
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
          value={qrCodeValue}
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Hello World"
          required
        />
      </div>
    </div>
  );
};

export default QRGenerator;
