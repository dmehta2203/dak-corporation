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
            width: "720px",
            height: "720px",
            borderRadius: "9999px",
            top: "-390px",
            left: "240px",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.32) 0%, rgba(59,130,246,0.10) 45%, rgba(5,5,7,0) 72%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "9999px",
            right: "-170px",
            bottom: "-220px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(5,5,7,0) 72%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            opacity: 0.5,
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
                boxShadow:
                  "0 0 40px rgba(168,85,247,0.18)",
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
              display: "flex",
              flexDirection: "column",
              marginTop: "78px",
              maxWidth: "1000px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "3px",
                color: "#C4B5FD",
                textTransform: "uppercase",
              }}
            >
              Intelligent technology
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
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                color: "#64748B",
              }}
            >
              Building intelligent technology for the
              businesses of tomorrow.
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 18px",
                borderRadius: "999px",
                border:
                  "1px solid rgba(255,255,255,0.10)",
                background:
                  "rgba(255,255,255,0.035)",
                fontSize: "14px",
                color: "#CBD5E1",
              }}
            >
              BizAI Employee
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