import Image from "next/image";
import LoginForm from "../login-form";

const LoginView = () => {
  return (
    <div
      id="root"
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <div className="flex-col flex justify-center items-center gap-5 mb-5">
        <Image
          src={"/icons/android-chrome-512x512.png"}
          alt="logo"
          width={100}
          height={100}
        />
        <h1 className="text-3xl font-bold text-center">Savvy</h1>
      </div>
      <LoginForm />
    </div>
  );
};
export default LoginView;
