import React from "react";
import "./styles/App.css";
import AudioPlayer from "./components/AudioPlayer";
import Socials from "./components/Socials";
import { ReactComponent as Disc } from "./static/dj-pad.svg";

const data = [
  {
    attributes: {
      source: {
        data: {
          attributes: {
            name: "3ca1 - Intre Lalele.mp3",
            url: "http://localhost:3000/uploads/3ca1_Intre_Lalele_cfae85214a.mp3",
          },
        },
      },
      artist: "Coozul",
      thumbnail: {
        data: {
          attributes: {
            url: "http://localhost:3000/uploads/first_1aac8a7d7f.jpg",
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
            url: "http://localhost:3000/uploads/Arapu_Wasted_UND_007_0ae2b08986.mp3",
          },
        },
      },
      artist: "Coozul",
      thumbnail: {
        data: {
          attributes: {
            url: "http://localhost:3000/uploads/second_9fe37bc272.jpg",
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
            url: "http://localhost:3000/uploads/Chiodan_Discul_Preferat_d70cfb90c1.mp3",
          },
        },
      },
      artist: "Coozul",
      thumbnail: {
        data: {
          attributes: {
            url: "http://localhost:3000/uploads/third_11faf04618.jpg",
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
            name: "3ca1 - Intre Lalele.mp3",
            url: "http://localhost:3000/uploads/3ca1_Intre_Lalele_cfae85214a.mp3",
          },
        },
      },
      artist: "Coozul",
      thumbnail: {
        data: {
          attributes: {
            url: "http://localhost:3000/uploads/first_1aac8a7d7f.jpg",
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
            url: "http://localhost:3000/uploads/Arapu_Wasted_UND_007_0ae2b08986.mp3",
          },
        },
      },
      artist: "Coozul",
      thumbnail: {
        data: {
          attributes: {
            url: "http://localhost:3000/uploads/second_9fe37bc272.jpg",
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
            name: "3ca1 - Intre Lalele.mp3",
            url: "http://localhost:3000/uploads/3ca1_Intre_Lalele_cfae85214a.mp3",
          },
        },
      },
      artist: "Coozul",
      thumbnail: {
        data: {
          attributes: {
            url: "http://localhost:3000/uploads/first_1aac8a7d7f.jpg",
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
            url: "http://localhost:3000/uploads/Arapu_Wasted_UND_007_0ae2b08986.mp3",
          },
        },
      },
      artist: "Coozul",
      thumbnail: {
        data: {
          attributes: {
            url: "http://localhost:3000/uploads/second_9fe37bc272.jpg",
          },
        },
      },
    },
  },
];

function App() {
  return (
    <div className="App">
      <AudioPlayer tracks={data} />
      <section className="section-about">
        <Disc className="disc" />
        <Socials />
      </section>
    </div>
  );
}

export default App;
