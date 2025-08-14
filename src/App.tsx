// image
import imgBg from "./assets/photo/bg.png";
import imgWanita from "./assets/photo/1.jpg";
import imgPria from "./assets/photo/2.jpg";

// icons
import { FaEnvelopeOpenText } from "react-icons/fa";

// components
import Countdown from "./components/Countdown";

const coupleData = [
  {
    role: "Mempelai Wanita",
    name: "Eta",
    image: imgWanita,
  },
  {
    role: "Mempelai Pria",
    name: "Ahmad",
    image: imgPria,
  },
];

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black overflow-x-hidden">
      <div
        className="relative p-4 min-h-screen w-[27rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${imgBg})` }}
      >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/0"></div>

        {/* Konten */}
        <div className="relative z-10 text-white flex flex-col min-h-screen">
          {/* Hero Section */}
          <div className="text-center mt-12">
            <p className="text-lg font-light">The Wedding Of</p>
            <h1 className="text-5xl font-bold nameHero">Eta & Ahmad</h1>
          </div>

          {/* Countdown */}
          <div className="flex flex-col items-center gap-6 mt-auto mb-12">
            <Countdown targetDate="2025-10-10T23:59:59" />
            <button className="bg-white text-primary px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:bg-primary hover:text-white transition-all duration-300">
              <FaEnvelopeOpenText className="text-lg" />
              Buka Undangan
            </button>
          </div>

          {/* Profil Mempelai */}
          <div className="grid grid-cols-2 gap-4 text-center mb-6">
            {coupleData.map((person, index) => (
              <div key={index}>
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow-md"
                />
                <p className="mt-3 text-sm opacity-80">{person.role}</p>
                <p className="font-semibold">{person.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
