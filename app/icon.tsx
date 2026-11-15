import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#0e1218",
          color: "#f0914a",
          fontSize: 24,
          fontWeight: 700,
          borderRadius: 6,
        }}
      >
        J
      </div>
    ),
    size
  );
}
