import { useParams } from "react-router-dom";

export function MovieDetails() {
  const { id } = useParams();
  return (
    <>
      <h1>MovieDetails for {id}</h1>
    </>
  );
}
