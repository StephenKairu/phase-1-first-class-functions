function receivesAFunction(cb) {
    cb();
}

function namedFunction(num1, num2) {
    console.log(num1*num2);
}

const returnsANamedFunction = () => {
    return function receivesAFunction(cb){};
}

const returnsAnAnonymousFunction = () => function() {};