import React, { useEffect } from "react";
import { Instagram, ExternalLink } from "lucide-react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const InstagramFeed = () => {
  useEffect(() => {
    // Load Instagram embed script
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center">
            <Instagram className="mr-3 text-pink-600" size={28} />
            सामाजिक गतिविधियाँ
          </h3>
          <a
            href="https://www.instagram.com/amarsingh_bjp/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ExternalLink size={20} className="mr-1" />
            Instagram पर देखें
          </a>
        </div>

        <div className="space-y-6">
          {/* Instagram Post Embed */}
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/DI037uyoqHX/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow:
                "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
              width: "99.375%",
            }}
          >
            <div style={{ padding: "16px" }}>
              <a
                href="https://www.instagram.com/p/DI037uyoqHX/?utm_source=ig_embed&utm_campaign=loading"
                style={{
                  background: "#FFFFFF",
                  lineHeight: 0,
                  padding: "0 0",
                  textAlign: "center",
                  textDecoration: "none",
                  width: "100%",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Placeholder for Instagram post content (loading skeleton) */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "50%",
                      flexGrow: 0,
                      height: "40px",
                      marginRight: "14px",
                      width: "40px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "4px",
                        flexGrow: 0,
                        height: "14px",
                        marginBottom: "6px",
                        width: "100px",
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "4px",
                        flexGrow: 0,
                        height: "14px",
                        width: "60px",
                      }}
                    />
                  </div>
                </div>
                <div style={{ padding: "19% 0" }} />
                <div
                  style={{
                    display: "block",
                    height: "50px",
                    margin: "0 auto 12px",
                    width: "50px",
                  }}
                >
                  {/* Instagram loading SVG icon */}
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 60 60"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-511.000000, -20.000000)"
                        fill="#000000"
                      >
                        <g>
                          <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.579,30.349 C511.836,32.258 511.33,34.438 511.183,37.631 C511.04,40.832 511,41.849 511,50 C511,58.152 511.04,59.168 511.183,62.369 C511.33,65.562 511.836,67.743 512.579,69.651 C513.342,71.623 514.368,73.299 516.035,74.966 C517.703,76.633 519.376,77.658 521.349,78.422 C523.257,79.166 525.438,79.673 528.631,79.82 C531.831,79.967 532.853,80 541,80 C549.148,80 550.169,79.967 553.369,79.82 C556.562,79.673 558.743,79.166 560.652,78.422 C562.623,77.658 564.297,76.633 565.965,74.966 C567.633,73.299 568.659,71.623 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.965,59.168 571,58.152 571,50 C571,41.849 570.965,40.832 570.82,37.631" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </a>
            </div>
          </blockquote>

          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/CsIYO3dInRu/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow:
                "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
              width: "99.375%",
            }}
          >
            <div style={{ padding: "16px" }}>
              <a
                href="https://www.instagram.com/p/CsIYO3dInRu/?utm_source=ig_embed&utm_campaign=loading"
                style={{
                  background: "#FFFFFF",
                  lineHeight: 0,
                  padding: "0 0",
                  textAlign: "center",
                  textDecoration: "none",
                  width: "100%",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Placeholder for Instagram post content (loading skeleton) */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "50%",
                      flexGrow: 0,
                      height: "40px",
                      marginRight: "14px",
                      width: "40px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "4px",
                        flexGrow: 0,
                        height: "14px",
                        marginBottom: "6px",
                        width: "100px",
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "4px",
                        flexGrow: 0,
                        height: "14px",
                        width: "60px",
                      }}
                    />
                  </div>
                </div>
                <div style={{ padding: "19% 0" }} />
                <div
                  style={{
                    display: "block",
                    height: "50px",
                    margin: "0 auto 12px",
                    width: "50px",
                  }}
                >
                  {/* Instagram loading SVG icon */}
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 60 60"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-511.000000, -20.000000)"
                        fill="#000000"
                      >
                        <g>
                          <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.579,30.349 C511.836,32.258 511.33,34.438 511.183,37.631 C511.04,40.832 511,41.849 511,50 C511,58.152 511.04,59.168 511.183,62.369 C511.33,65.562 511.836,67.743 512.579,69.651 C513.342,71.623 514.368,73.299 516.035,74.966 C517.703,76.633 519.376,77.658 521.349,78.422 C523.257,79.166 525.438,79.673 528.631,79.82 C531.831,79.967 532.853,80 541,80 C549.148,80 550.169,79.967 553.369,79.82 C556.562,79.673 558.743,79.166 560.652,78.422 C562.623,77.658 564.297,76.633 565.965,74.966 C567.633,73.299 568.659,71.623 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.965,59.168 571,58.152 571,50 C571,41.849 570.965,40.832 570.82,37.631" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </a>
            </div>
          </blockquote>
        </div>

        <div className="text-center text-gray-600">
          <p className="mb-4">
            अधिक पोस्ट देखने के लिए हमारे Instagram पेज पर जाएं
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <a
          href="https://www.instagram.com/amarsingh_bjp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
            और पोस्ट देखें
          </button>
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;
