import './styles/main.css';
import logo from './assets/logo-nlw-esport.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';

interface CardProps {
  title: string;
  numAds: number;
  imageURL: string;
}

const Card = ({ title, numAds, imageURL }: CardProps) => {
  return (
    <>
      <a
        href="/"
        className="relative rounded-lg overflow-hidden"
      >
        <img src={`/${imageURL}.svg`} alt="card image" />
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
          <strong className="font-bold text-white block">
            {title}
          </strong>
          <span className="text-zinc-300 text-sm block mt-1">
            {numAds} anuncios
          </span>
        </div>
      </a>
    </>
  );
};

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="logo" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        esta aqui
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <Card
          title="League of Legends"
          numAds={10}
          imageURL="game-1"
        />
        <Card title="Apex" numAds={10} imageURL="game-2" />
        <Card
          title="Counter Strike"
          numAds={10}
          imageURL="game-3"
        />
        <Card
          title="World of Warcraft"
          numAds={10}
          imageURL="game-4"
        />
        <Card
          title="Dota 2"
          numAds={10}
          imageURL="game-5"
        />
        <Card
          title="Fortnite"
          numAds={10}
          imageURL="game-6"
        />
      </div>
      <div className="w-full self-strecth bg-nlw-gradient pt-1 mt-8 rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-white font-black block text-2xl">
              Nao encontrou seu duo?
            </strong>
            <span className="text-zinc-300 block">
              publique um anuncio e encontre seu duo
            </span>
          </div>
          <button className="px-4 py-3 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anuncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
