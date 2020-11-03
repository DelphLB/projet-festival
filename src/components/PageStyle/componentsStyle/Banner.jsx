import React from 'react';
import '../../CSS/PageStyle/Banner.css';

const Banner = () => {
  // const [video, setVideo] = useState({});

  // useEffect(() => {
  //   Axios.get(`https://api-festit-09-20.herokuapp.com/api/styles/${idStyle}`)
  //     .then((results) => results.data)
  //     .then((data) => setVideo(data[0]));
  // }, []);

  return (
    <div className="banner">
      Banner
      {/* <video src={video.url_video} /> */}
    </div>
  );
};

export default Banner;
