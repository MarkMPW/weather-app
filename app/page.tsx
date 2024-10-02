import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="bg-[#a5a6b3] min-h-screen p-8 flex">
      <Main />
      {/* RIGHT SIDE */}
      <div className='bg-[#babbcd]'>
        Right side
      </div>
    </div>
  );
}
