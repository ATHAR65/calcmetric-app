import { ImageResponse } from "next/og";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "TheMetricApp — Free Financial Calculators & Tax Tools";
    const description = searchParams.get("description") || "Smart Financial Calculators for Everyone";
    const type = searchParams.get("type") || "website";

    const titleMaxLength = 70;
    const descMaxLength = 100;

    const truncatedTitle = title.length > titleMaxLength
      ? title.slice(0, titleMaxLength - 3) + "..."
      : title;

    const truncatedDesc = description.length > descMaxLength
      ? description.slice(0, descMaxLength - 3) + "..."
      : description;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            padding: "80px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative grid pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.05,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={`h-${i}`}
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "white",
                  marginTop: i === 0 ? "105px" : "105px",
                }}
              />
            ))}
          </div>

          {/* Decorative circles */}
          <div
            style={{
              position: "absolute",
              right: "-100px",
              top: "-100px",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              backgroundColor: "#6366F1",
              opacity: 0.08,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "40px",
              bottom: "-60px",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              backgroundColor: "#6366F1",
              opacity: 0.1,
            }}
          />

          {/* Brand mark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #6366F1, #4F46E5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "24px",
                fontWeight: 800,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              M
            </div>
            <span
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "#94A3B8",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              {type === "calculator" ? "Calculator" : type === "blog" ? "Blog" : "Free Financial Calculators"}
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "white",
              fontFamily: "system-ui, -apple-system, sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              maxWidth: "700px",
              marginBottom: "24px",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {truncatedTitle}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: "22px",
              fontWeight: 400,
              color: "#94A3B8",
              fontFamily: "system-ui, -apple-system, sans-serif",
              lineHeight: 1.4,
              maxWidth: "600px",
              marginBottom: "40px",
            }}
          >
            {truncatedDesc}
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#64748B",
              fontFamily: "system-ui, -apple-system, sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span>themetricapp.com</span>
            <span style={{ color: "#475569" }}>•</span>
            <span style={{ color: "#6366F1" }}>100% Free</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          "cache-control": "public, max-age=31536000, immutable",
        },
      }
    );
  } catch (e) {
    return new Response(`Failed to generate OG image: ${e.message}`, {
      status: 500,
    });
  }
}
