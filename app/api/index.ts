const API_BASE_URL = "https://api.themoviedb.org/3";

export const optionsGet = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}`,
  },
};

export const getMoviesList = async ({
  query,
  page,
}: {
  query: string;
  page: number;
}) => {
  const res = await fetch(
    `${API_BASE_URL}/movie/${query}?page=${page}`,
    optionsGet,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
};
