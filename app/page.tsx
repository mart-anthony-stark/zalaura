import Link from "next/link";
import Button from "./components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <div className="flex gap-4">
        <div className="flex gap-10 items-center justify-around">
          <Image src="/landing-page.jpg" width={400} height={500} alt="Shop" />
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-bold uppercase">Zalaura</h1>
            <Link href="/products">
              <Button className="w-full">Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
