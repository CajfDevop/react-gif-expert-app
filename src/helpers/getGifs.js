export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=41xU3O0e6Sku3UNjpwj7OKNFCjgHaqGm&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((elem) => ({
    id: elem.id,
    title: elem.title,
    url: elem.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};
