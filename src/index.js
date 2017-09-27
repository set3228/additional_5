module.exports = function check(str, bracketsConfig) {
	var strArr = str.split('');

	for(var i = 0; (i + 1) < strArr.length; i++) {
    var currBrackets = [strArr[i], strArr[i + 1]];
    /* Сравниваем попарно рядом стоящие элементы с массивами соответствия скобок*/
		for(var j = 0; j < bracketsConfig.length; j++) {
			if(currBrackets[0] == bracketsConfig[j][0]
				&& currBrackets[1] == bracketsConfig[j][1]) {

				strArr.splice(i, 2);
				i = -1;
				break;
			}
		}
	}
	return !strArr.length;
}
