import { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "react-camera-pro";
import Navbar from "@/components/navbar";
import Image from "next/image";
import CameraIcon from "../assets/images/photo-camera.png";

interface CameraErrorMessages {
  noCameraAccessible?: string;
  permissionDenied?: string;
  switchCamera?: string;
  canvas?: string;
}

const cameraErrorMessages: CameraErrorMessages = {
  noCameraAccessible:
    "No camera device accessible. Please connect your camera or try a different browser.",
  permissionDenied:
    "Permission denied. Please refresh and give camera permission.",
  switchCamera:
    "It is not possible to switch camera to different one because there is only one video device accessible.",
  canvas: "Canvas is not supported.",
};

const Home = () => {
  const camera = useRef<CameraType>(null);
  const [image, setImage] = useState("");
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const [activeDeviceId, setActiveDeviceId] = useState<string | undefined>(
    undefined
  );

  const onTakePhoto = () => {
    const imageSrc = camera?.current?.takePhoto();

    if (imageSrc !== undefined) {
      localStorage.setItem("myPhoto", imageSrc);
      setImage(imageSrc);
      setShowImage(!showImage);
    }
  };

  const takePhotoAgain = () => setShowImage(false);

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={showImage ? takePhotoAgain : onTakePhoto}
            className="my-5 relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span className="flex justify-center items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <p className="from-slate-200 mr-5">
                {showImage ? "Take again" : "Capture your photo"}
              </p>
              <Image
                src={CameraIcon}
                width={30}
                height={30}
                alt="camera icon"
              />
            </span>
          </button>

          {showImage && (
            <a href={image} download={image}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download image
                </span>
              </button>
            </a>
          )}
        </div>

        {showImage ? (
          <Image
            src={image!}
            width={20}
            height={20}
            alt="camera icon"
            className="w-screen"
          />
        ) : (
          <Camera
            ref={camera}
            facingMode="user"
            videoSourceDeviceId={activeDeviceId}
            numberOfCamerasCallback={(i) => setNumberOfCameras(i)}
            aspectRatio={16 / 6}
            errorMessages={cameraErrorMessages}
            videoReadyCallback={() => {
              console.log("Video feed ready.");
            }}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
