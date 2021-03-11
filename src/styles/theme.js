const breakpoints = [
	"320px", //xs
	"414px", //s
	"768px", //m
	"1024px", //l
	"1440px", //xl
	"1920px",
	"2560px",
];

// aliases
breakpoints.xs = breakpoints[0];
breakpoints.s = breakpoints[1];
breakpoints.m = breakpoints[2];
breakpoints.l = breakpoints[3];
breakpoints.xl = breakpoints[4];

const theme = {
	breakpoints,
	colors: {
		primary: "#DE0000",
		secondary: "white",
		active: "#DE0000",
		inactive: "rgb(177, 177, 177)",
		black: "#212B31",
		white: "#EDF6F9",
		sand: "#FFDDD2",
		mint: "#83C5BE",
		darkMint: "#006D77",
		hotPink: "#ED217C",
		yellow: "#F6BD60",
	},
	fontSizes: {
		s: ".8rem",
		m: "1rem",
		l: "1.2rem",
		title: "1.5rem",
		info: ".8rem",
		h1: "3rem",
	},
	sizes: {
		width: {
			s: "150px",
			m: "300px",
			l: "350px",
			xl: "400px",
		},
		height: {
			shortButton: "40px",
			button: "60px",
			input: "60px",
		},
	},
	space: {
		margin: {
			button: "10px",
			input: "10px",
		},

		padding: {
			container: "20px",
			button: "10px",
			input: "10px",
		},
	},
	borders: {
		button: "1px solid black",
	},
	radii: {
		button: "8px",
	},
};

export default theme;
