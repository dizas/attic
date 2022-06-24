const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
// Обработка JavaScript
const babel = require('gulp-babel');
// Сборка файлов JavaScript
const webpack = require('webpack-stream');

// Системные плагины
// Вывод ошибок
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');


// Обработка JavaScript
const js = () => {
	return src(path.js.src, { sourcemaps: true })
		.pipe(plumber({ errorHandler: notify.onError() }))
		.pipe(babel())
		.pipe(webpack(app.webpack))
		.pipe(dest(path.js.dest, { sourcemaps: true }))
}

module.exports = js;