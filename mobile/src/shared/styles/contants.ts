export const constants = {
  DEFAULT_RADIUS: 20,
  DEFAULT_PADDING: 16,

  spacing: {
    xs: 2.5,
    sm: 5,
    md: 10,
    lg: 16,
    xl: 32,
  },

  colors: {
    primary: "#222324",
    secundary: "#2E2F30",
    white: "#FFFFFF",
    gradient: { 
      colors: ["#FFFFFF", "#D4AA8C", "#A5BF53", "#AE8436", "#A91919"],
      locations: [0, 0.25, 0.5, 0.75, 1],
      startTransition: { x: 0, y: 0 },
      endTransition: { x: 1, y: 0 },
    }
  },

  validation: {
    errorPrimary: "#A9261C",
    errorSecondary: "#AB3B22",
    confirmPrimary: "#A8AB49",
    confirmSecondary: "#B6B767",
  },

  borderRadius: {
    sm: 5,
    md: 10,
    lg: 16,
    default: 16,
    full: 9999,
  },

  iconSize: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
  },

  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
  }
};
