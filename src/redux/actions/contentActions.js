import Axios from "axios";
const apiKey = "xix2DJIfwiXMVOtoBEXEZZib4zhPLIXB";

const giphyApi = (endpoint) => {
  return Axios(`https://api.giphy.com/v1/gifs/${endpoint}&api_key=${apiKey}`);
};

export const getImages = (searchString) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "getImages" });
      const response = await giphyApi(`trending?limit=25`);
      dispatch({ type: "getImagesSuccess", payload: response.data.data });
      dispatch({ type: "getImageSearch", payload: response.data.data });
    } catch (error) {
      console.log("Error:" + error);
      dispatch({ type: "getImagesFailure", payload: error.message });
    }
  };
};
