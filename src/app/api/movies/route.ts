import MOVIES from "@/src/app/data/movies.json";

export async function GET() {
  return Response.json(MOVIES);
}
