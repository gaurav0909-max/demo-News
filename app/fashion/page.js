"use client";
import Header from "@/components/Header/header";
import { useEffect, useState } from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import "../business/page.css";
import { API_KEY, BASE_URL } from "@/components/utils/utils";
import Footer from "@/components/Footer/footer";
import Login from "../login/page";
import { auth } from "../firebase";
export default function Fashion() {
  const [news, setNews] = useState([]);
  const [user, setUser] = useState(null); // Initialize user as null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up the Firebase onAuthStateChanged listener
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setLoading(false); // Loading is complete
      setUser(currentUser); // Set the current user

      // currentUser will be null if no user is signed in
      if (currentUser) {
        console.log("Current user:", currentUser);
      } else {
        console.log("No user signed in");
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  async function logMovies() {
    const response = await fetch(
      `${BASE_URL}/everything?q=fashion&apiKey=${API_KEY}`
    );
    const movies = await response.json();
    console.log(movies);
    setNews(movies?.articles);
  }

  useEffect(() => {
    logMovies();
  }, []);

  return (
    <>
    {!user ?(<Login/>):
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="container pt-5" style={{ position: "relative" }}>
          <p
            className="text-white font-bold underline"
            style={{
              position: "absolute",
              top: "50%",
              width: "100%",
              textAlign: "center",
              fontSize: "32px",
              textDecorationStyle: "dashed",
            }}
          >
            Fashion
          </p>
          <p
            className="text-white py-3"
            style={{
              position: "absolute",
              top: "65%",
              width: "100%",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            Fashion is like eating, you shouldn't stick to the same menu.
          </p>

          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt=""
            style={{
              height: "300px ",
              width: "100% ",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </div>
        <div className="flex">
          <div
            className="grid grid-cols-1  lg:grid-cols-2 gap-4 h-5/6 py-10 mx-auto"
            style={{ flex: "75%" }}
          >
            {news?.slice(0, 10).map(
              (data, index) =>
                data.urlToImage && (
                  <div className="row-span-1 col-span-1 card" key={index}>
                    <a
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div className="card-content">
                        <img
                          src={data.urlToImage}
                          className="w-full lg:h-[300px] h-[200px] rounded-lg"
                          alt={data?.title}
                          style={{ width: "100%", borderRadius: "12px" }}
                        />

                        <div
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3, // Number of lines to display
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            maxHeight: "100px", // Height of three lines
                          }}
                        >
                          <p
                            className="text-md lg:text-2xl"
                            style={{ padding: "6px" }}
                          >
                            {data.title}
                          </p>
                        </div>

                        <p className="text-sm " style={{ padding: "6px" }}>
                          {data.publishedAt}
                        </p>
                      </div>
                    </a>
                  </div>
                )
            )}
          </div>
          <div
            className="side-div "
            style={{ flex: "25%", height: "fit-content" }}
          >
            <div className="my-10 p-4" style={{ border: "1px dotted black" }}>
              <div
                className="div1 flex   w-full"
                style={{
                  height: "40px",
                  border: "1px solid black",
                }}
              >
                <div style={{ width: "2%", backgroundColor: "black" }}></div>
                <div
                  style={{ width: "98%", background: "white" }}
                  className="text-lg px-2 py-1 font-semibold"
                >
                  Follow us
                </div>
              </div>
              <div className="flex p-3 gap-4">
                <div
                  className="flex flex-row items-center gap-3  py-4"
                  style={{ width: "50%" }}
                >
                  <BsFacebook fontSize={30} color="#1877F2" />
                  <div>
                    <p className=" text-black font-semibold font-sans">
                      Facebook
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-row gap-3  py-4"
                  style={{ width: "50%" }}
                >
                  <BsTwitter fontSize={30} color="#26a7de " />
                  <div>
                    <p className=" text-black font-semibold font-sans">
                      Twitter
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex p-3 gap-4">
                <div
                  className="flex flex-row items-center gap-3  py-4"
                  style={{ width: "50%" }}
                >
                  <BsInstagram fontSize={30} color="#E1306C" />
                  <div>
                    <p className=" text-black font-semibold font-sans">
                      Instagram
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-row gap-3  py-4 "
                  style={{ width: "50%" }}
                >
                  <BsGithub fontSize={30} color="black" />
                  <div>
                    <p className=" text-black font-semibold font-sans">
                      Github
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex p-3 gap-4">
                <div
                  className="flex items-center flex-row gap-3  py-4"
                  style={{ width: "50%" }}
                >
                  <BsLinkedin fontSize={30} color="#0A66C2" />
                  <div>
                    <p className=" text-black font-semibold font-sans">
                      LinkedIn
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-row gap-3  py-4"
                  style={{ width: "50%" }}
                >
                  <BsYoutube fontSize={30} color="CD201F" />

                  <div>
                    <p className=" text-black font-semibold font-sans">
                      Youtube
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-10  p-4" style={{ border: "1px dotted black" }}>
              <div
                className="div1 flex   w-full"
                style={{
                  height: "40px",
                  border: "1px solid black",
                }}
              >
                <div style={{ width: "2%", backgroundColor: "black" }}></div>
                <div
                  style={{ width: "98%", background: "white" }}
                  className="text-lg px-2 py-1 font-semibold"
                >
                  News Letter
                </div>
              </div>
              <div>
                <p
                  className="text-center p-3"
                  style={{ fontFamily: "sans-serif", fontSize: "18px" }}
                >
                  Subscribe our newsletter for latest news around the world.
                  Let's stay updated!
                </p>
              </div>
              <div className="div border-solid border-2 border-slate-300 p-2 m-2">
                <input
                  name="name"
                  placeholder="Name..."
                  className="border-none"
                />
              </div>
              <div className="div border-solid border-2 border-slate-300 p-2 m-2">
                <input
                  name="Email"
                  placeholder="Email..."
                  className="border-none"
                />
              </div>
              <button className="div border-solid border-cyan-100 border-2 p-2 text-center bg-green-400 w-full">
                <p className="font-bold">Subscribe</p>
              </button>
            </div>
            <div className="md:my-10 p-4 m-8">
              <img
                src="https://hqd.mah.mybluehost.me/themes/newsophy/main/wp-content/uploads/2022/09/banner-1.jpg"
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

}
</>
         
);
}
