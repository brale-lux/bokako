import { ImageResponse } from "next/og";

export const alt = "Bokako — Digital Tools for Smarter Calculations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#06182A",
          color: "#F4FAFD",
          fontSize: 84,
          fontWeight: 800,
        }}
      >
        <div>Digital Tools for</div>
        <div>Smarter</div>
        <div style={{ color: "#B9F500" }}>Calculations</div>
        <div style={{ fontSize: 34, marginTop: 32, fontWeight: 600 }}>bokako</div>
      </div>
    ),
    size,
  );
}
