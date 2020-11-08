function foo(){
    console.log(this.a);
}

const a = 27;

foo();

function boo(){
    console.log(this.a);
}

var obj = {
    a: 2,
    boo:boo
};

obj.boo();