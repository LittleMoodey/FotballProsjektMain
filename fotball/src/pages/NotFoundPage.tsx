import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
<<<<<<< Updated upstream
    <>
      <section className="container mx-auto">
        <h1 className="bold color">NotFoundPage</h1>
        <Link to="/">Til Admin siden</Link>
      </section>
    </>
=======
    <section className="rounded-xl  p-4 space-y-2 grid justify-center px-4 py-2 text-center">
      <h1 className="text-lg font-semibold">NotFoundPage</h1>
      <Link to="/">Til Admin siden</Link>
    </section>
>>>>>>> Stashed changes
  );
};

export default NotFoundPage;
