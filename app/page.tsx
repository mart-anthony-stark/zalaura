import Link from "next/link";
import Button from "./components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <div className="flex gap-4">
        <div className="flex justify-around">
          <Image src='/landing.jpg' alt="Shop"/>
          <Link href="/products"><Button className="w-full">Shop Now</Button></Link>
        </div>
      </div>
    </main>
  );
}
