import SignOut from "@/components/sign-out/sign-out";

function Home() {
  return (
    <div className="bg-background">
      <p className="text-text">!Hello World!</p>
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <SignOut />
      </div>
    </div>
  );
}

export default Home;