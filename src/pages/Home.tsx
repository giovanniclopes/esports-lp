import Logo from "../assets/logo";

export default function Home() {
  return (
    <div className="pb-3">
      <div className="m-5">
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
          <div className="flex justify-center items-end bg-leagueoflegends bg-no-repeat bg-cover w-48 h-64 rounded transition-all hover:w-52 hover:h-68">
            <div className="flex flex-col bg-gradient-to-t from-gray-900/80 from-10% via-gray-900/90 via-30% w-full rounded-b-lg px-3">
              <h1 className="font-semibold text-xl w-full">
                League of Legends
              </h1>
              <span className="font-normal text-gray-400">4 anúncios</span>
            </div>
          </div>
          <div className="flex justify-center items-end bg-apexlegends bg-no-repeat bg-cover w-48 h-64 rounded transition-all hover:w-52 hover:h-68">
            <div className="flex flex-col bg-gradient-to-t from-gray-900/80 from-10% via-gray-900/90 via-30% w-full rounded-b-lg px-3">
              <h1 className="font-semibold text-xl w-full">Apex Legends</h1>
              <span className="font-normal text-gray-400">11 anúncios</span>
            </div>
          </div>
          <div className="flex justify-center items-end bg-counterstrike bg-no-repeat bg-cover w-48 h-64 rounded transition-all hover:w-52 hover:h-68">
            <div className="flex flex-col bg-gradient-to-t from-gray-900/80 from-10% via-gray-900/90 via-30% w-full rounded-b-lg px-3">
              <h1 className="font-semibold text-xl w-full">Counter Strike</h1>
              <span className="font-normal text-gray-400">16 anúncios</span>
            </div>
          </div>
          <div className="flex justify-center items-end bg-warcraft bg-no-repeat bg-cover w-48 h-64 rounded transition-all hover:w-52 hover:h-68">
            <div className="flex flex-col bg-gradient-to-t from-gray-900/80 from-10% via-gray-900/90 via-30% w-full rounded-b-lg px-3">
              <h1 className="font-semibold text-xl w-full">
                World of Warcraft
              </h1>
              <span className="font-normal text-gray-400">3 anúncios</span>
            </div>
          </div>
          <div className="flex justify-center items-end bg-dota2 bg-no-repeat bg-cover w-48 h-64 rounded transition-all hover:w-52 hover:h-68">
            <div className="flex flex-col bg-gradient-to-t from-gray-900/80 from-10% via-gray-900/90 via-30% w-full rounded-b-lg px-3">
              <h1 className="font-semibold text-xl w-full">Dota 2</h1>
              <span className="font-normal text-gray-400">3 anúncios</span>
            </div>
          </div>
          <div className="flex justify-center items-end bg-fortnite bg-no-repeat bg-cover w-48 h-64 rounded transition-all hover:w-52 hover:h-68">
            <div className="flex flex-col bg-gradient-to-t from-gray-900/80 from-10% via-gray-900/90 via-30% w-full rounded-b-lg px-3">
              <h1 className="font-semibold text-xl w-full">Fortnite</h1>
              <span className="font-normal text-gray-400">25 anúncios</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-12 max-w-6xl mx-auto">
        <div className="flex justify-between items-center bg-magenta-500 border-t-4 border-purple-500 rounded-lg w-full px-6 pr-10 py-10">
          <div className="flex flex-col justify-center items-start">
            <h3 className="font-bold text-2xl">Não encontrou seu duo?</h3>
            <p className="text-gray-450">Publique um anúncio para encontrar novos players!</p>
          </div>
          <div>
            <button className="bg-purple-500 px-4 py-3 font-medium text-lg rounded transition-all hover:opacity-80">Publicar anúncio</button>
          </div>
        </div>
      </div>
    </div>
  );
}
