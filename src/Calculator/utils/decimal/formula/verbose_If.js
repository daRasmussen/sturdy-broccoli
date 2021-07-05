const verbose = function (f, c, incoming, isDecimal) {
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

const not_verbose =  function(f, c, incoming, isDecimal) {
    const res = c === '0' && incoming === '0'
                   ? f === ''
                     ? incoming
                     : f
                   : isDecimal.test(f)
                   ? f.slice(0, -1) + incoming
                   : f + incoming
    return res;
}

export {
    verbose,
    not_verbose
};