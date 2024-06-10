import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className="p-2 bg-slate-800 rounded-md" href={"/dashboard"}>
        Go to Dashboard
      </Link>
      <Link className="p-2 bg-slate-800 rounded-md" href={"/products"}>
        Go to Products
      </Link>
    </main>
  );
}
