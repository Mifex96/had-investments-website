export default function TestPage() {
  return (
    <main style={{ padding: "var(--space-6)" }}>

      {/* Title: big text + brand colour + brand font */}
      <h1 style={{
        fontSize: "var(--text-4xl)",
        fontFamily: "var(--font-sans)",
        lineHeight: "var(--leading-tight)",
        color: "var(--brand-primary)",
      }}>
        HAD Investments
      </h1>

      {/* Body text: comfortable size + readable line-height */}
      <p style={{
        fontSize: "var(--text-xl)",
        lineHeight: "var(--leading-normal)",
        maxWidth: "60ch",
      }}>
        A premium investment platform built with design tokens for consistency.
      </p>

      {/* A container for the button + card, with consistent gaps */}
      <div style={{
        marginTop: "var(--space-8)",
        display: "grid",
        gap: "var(--space-4)",
      }}>

        {/* Button: brand colour, rounded corners, padding from the spacing scale */}
        <button style={{
          padding: "var(--space-3) var(--space-4)",
          background: "var(--brand-primary)",
          color: "var(--primary-foreground)",
          border: "none",
          borderRadius: "var(--radius-md)",
          fontSize: "var(--text-base)",
          cursor: "pointer",
        }}>
          Get Started
        </button>

        {/* Card: card background, border, inner padding, rounded corner */}
        <div style={{
          padding: "var(--space-6)",
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
        }}>
          <h2 style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-sans)" }}>
            What we do
          </h2>
          <p style={{ marginTop: "var(--space-2)" }}>
            We build investment tools that are fast, transparent, and beautiful.
          </p>
        </div>

      </div>
    </main>
  );
}