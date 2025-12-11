import { useState, useRef, type FormEvent } from "react";
import type { IAthlete } from "../interfaces/IAthlete";
import AthleteSearchItem from "./AthleteSearchItem";

import AthleteService from "../services/AthleteService";

const AthleteSearch = () => {
  const [athlete, setAthlete] = useState<IAthlete | null>(null);
  const [error, setError] = useState<string>("");

  const idInput = useRef<HTMLInputElement | null>(null);

  const showAthlete = async (e: FormEvent) => {
    e.preventDefault();

    if (idInput.current) {
      const id = Number(idInput.current.value);

      if (!isNaN(id)) {
        const athleteFromService = await AthleteService.getAthleteByID(id);
        setAthlete(athleteFromService);
        setError("søk godkjent");
      } else {
        setError("Du må skrive inn et gyldig tall som ID.");
      }

      idInput.current.value = "";
    }
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  return (
    <>
      <section className="bg-white rounded-xl p-4 space-y-2 grid justify-center px-4 py-2 text-center">
        <h3>Søk etter Athletes</h3>
        <form onSubmit={showAthlete}>
          <input
            className="border rounded outline-1 focus:outline-red-600"
            ref={idInput}
            type="text"
            placeholder=" Search by ID "
          />
          <button
            className="px-4 px-2 border ml-3 bg-red-200 hover:bg-red-100"
            type="submit"
          >
            Søk
          </button>
        </form>
      </section>
      <section>
        {athlete ? <AthleteSearchItem player={athlete} /> : <p>{error}</p>}
      </section>
    </>
  );
};

export default AthleteSearch;
