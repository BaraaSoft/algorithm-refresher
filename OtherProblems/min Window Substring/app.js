/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (searchString, t) {
    const requiredStrMap = buildHashMap(t);
    const windowStrMap = new Map();
    let left = 0, right = 0;
    const requiredStrLen = requiredStrMap.size
    let matchingWindowLen = 0;

    let minWindowStr = "";
    let minWindowLen = Number.MAX_VALUE;

    while (right < searchString.length) {
        let rchar = searchString[right];
        addToHashMap(windowStrMap, rchar)
        if (requiredStrMap.has(rchar)) {
            const isCharCountMatchRequired = (requiredStrMap.get(rchar) == windowStrMap.get(rchar))
            if (isCharCountMatchRequired) {
                matchingWindowLen++;
            }
        }

        while (matchingWindowLen == requiredStrLen && left <= right) {
            let lchar = searchString[left];
            let currentWindowLen = right - left + 1
            if (currentWindowLen < minWindowLen) {
                minWindowLen = currentWindowLen;
                minWindowStr = searchString.substring(left, right + 1)
            }
            windowStrMap.set(lchar, windowStrMap.get(lchar) - 1)
            if (requiredStrMap.has(lchar)) {
                let isNotValidWindow = windowStrMap.get(lchar) < requiredStrMap.get(lchar);
                if (isNotValidWindow) {
                    matchingWindowLen--;
                }
            }
            left++;
        }

        right++;

    }

    return minWindowStr
}



// return  s.slice(l-1,r+1).length < len  ? s.slice(l-1,r+1) :str


const addToHashMap = (map, char) => {
    let occurrence = 0
    if (map.has(char)) {
        occurrence = map.get(char)
        map.set(char, occurrence + 1)
    } else {
        map.set(char, occurrence)
    }
    return map
}

const buildHashMap = (str) => {
    let map = new Map()
    for (let i = 0; i < str.length; i++) {
        addToHashMap(map, str[i])
    }

    return map
}