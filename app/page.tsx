import Link from "next/link";

function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex space-x-3">
          <Link
            href="/home"
            prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;