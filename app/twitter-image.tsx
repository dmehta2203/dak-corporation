import { ImageResponse } from "next/og";

export const alt =
  "DAK Corporation — Intelligent technology and AI-powered products";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#050507",
          color: "#ffffff",
          fontFamily:
            "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "750px",
            height: "750px",
            borderRadius: "9999px",
            top: "-420px",
            left: "210px",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.34) 0%, rgba(59,130,246,0.10) 46%, rgba(5,5,7,0) 72%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "9999px",
            right: "-160px",
            bottom: "-220px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.17) 0%, rgba(5,5,7,0) 72%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            padding: "72px 78px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "76px",
                height: "76px",
                borderRadius: "22px",
                background:
                  "linear-gradient(135deg, #0B0B10, #11111A)",
                border:
                  "2px solid rgba(168,85,247,0.55)",
                fontSize: "34px",
                fontWeight: 800,
              }}
            >
              D
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: "34px",
                  fontWeight: 800,
                  letterSpacing: "8px",
                }}
              >
                DAK
              </div>

              <div
                style={{
                  marginTop: "5px",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "5px",
                  color: "#94A3B8",
                }}
              >
                CORPORATION
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "78px",
              display: "flex",
              flexDirection: "column",
              maxWidth: "1000px",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "3px",
                color: "#C4B5FD",
              }}
            >
              INTELLIGENT TECHNOLOGY
            </div>

            <div
              style={{
                marginTop: "22px",
                fontSize: "68px",
                lineHeight: 1.03,
                fontWeight: 700,
                letterSpacing: "-3px",
              }}
            >
              We build intelligent
            </div>

            <div
              style={{
                marginTop: "2px",
                fontSize: "68px",
                lineHeight: 1.03,
                fontWeight: 700,
                letterSpacing: "-3px",
                background:
                  "linear-gradient(90deg, #FFFFFF 0%, #C4B5FD 48%, #93C5FD 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              technology.
            </div>

            <div
              style={{
                marginTop: "28px",
                fontSize: "23px",
                lineHeight: 1.45,
                color: "#94A3B8",
                maxWidth: "820px",
              }}
            >
              AI-powered software and digital products
              built for modern businesses.
            </div>
          </div>

          <div
            style={{
              marginTop: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                color: "#64748B",
              }}
            >
              DAK Corporation
            </div>

            <div
              style={{
                fontSize: "15px",
                color: "#94A3B8",
              }}
            >
              BizAI Employee • AI-powered business software
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}