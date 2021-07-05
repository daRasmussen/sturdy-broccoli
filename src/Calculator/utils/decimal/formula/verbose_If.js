const verbose_If = function (f, c, incoming, isDecimal) {
    if (c === '0' && incoming === '0') {
        if (f === '') {
            return incoming
        } else {
            return f
        }
    } else {
        // checks if
        if (isDecimal.test(f)) {
            return f.slice(0, -1) + incoming
        } else {
            return f + incoming
        }
    }
}

export default verbose_If;