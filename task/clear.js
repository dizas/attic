// Конфигурация
const path = require("../config/path.js");

// Удаление дирректорий
const del = require('del');

// Удаление ненужных дирректорий
const clear = () => {
	return del(path.root)
}

module.exports = clear;