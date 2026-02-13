import MOVIES from "@/src/app/data/movies.json";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const movieId = parseInt(id);
  const movie = MOVIES.find((m: any) => m.id === movieId);
  return Response.json(movie);
}
