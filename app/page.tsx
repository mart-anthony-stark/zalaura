import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <div className="flex gap-4">
        <div>
          <Link href="/products">Products</Link>
        </div>
      </div>
    </main>
  );
}
