
const { src, dest, watch, series, parallel } = require("gulp");

// Плагины HTML
// Сборка HTML
const fileInclude = require("gulp-file-include");
// Удаление пустых линий 
const removeEmptyLines = require("gulp-remove-empty-lines");
// Форматирование HTML
const formatHtml = require('gulp-format-html');
// Минимизация кода HTML
const htmlMin = require('gulp-htmlmin');
// Измерение размера HTML файла
const size = require('gulp-size');

// Системные плагины
// Запуск браузера
const browserSync = require('browser-sync').create();
// Вывод ошибок
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
// Удаление дирректорий
const del = require('del');


// Обработка HTML
const html = () => {
	return src("./src/html/*.html")
		.pipe(plumber({ errorHandler: notify.onError() }))
		.pipe(fileInclude())
		.pipe(removeEmptyLines())
		.pipe(formatHtml({ "indent_with_tabs": true }))
		//.pipe(size({ title: "Размер до сжатия" }))
		//.pipe(htmlMin({ collapseWhitespace: true }))
		//.pipe(size({ title: "Размер после сжатия" }))
		.pipe(dest("./public"))
		.pipe(browserSync.stream())
}

// Удаление ненужных дирректорий

const clear = () => {
	return del("./public")
}

// Сервер
const server = () => {
	browserSync.init({
		server: {
			baseDir: "./public"
		}
	});
}

//Наблюдение
const watcher = () => {
	watch("./src/html/**/*.html", html)
}

// Задачи
exports.html = html;
exports.watch = watcher;

exports.dev = series(
	clear,
	html,
	parallel(watcher, server)
)