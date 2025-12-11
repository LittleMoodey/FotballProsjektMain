import FotballAdd from "../components/AddNewAthlete";

const RegisterPage = () => {
  return (
    <>
      <header className="rounded-xl  p-4 space-y-2 grid justify-center px-4 py-2 text-center">
        <h1 className="text-lg font-semibold">Registrerings side</h1>
      </header>
      <div>
        <FotballAdd />
      </div>
    </>
  );
};

export default RegisterPage;
