import FotballList from "../components/AthleteList";
import AthleteSearch from "../components/AthleteSearch";

const AdminPage = () => {
  return (
    <section className="rounded-xl  p-4 space-y-2 grid justify-center px-4 py-2 text-center">
      <h1 className="text-lg font-semibold">Administrative instillinger</h1>
      <AthleteSearch />
      <FotballList />
    </section>
  );
};

export default AdminPage;
