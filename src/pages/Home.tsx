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
      <div>
        <div>
          <div className="bg-leagueoflegends p-12 ">
            <div>
              <h1>League of Legends</h1>
              <span></span>
            </div>
          </div>
          <div >
            <div className="bg-dota2">
              <h1>Apex Legends</h1>
              <span></span>
            </div>
          </div>
          <div className="bg-dota2">
            <div>
              <h1>Counter Strike</h1>
              <span></span>
            </div>
          </div>
          <div className="bg-dota2">
            <div>
              <h1>World of Warcraft</h1>
              <span></span>
            </div>
          </div>
          <div className="bg-dota2">
            <div>
              <h1>Dota 2</h1>
              <span></span>
            </div>
          </div>
          <div className="bg-dota2">
            <div>
              <h1>Fortnite</h1>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
