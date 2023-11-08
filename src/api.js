import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID ojyFHuub1ZUNe36pcw3ozP7yhIzjL3sNRErKTTQfcjY",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
