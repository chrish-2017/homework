/*检查行是否能赢，并返回可以赢的位置，参数说明：目标棋子，棋盘, 行坐标*/
function checkRow(flag, array, row) {
    let result = []
    let count = 0
    const len = array.length
    for (let k = 0; k < len; k++) {
        if (array[row][k] === 'e') {
            result.push(row, k)
            count++
            if (count > 1) {
                return null
            }
        } else if (array[row][k] !== flag) {
            return null
        }
    }
    return result
}
/*检查列是否能赢，并返回可以赢的位置，参数说明：目标棋子，棋盘，列坐标*/
function checkCol(flag, array, col) {
    let result = []
    let count = 0
    const len = array.length
    for (let k = 0; k < len; k++) {
        if (array[k][col] === 'e') {
            result.push(k, col)
            count++
            if (count > 1) {
                return null
            }
        } else if (array[k][col] !== flag) {
            return null
        }
    }
    return result
}
/*检查斜线方向是否能赢，并返回可以赢的位置，参数说明：目标棋子，棋盘*/
function checkSlash(flag, array) {
    let result = []
    let count = 0
    const len = array.length
    for (let k = 0; k < len; k++) {
        if (array[k][k] === 'e') {
            result.push(k, k)
            count++
            if (count > 1) {
                return null
            }
        } else if (array[k][k] !== flag) {
            return null
        }
    }
    return result
}
/*检查反斜线方向是否能赢，并返回可以赢的位置，参数说明：目标棋子，棋盘*/
function checkBackSlash(flag, array) {
    let result = []
    let count = 0
    const len = array.length
    for (let k = 0; k < len; k++) {
        if (array[k][len-k-1] === 'e') {
            result.push(k, len-k-1)
            count++
            if (count > 1) {
                return null
            }
        } else if (array[k][len-k-1] !== flag) {
            return null
        }
    }
    return result
}
/*依次检查所有行、所有列、斜线方向、反斜线方向是否能赢，参数说明：目标棋子，棋盘*/
function secondWay(flag, array) {
    const result = []
    let loc
    const len = array.length
    //检查所有行
    for (let row = 0; row < len; row++) {
       loc = checkRow(flag, array, row)
       if (loc) {
           result.push(loc)
       }
    }
    //检查所有列
    for (let col = 0; col < len; col++) {
        loc = checkCol(flag, array, col)
        if (loc) {
            //可能存在交点，避免重复添加
            const index = result.findIndex(item => {
                return item[0] === loc[0] && item[1] === loc[1]
            })
            if (index === -1) {
                result.push(loc)
            }
        }
    }
    //检查斜线方向
    loc = checkSlash(flag, array)
    if (loc) {
        //可能存在交点，避免重复添加
        const index = result.findIndex(item => {
            return item[0] === loc[0] && item[1] === loc[1]
        })
        if (index === -1) {
            result.push(loc)
        }
    }
    //检查反斜线方向
    loc = checkBackSlash(flag, array)
    if (loc) {
        const index = result.findIndex(item => {
            return item[0] === loc[0] && item[1] === loc[1]
        })
        if (index === -1) {
            result.push(loc)
        }
    }
    return result
}

