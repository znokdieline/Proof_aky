import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getImages } from "../redux/actions/contentActions";

const Catalog = ({ dispatchGetImages, images }) => {
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    dispatchGetImages(searchString);
  }, []);

  return (
    <>
      {images.map((image) => (
        <div key={image.id}>
          <h3>{`${image.title}: `}</h3>{" "}
          <img src={image.images.downsized_still.url} />
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  const { content } = state;
  return {
    images: content.images
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchGetImages: (searchString) => dispatch(getImages(searchString))
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
