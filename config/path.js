const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
	root: pathDest,

	html: {
		src: pathSrc + "/html/*.html",
		watch: pathSrc + "/html/**/*.html",
		dest: pathDest
	},

	scss: {
		src: pathSrc + "/scss/*.scss",
		watch: pathSrc + "/scss/**/*.scss",
		dest: pathDest + "/css"
	}
}