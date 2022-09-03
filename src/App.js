import React from "react";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";

const data = [
  {
    attributes: {
      source: {
        data: {
          attributes: {
            name: "3ca1 - Intre Lalele.mp3",
            url: "http://localhost:1337/uploads/3ca1_Intre_Lalele_cfae85214a.mp3",
          },
        },
      },
      artist: "Coozul",
      thumbnail: {
        data: {
          attributes: {
            url: "http://localhost:1337/uploads/first_1aac8a7d7f.jpg",
          },
        },
      },
    },
  },
  {
    attributes: {
      source: {
        data: {
          attributes: {
            name: "Arapu - Wasted [UND007].mp3",
            url: "http://localhost:1337/uploads/Arapu_Wasted_UND_007_0ae2b08986.mp3",
          },
        },
      },
      artist: "Coozul",
      thumbnail: {
        data: {
          attributes: {
            url: "http://localhost:1337/uploads/second_9fe37bc272.jpg",
          },
        },
      },
    },
  },
  {
    attributes: {
      source: {
        data: {
          attributes: {
            name: "Chiodan - Discul Preferat.mp3",
            url: "http://localhost:1337/uploads/Chiodan_Discul_Preferat_d70cfb90c1.mp3",
          },
        },
      },
      artist: "Coozul",
      thumbnail: {
        data: {
          attributes: {
            url: "http://localhost:1337/uploads/third_11faf04618.jpg",
          },
        },
      },
    },
  },
];

function App() {
  return (
    <div className="App">
      <div>
        <AudioPlayer tracks={data} />
      </div>
    </div>
  );
}

export default App;
