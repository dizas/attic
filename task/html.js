const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

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
// Вывод ошибок
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');


// Обработка HTML
const html = () => {
	return src(path.html.src)
		.pipe(plumber({ errorHandler: notify.onError() }))
		.pipe(fileInclude())
		.pipe(removeEmptyLines())
		.pipe(formatHtml(app.formatHtml))
		//.pipe(size({ title: "Размер до сжатия" }))
		//.pipe(htmlMin({ collapseWhitespace: true }))
		//.pipe(size({ title: "Размер после сжатия" }))
		.pipe(dest(path.html.dest))
}

module.exports = html;