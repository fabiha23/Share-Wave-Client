import React, { useEffect, useState, useMemo } from "react";
import Article from "../Components/Article";
import axios from "axios";
import Loading from "../Components/Loading";

const AllArticles = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState(null);
  const [selected, setSelected] = useState(""); // category filter
  const [sort, setSort] = useState("newest"); // default sort newest

  // Filter articles by category
  const filteredArticles =
    selected === "All" || !selected
      ? articles
      : articles?.filter((arti) => arti.category === selected);

  // Sort filtered articles based on sort state
  const sortedArticles = useMemo(() => {
    if (!filteredArticles) return [];

    if (sort === "newest") {
      return [...filteredArticles].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    } else if (sort === "oldest") {
      return [...filteredArticles].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    }
  }, [filteredArticles, sort]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/articles?sort=${sort}`)
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [sort]); // refetch on sort change

  return (
    <div className="bg-base-200">
      <title>All Articles | ShareWave</title>
      <div className="max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3">
        <div className="py-9">
          {loading ? (
            <Loading />
          ) : (
            <>
              <h2 className="text-4xl font-bold text-center text-accent">
                All Articles
              </h2>

              {/* Category Filter Buttons */}
              <div
                className="filter my-6 w-fit mx-auto"
                onClick={(e) => {
                  if (e.target.type === "radio") {
                    setSelected(e.target.getAttribute("aria-label"));
                  }
                }}
              >
                <input
                  className="btn filter-reset"
                  type="radio"
                  name="metaframeworks"
                  aria-label="All"
                />
                <input
                  className="btn bg-info checked:bg-info text-base-200 mt-1"
                  type="radio"
                  name="metaframeworks"
                  aria-label="Career & Skills"
                />
                <input
                  className="btn bg-info checked:bg-info text-base-200 mt-1"
                  type="radio"
                  name="metaframeworks"
                  aria-label="Study Tips"
                />
                <input
                  className="btn bg-info checked:bg-info text-base-200 mt-1"
                  type="radio"
                  name="metaframeworks"
                  aria-label="Tech & Tools"
                />
                <input
                  className="btn bg-info checked:bg-info text-base-200 mt-1"
                  type="radio"
                  name="metaframeworks"
                  aria-label="Mental Health Wellness"
                />
                <input
                  className="btn bg-info checked:bg-info text-base-200 mt-1"
                  type="radio"
                  name="metaframeworks"
                  aria-label="Fitness & Nutrition"
                />
                <input
                  className="btn bg-info checked:bg-info text-base-200 mt-1"
                  type="radio"
                  name="metaframeworks"
                  aria-label="Productivity"
                />
                <input
                  className="btn bg-info checked:bg-info text-base-200 mt-1"
                  type="radio"
                  name="metaframeworks"
                  aria-label="Money Management"
                />
                <input
                  className="btn bg-info checked:bg-info text-base-200 mt-1"
                  type="radio"
                  name="metaframeworks"
                  aria-label="Other"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="flex justify-center mb-6">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="select rounded-full focus:outline-0"
                >
                  <option value="" disabled>
                    Sort by
                  </option>
                  <option value="newest">Newest to Oldest</option>
                  <option value="oldest">Oldest to Newest</option>
                </select>
              </div>

              {/* Articles Grid */}
              <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2">
                {sortedArticles?.length ? (
                  sortedArticles.map((article) => (
                    <Article key={article._id} article={article} />
                  ))
                ) : (
                  <p className="text-center text-accent opacity-70 col-span-full">
                    No articles found.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
