import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const ComingSoon = () => {
  return (
    <div className="flex h-[90dvh] w-full items-center justify-center">
      <div className="flex-col flex justify-center items-center gap-5">
        <Image
          src={"/illustrations/working.svg"}
          alt="coming-soon-illustration"
          width={300}
          height={300}
        />
        <h1 className="text-3xl font-bold text-center">Coming soon</h1>
        <Link href={"/"}>
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};
export default ComingSoon;
