



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



    (function main() {
        function func(callback, i) {

            callback.call(this, i)
        }
        for (var i = 0; i < 5; i++) {
            func((param) => {
                setTimeout(() => {
                    console.log(param)
                }, 1000)
            }, i)

        }
    }())






