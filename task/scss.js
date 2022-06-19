const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
// Измерение размера файла
const size = require('gulp-size');
// Обработка SCSS
const sass = require('gulp-sass')(require("sass"));
// Добавление префиксов для браузеров в css
const autoprefixer = require('gulp-autoprefixer');
// Сжатие css
const csso = require('gulp-csso');
// Переименование файла
const rename = require('gulp-rename');
// Краткая форма свойств
const shorthand = require('gulp-shorthand');
// Группировка медеа запросов
const groupCssMediaQueries = require('gulp-group-css-media-queries');

// Системные плагины
// Вывод ошибок
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');


// Обработка SCSS
const scss = () => {
	return src(path.scss.src, { sourcemaps: true })
		.pipe(plumber({ errorHandler: notify.onError() }))
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(groupCssMediaQueries())
		.pipe(shorthand())
		.pipe(dest(path.scss.dest, { sourcemaps: true }))
		.pipe(rename({ suffix: ".min" }))
		.pipe(csso())
		.pipe(dest(path.scss.dest, { sourcemaps: true }))
}

module.exports = scss;