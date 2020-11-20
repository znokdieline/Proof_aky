import React, { useState } from "react";
import { connect } from "react-redux";
import { getImages } from "../redux/actions/contentActions";

const SearchComponent = (props) => {
  const { toSearch, setToSearch } = useState("");

  const handlerSearch = (event) => {
    setToSearch(event.target.value);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Your Search"
          value={toSearch}
          onChange={handlerSearch}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { content } = state;
  return {
    images: content.images
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
