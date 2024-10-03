import Main from "@/components/Main";
import RightContent from "@/components/RightContent";
import { WeatherProvider } from "@/Context/weatherContext";

export default function Home() {
  return (
    <WeatherProvider>
      <div className="bg-[#a5a6b3] p-8 flex justify-center min-h-screen">
        <Main />
        <RightContent />
      </div>
    </WeatherProvider>
  );
}
