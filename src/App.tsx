// image
import imgBg from "./assets/photo/bg.png";

// icons
import { FaEnvelopeOpenText } from "react-icons/fa";

import Countdown from "./components/Countdown";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-900 overflow-x-hidden">
        <div
          className="relative p-4 min-h-screen w-[27rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${imgBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-black/0"></div>
          <div className="relative z-10 text-white">
            {/* Hero Section */}
            <div className="text-center text-white text-shadow-lg text-shadow-white">
              <p className="text-lg">The Wedding Of</p>
              <h1 className="text-4xl">Eta & Temon</h1>
            </div>

            {/* Countdown Waktu */}
            <div className="flex flex-col items-center gap-16">
              <Countdown targetDate="2025-10-10T23:59:59" />
              <button className="bg-white text-primary px-6 py-3 rounded-full flex items-center gap-2 shadow hover:bg-primary hover:text-white transition-all">
                <FaEnvelopeOpenText className="text-lg" />
                Buka Undangan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
