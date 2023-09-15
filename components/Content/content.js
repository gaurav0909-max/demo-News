"use client";

import { useEffect, useState } from "react";
import "animate.css";
// import { BsSearch } from 'react-icons/bs';
import "../../app/business/page.css";
import Loader from "../Loader";
import Card from "./Card/card";
import Trending from "./Trending/trending";
import Politics from "./PoliticsCard/politics";
import Player from "./VideoPlayer/player";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { API_KEY, BASE_URL } from "../utils/utils";
// const API_KEY = "75290e46328c45baa61a7ac7114d53b9";
// const BASE_URL = "${BASE_URL}";
const USER_AGENT = "localhost";
async function fetchNewsData(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching news data:", error);
    return [];
  }
}

async function fetchPoliticsData(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data?.articles;
  } catch (error) {
    console.error("Error fetching news data:", error);
    return [];
  }
}

async function fetchTrendingData(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data?.articles;
  } catch (error) {
    console.error("Error fetching news data:", error);
    return [];
  }
}
export default function Content() {
  const [news, setNews] = useState([]);
  const [politics, setPolitics] = useState([]);
  const [trending, setTrending] = useState([]);
  const isScreenWidthLessThan1000 = window.innerWidth < 1000;
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("window.innerWidth", window.innerWidth);
    const initialUrl = `${BASE_URL}/top-headlines?country=in&apiKey=${API_KEY}`;
    fetchNewsData(initialUrl)
      .then((articles) => {
        setNews(articles);
        setLoading(false); // Set loading to false when data is ready
      })
      .catch(() => setLoading(false)); // Set loading to false on error
    const trendingImages = `${BASE_URL}/top-headlines?country=in&category=entertainment&apiKey=${API_KEY}`;
    fetchTrendingData(trendingImages).then((articles) => {
      setTrending(articles);
      setLoading(false);
    });
    const politicsData = `${BASE_URL}/top-headlines?country=in&category=technology&apiKey=${API_KEY}`;
    fetchPoliticsData(politicsData).then((articles) => {
      setPolitics(articles);
      setLoading(false);
    });
    console.log("pp", politics);
   
    console.log("rr", trendingImages);
  }, [isScreenWidthLessThan1000]);
 
  const router = useRouter()
  const avatars = trending
    .filter((item) => item.urlToImage)
    .map((item) => item.urlToImage);
  const info = trending.map((item) => ({
    title: item.title,
    publishedAt: item.publishedAt,
    url:item.url
  }));
  console.log("info", info);

  console.log("loading", loading);
  console.log("news", news);
  console.log("trending", trending);
  console.log("politics", politics);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    router.push(`search/${query}`)
  };

  const date = new Date();
const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);

console.log('formattedDate', formattedDate);

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="pt-2 flex justify-between items-center mx-auto text-gray-600" >
            
            <form onSubmit={handleSubmit} className="w-full max-w-sm p-4">
              <div className=" flex items-stretch p-2">
                <input
                  className="w-full h-10 px-4 py-2 border border-blue-400 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search news"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {/* <button onClick={handleEvent()}>Search</button> */}
              </div>
            </form>
            <div className="p-6">
              <p className="text-sm">{formattedDate}</p>
            </div>
          </div>
          
          <div className="flex items-center px-1">
            <p className="text-xl  p-4">Bollywood News</p>
            <hr
              style={{ width: "100%", height: "2px", background: "#dfdfdf",margin:'auto' }}
            />
          </div>
          <div className="p-3 flex justify-center items-center mx-auto text-gray-600 ">
            <Trending avatars={avatars} info={info} />
          </div>
          <div>
            <>
              <div className="parent">
                <div className="div1 flex justify-start items-center px-3 ">
                  <h3 className="text-xl p-2">Trending Now</h3>
                  <hr
                    style={{
                      width: "100%",
                      height: "2px",
                      background: "#dfdfdf",
                      margin:'auto'
                    }}
                  />
                </div>
                <div className="div2 p-4 flex justify-center " style={{}}>
                  {news.slice(0, 1).map((data, index) => (
                    <Card
                      key={index}
                      data={data}
                      width={"200px"}
                      height={"200px"}
                    />
                  ))}
                </div>
                <div className="div3 p-4 flex justify-center">
                  {news.slice(1, 2).map((data, index) => (
                    <Card
                      key={index}
                      data={data}
                      width={"200px"}
                      height={"200px"}
                    />
                  ))}
                </div>
                <div className="div4 p-4  flex justify-center">
                  {news.slice(2, 3).map((data, index) => (
                    <Card
                      key={index}
                      data={data}
                      width={"470px"}
                      height={"420px"}
                    />
                  ))}
                </div>
                <div className="div5 p-4  flex justify-center">
                  {news.slice(3, 4).map((data, index) => (
                    <Card
                      key={index}
                      data={data}
                      width={"200px"}
                      height={"200px"}
                    />
                  ))}
                </div>
                <div className="div6 p-4  flex justify-center">
                  {news.slice(4, 5).map((data, index) => (
                    <Card
                      key={index}
                      data={data}
                      width={isScreenWidthLessThan1000 ? "500px" : "200px"}
                      height={"200px"}
                    />
                  ))}
                </div>
              </div>
            </>
          </div>
          <div className="categories container p-4">
            <div className="heading flex items-center gap-2 ">
              <p className="text-xl py-2 ">Explore</p>
              <hr
                style={{ width: "100%", height: "2px", background: "#dfdfdf" }}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Link href="/business">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBuZXdzfGVufDB8fDB8fHww&w=1000&q=80"
                    alt=""
                    style={{ borderRadius: "15px" }}
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end">
                    <div className="text-white text-center">
                      <p className="text-md font-semibold align-text-bottom">
                        Business
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/fashion">
              <div className="relative">
                <img
                  src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19393.jpg?w=1380&t=st=1694516306~exp=1694516906~hmac=e45cd022afcdcae8353a0c0d9cc27fca78cd3850afc579870269c94e2839fd31"
                  alt=""
                  style={{ borderRadius: "15px" }}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end">
                  <div className="text-white text-center">
                    <p className="text-md font-semibold align-text-bottom">
                      Fashion
                    </p>
                  </div>
                </div>
              </div>
              </Link>
              <Link href="/education">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1510531704581-5b2870972060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                  alt=""
                  style={{ borderRadius: "15px" }}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end">
                  <div className="text-white text-center">
                    <p className="text-md font-semibold align-text-bottom">
                      Education
                    </p>
                  </div>
                </div>
              </div>
              </Link>
              <Link href="/travel">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                  style={{ borderRadius: "15px" }}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end">
                  <div className="text-white text-center">
                    <p className="text-md font-semibold align-text-bottom">
                      Travel
                    </p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>

          <div className="world-politics container p-4">
            <div className="heading">
              <div className="flex items-center">
                <p className="text-xl py-2">Tech world</p>
                <hr
                  style={{
                    width: "100%",
                    height: "2px",
                    background: "#dfdfdf",
                  }}
                />
              </div>
            </div>
            <div>
              <Politics politics={politics} />
            </div>
          </div>
          <div className="Videos">
            <div className="flex items-center p-4">
              <p className="text-xl">Politics World</p>
              <hr
                style={{ width: "100%", height: "2px", background: "#dfdfdf" }}
              />
            </div>
            <Player />
          </div>
        </div>
      )}
    </div>
  );
}
