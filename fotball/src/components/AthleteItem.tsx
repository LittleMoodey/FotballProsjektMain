import type { IAthlete } from "../interfaces/IAthlete";

const AthleteItem = ({ player }: { player: IAthlete }) => {
  return (
<<<<<<< Updated upstream
    <article className="w-64 p-2 border-2 rounded border-gray-200 shadow-lg shadow-gray-300/50">
      <h2 className="font-bold">{player.name}</h2>
      <img
        className="h-60 w-full object-cover"
        src={`http://localhost:5212/images/athletes/${player.image}`}
        alt=""
      />
      <h4>Price: {player.price}M</h4>
=======
    <article className=" bg-white rounded-xl shadow-md border border-slate-100 p-4 space-y-2 grid justify-center px-4 py-2 text-center">
      <h2 className="text-lg font-semibold text-slate-900">{player.name}</h2>
      <img
        className=""
        src={`http://localhost:5212/images/athletes/${player.image}`}
        alt=""
        style={{ height: "300px" }}
      />
      <h4 className="text-sm text-slate-700">Id: {player.id}</h4>
      <h4 className="font-semibold text-base">Price: {player.price}M</h4>
>>>>>>> Stashed changes
      <h3>
        {player.purchaseStatus ? (
          "Utilgjengelig for kjøp"
        ) : (
          <button className="bg-purple-500 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-purple-400 transition">
            Kjøp Spiller
          </button>
        )}
      </h3>
    </article>
  );
};

export default AthleteItem;
