import React, { useEffect } from "react";
import { useSearch } from "../../context/Search";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!values.keyword.trim()) return;
      const { data } = await axios.get(
        `https://ecommerce-back-e9fw.onrender.com/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log("Search error:", error);
    }
  };

  // ✅ Clear search keyword when route changes and it's not the search page
  useEffect(() => {
    if (location.pathname !== "/search" && values.keyword !== "") {
      setValues({ ...values, keyword: "" });
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) =>
            setValues({ ...values, keyword: e.target.value })
          }
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
