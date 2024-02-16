import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
const VideoPage = () => {
  const [videolink, setVideolink] = useState("");
  const url = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();
  useEffect(() => {
    const token = import.meta.env.VITE_TOKEN;
    fetch(`${url}api/modules/?course_id=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.results[0].content_desc[0].image_video);
        setVideolink(data.results[0].content_desc[0].image_video);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);
  return (
    <div className="h-full w-full flex top-1/2 left-1/2 flex-col justify-center items-center">
      <video controls width="">
        <source src={`${url}media/TEST_VIDEO.mp4`} type="video/mp4"/>
        Sorry, your browser doesn't support videos.
      </video>
    </div>
  );
};
export default VideoPage;