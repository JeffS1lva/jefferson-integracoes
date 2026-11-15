import { ImageResponse } from "next/og";

import { profile } from "@/lib/content";

export const alt = `${profile.name}, Integrações SAP`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px 80px",
          background: "#0e1218",
          color: "#e8ecf2",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#98a3b5",
            letterSpacing: 2,
          }}
        >
          {profile.name.toUpperCase()} · {profile.location.toUpperCase()}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {profile.headline.before}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#f0914a",
            }}
          >
            {profile.headline.emphasis}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#f0914a",
            letterSpacing: 1,
          }}
        >
          SAP Business One · Service Layer · Node
        </div>
      </div>
    ),
    size
  );
}
