import Logo from "../assets/logo";

export default function Home() {
  return (
    <div>
      <div className="mt-5">
        <div className="flex items-center justify-center w-full">
          <Logo />
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
        <h1 className="font-inter font-black text-6xl">
          Seu <span className="duo-text">duo</span> está aqui.
        </h1>
      </div>
      <div className="mt-12">
        <div className="flex flex-row items-center justify-center gap-3">

          <div className="flex justify-center items-end bg-leagueoflegends bg-no-repeat bg-cover w-48 h-64 rounded">
            <div className="flex flex-col bg-gradient-to-t from-gray-900/80 from-10% via-gray-900/90 via-30% w-full rounded-b-lg px-3">
              <h1 className="font-semibold text-xl w-full">League of Legends</h1>
              <span className="font-normal text-gray-400">4 anúncios</span>
            </div>
          </div>
          <div className="flex justify-center items-end bg-apexlegends bg-no-repeat bg-cover w-48 h-64 rounded">
            <div className="flex flex-col bg-gradient-to-t from-gray-900/80 from-10% via-gray-900/90 via-30% w-full rounded-b-lg px-3">
              <h1 className="font-semibold text-xl w-full">Apex Legends</h1>
              <span className="font-normal text-gray-400">11 anúncios</span>
            </div>
          </div>
          <div className="flex justify-center items-end bg-counterstrike bg-no-repeat bg-cover w-48 h-64 rounded">
            <div className="flex flex-col bg-gradient-to-t from-gray-900/80 from-10% via-gray-900/90 via-30% w-full rounded-b-lg px-3">
              <h1 className="font-semibold text-xl w-full">Counter Strike</h1>
              <span className="font-normal text-gray-400">16 anúncios</span>
            </div>
          </div>
          <div className="flex justify-center items-end bg-warcraft bg-no-repeat bg-cover w-48 h-64 rounded">
            <div className="flex flex-col bg-gradient-to-t from-gray-900/80 from-10% via-gray-900/90 via-30% w-full rounded-b-lg px-3">
              <h1 className="font-semibold text-xl w-full">World of Warcraft</h1>
              <span className="font-normal text-gray-400">3 anúncios</span>
            </div>
          </div>
          <div className="flex justify-center items-end bg-dota2 bg-no-repeat bg-cover w-48 h-64 rounded">
            <div className="flex flex-col bg-gradient-to-t from-gray-900/80 from-10% via-gray-900/90 via-30% w-full rounded-b-lg px-3">
              <h1 className="font-semibold text-xl w-full">Dota 2</h1>
              <span className="font-normal text-gray-400">3 anúncios</span>
            </div>
          </div>
          <div className="flex justify-center items-end bg-fortnite bg-no-repeat bg-cover w-48 h-64 rounded">
            <div className="flex flex-col bg-gradient-to-t from-gray-900/80 from-10% via-gray-900/90 via-30% w-full rounded-b-lg px-3">
              <h1 className="font-semibold text-xl w-full">Fortnite</h1>
              <span className="font-normal text-gray-400">25 anúncios</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
