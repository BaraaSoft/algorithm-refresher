



function debounce(fn, delay) {
    let timer;
    return function () {
        let args = arguments;
        let context = this;
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)

    }
}

function getData() {
    // calls api to get data

    console.log("api call ...")
}


const fetchData = debounce(getData, 300)

