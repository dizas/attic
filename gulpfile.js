const { watch, series, parallel } = require("gulp");

// Конфигурация
const path = require("./config/path.js");

// Запуск браузера
const browserSync = require('browser-sync').create();

// Задачи

const html = require('./task/html.js');
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
}

// Экспорт
exports.html = html;
exports.watch = watcher;

exports.dev = series(
	clear,
	html,
	parallel(watcher, server)
)