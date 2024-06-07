import Image from "next/image";
import styles from "./splash-screen.module.css";

const SplashScreen = () => {
  return (
    <div className="flex h-[90dvh] w-full items-center justify-center relative">
      <div className={styles.loader}>
        <Image
          src="/icons/android-chrome-512x512.png"
          alt="logo"
          width={100}
          height={100}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};
export default SplashScreen;
