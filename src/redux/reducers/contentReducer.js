const initialState = {
  loading: false,
  images: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "getImages":
      return { ...state, loading: true };
    case "getImagesSuccess":
      return { ...state, loading: false, images: [...payload] };
    case "getImagesFailure":
      return { ...state, loading: false, images: [], errorMessage: payload };
    case "getImageSearch":
      //let filterImage = state.image.filter(img => img.)
      return { ...state, loading: false, image: [], errorMessage: payload };
    default:
      return state;
  }
};
