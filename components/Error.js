//-------Error.js--------
import { useRouteError } from "react-router";
export let Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <h1>Error</h1>
      <p>{err.status}</p>
      <p>{err.data}</p>
    </>
  );
};
