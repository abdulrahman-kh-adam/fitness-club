export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4ce093d046mshbf9ac2dd8b661d5p1ea849jsn15dfa9867246",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const videosOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4ce093d046mshbf9ac2dd8b661d5p1ea849jsn15dfa9867246",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
