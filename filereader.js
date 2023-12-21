const path = require('path');
const fs = require('fs');
const postsFile = path.join(__dirname, './data.json');



exports.getFile = function () {
    let data;

    try {
        data = fs.readFileSync(postsFile, 'utf-8');
    } catch (error) {
        console.error('Ошибка чтения файла');
        return;
    }
    return !data || data === '' ? [] : JSON.parse(data);
};

exports.setFile = function (data) {
    fs.writeFile(postsFile, JSON.stringify(data), 'utf-8', (error) => {
		if (error) {
			console.error(error);
			return;
		}
		console.log('Данные успешно перезаписаны!');
	});
};
