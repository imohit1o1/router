"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeClick = () => {
    console.log("handleHomeClick");
    router.push("/");
  };
  const handleSigUpClick = () => {
    console.log("handleSigUpClick");
    router.push("/sign-up");
  };
  const handleSigInClick = () => {
    console.log("handleSigInClick");
    router.push("/sign-in");
  };

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center p-6">
        <Button onClick={handleHomeClick}>Home</Button>
        <Button onClick={handleSigUpClick}>Go To Sign Up Page</Button>
        <Button onClick={handleSigInClick}>Go To Sign In Page</Button>
      </div>
      <h1 className="text-xl text-center font-semibold">Current route: {pathname}</h1>
    </div>
  );
}
