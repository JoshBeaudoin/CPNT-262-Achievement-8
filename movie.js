import * as url from "url";

export default async (req, res) => {
  const queryObject = url.parse(req.url, true).query;

  let data = { data: [{ data: "movie" }] };

  const { search } = queryObject;

  if (search) {
    data = await $fetch(`https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1${search}`);
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
};
