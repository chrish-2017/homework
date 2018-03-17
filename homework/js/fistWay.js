/*检查所在行是否能赢，参数说明：目标棋子，棋盘，所在位置行坐标，所在位置列坐标*/
function checkRow(flag, array, row, col) {
    const len = array.length
    for (let k = 0; k < len; k++) {
        if (k !== col && array[row][k] !== flag) {
            return false
        }
    }
    return true
}
/*检查所在列是否能赢，参数说明：目标棋子，棋盘，所在位置行坐标，所在位置列坐标*/
function checkCol(flag, array, row, col) {
    const len = array.length
    for (let k = 0; k < len; k++) {
        if (k !== row && array[k][col] !== flag) {
            return false
        }
    }
    return true
}
/*检查所在斜线方向是否能赢，参数说明：目标棋子，棋盘，所在位置行坐标*/
function checkSlash(flag, array, row) {
    const len = array.length
    for (let k = 0; k < len; k++) {
        if (k !== row && array[k][k] !== flag) {
            return false
        }
    }
    return true
}
/*检查所在反斜线方向是否能赢，参数说明：目标棋子，棋盘，所在位置行坐标*/
function checkBackSlash(flag, array, row) {
    const len = array.length
    for (let k = 0; k < len; k++) {
        if (k !== row && array[k][len - k - 1] !== flag) {
            return false
        }
    }
    return true
}
/*检查所在位置是否能赢，参数说明：目标棋子，棋盘，所在位置行坐标，所在位置列坐标*/
function checkCanWin(flag, array, row, col) {
    const len = array.length
    //检测行
    if (checkRow(flag, array, row, col)) {
        return true
    }
    //检查列
    if (checkCol(flag, array, row, col)) {
        return true
    }
    //检查斜线方向
    if (row === col) {
        if (checkSlash(flag, array, row)) {
            return true
        }
    }
    //检查反斜线方向
    if (row + col === len - 1) {
        if (checkBackSlash(flag, array, row)) {
            return true
        }
    }
    return false
}
/*依次检查所有为空的位置是否能赢，参数说明：目标棋子，棋盘*/
function fistWay(flag, array) {
    const result = []
    const len = array.length
    for (let row = 0; row < len; row++) {
        for(let col = 0; col < len; col++) {
            //棋盘位置为空才需要检查
            if (array[row][col] === 'e') {
                const canWin = checkCanWin(flag, array, row, col)
                if (canWin) {
                    result.push([row, col])
                }
            }
        }
    }
    return result
}



