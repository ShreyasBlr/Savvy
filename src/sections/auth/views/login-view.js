import Image from "next/image";
import LoginForm from "../login-form";

const LoginView = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex-col flex justify-center items-center mb-5">
        <Image
          src={"/icons/android-chrome-512x512.png"}
          alt="logo"
          width={200}
          height={200}
        />
        <h1 className="text-3xl font-bold text-center">Savvy</h1>
      </div>
      <LoginForm />
    </div>
  );
};
export default LoginView;
