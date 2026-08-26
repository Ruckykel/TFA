export default function Loading() {
    return (
        <main
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "60vh",
                flexDirection: "column",
                gap: "1.5rem",
            }}
        >
            {/* Spinner */}
            <div
                style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "3px solid rgba(0,0,0,0.10)",
                    borderTopColor: "var(--color-accent)",
                    animation: "spin 0.7s linear infinite",
                }}
            />

            <p
                style={{
                    fontSize: "0.85rem",
                    color: "var(--color-muted)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                }}
            >
                Loading…
            </p>

            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </main>
    );
}
