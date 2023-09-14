import Image from "next/image";
import CameraIcon from "../assets/images/photo-camera.png";
import { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "react-camera-pro";
import router from "next/router";

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
  const [image, setImage] = useState(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [activeDeviceId, setActiveDeviceId] = useState<string | undefined>(
    undefined
  );

  const onTakePhoto = () => {
    const imageSrc = camera?.current?.takePhoto();
    setImage(image);

    if (imageSrc !== undefined) {
      localStorage.setItem("myPhoto", imageSrc);
    }
  };

  useEffect(() => {
    console.log(numberOfCameras);
  }, [numberOfCameras]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Camera
        ref={camera}
        facingMode="user"
        videoSourceDeviceId={activeDeviceId}
        numberOfCamerasCallback={(i) => setNumberOfCameras(i)}
        aspectRatio={4 / 3}
        errorMessages={cameraErrorMessages}
        videoReadyCallback={() => {
          console.log("Video feed ready.");
        }}
      />

      <p className="from-slate-200 pb-5">Capture your photo</p>

      <Image
        src={CameraIcon}
        width={40}
        height={40}
        alt="camera icon"
        onClick={onTakePhoto}
      />
    </main>
  );
};

export default Home;
