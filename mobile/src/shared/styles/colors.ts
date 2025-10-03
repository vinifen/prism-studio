export const colors = {
  primary: "#222324",
  secondary: "#2E2F30",
  gradient: { 
    colors: ["#FFFFFF", "#D4AA8C", "#A5BF53", "#AE8436", "#A91919"] as const,
    locations: [0, 0.25, 0.5, 0.75, 1] as const,
    gradientStart: { x: 0, y: 0 },
    gradientEnd: { x: 1, y: 0 }
  }
};
