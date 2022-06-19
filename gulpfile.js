const { watch, series, parallel } = require("gulp");

// Конфигурация
const path = require("./config/path.js");

// Запуск браузера
const browserSync = require('browser-sync').create();

// Задачи

const html = require('./task/html.js');
const scss = require('./task/scss.js');
const clear = require('./task/clear.js');

// Сервер
const server = () => {
	browserSync.init({
		server: {
			baseDir: path.root
		}
	});
}

//Наблюдение
const watcher = () => {
	watch(path.html.watch, html).on("all", browserSync.reload);
	watch(path.scss.watch, scss).on("all", browserSync.reload);
}

// Экспорт
exports.scss = scss;

exports.dev = series(
	clear,
	parallel(html, scss),
	parallel(watcher, server)
)