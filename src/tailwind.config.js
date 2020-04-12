module.exports = {
  theme: {
    // 👇 this makes Tailwind merge the configuration w/o overriding it.
    extend: {
      height: theme => ({
        "screen-0.8": "calc(100vh * 0.8)",
        "screen-0.7": "calc(100vh * 0.7)",
        "screen-0.6": "calc(100vh * 0.6)",
        "screen-0.5": "50vh",
        "screen-0.33": "calc(100vh / 3)",
        "screen-0.25": "calc(100vh / 4)",
        "screen-0.2": "calc(100vh / 5)",
        "screen-400px": "400px",
        "screen-500px": "500px",
        "screen-600px": "600px",
        "screen-800px": "800px"
      }),
      width: theme => ({
        "360px": "360px"
      })
    },
  },
  variants: { display: ["responsive", "hover", "focus"] },
  plugins: [],
}
