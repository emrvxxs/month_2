//1

let triangle = () => {
    let ttt = '*';
    for (let i = 1; i <= 7; i++) {
        console.log(ttt);
        ttt += '*'
    }
}

triangle()

//2

let FizzBuzz = () => {
    let rrr = []
    for (let e = 1; e <= 100; e++) {
        if (e % 3 === 0 && e % 5 === 0) rrr.push('FizzBuzz')
        else if (e % 3 === 0) rrr.push('Fizz')
        else if (e % 5 === 0) rrr.push('buzz')
        else rrr.push(e)
    }
    return console.log(rrr);
}
FizzBuzz()

//3

let CountChar = (sl, s) => {
    let ggg = 0;
    let tt = s.toLowerCase()
    let q = sl.toLowerCase()
    for (let hh of q) {
        if (hh === tt) ggg++
    }
    console.log('количество символов ' + s + ' в слове ' + sl + ' = ' + ggg);
}
CountChar("avadakedavraaaa", "A")
CountChar("HeloooWoooord", "o")


//4
let CapitalizeString = (str) => {
    str = str.toLowerCase()
    if (str === '') {
        console.log(str);
    } else {
        str = str[0].toUpperCase() + str.substring(1)
        console.log(str)
    }
}

CapitalizeString("еВГЕНИЙ")
CapitalizeString("Киселев")