import React, { useState, useEffect } from "react";

import instance from "../../axios";
import "./productRow.scss";

const ProductRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="product-row">
      <div className="product-row-title">
        <h2>{title}</h2>
        <h4 className="">Explore all </h4>
        <span className="chevron right"></span>
      </div>
      <div className="product-row-items">
        {movies.map((movie) => (
          <ProductRowItem movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

const ProductRowItem = (props) => {
  return (
    <div className="product-row-item">
      <img
        src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`}
        alt={props.movie.name}
      />
    </div>
  );
};

export { ProductRow, ProductRowItem };
