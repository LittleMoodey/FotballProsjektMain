import type { FC } from "react";
import type { IAthlete } from "../interfaces/IAthlete";
import AthleteItem from "./AthleteItem";

const AthleteSearchItem: FC<{ player: IAthlete }> = ({ player }) => {
  return (
    <article>
      <AthleteItem player={player} />
    </article>
  );
};
export default AthleteSearchItem;
