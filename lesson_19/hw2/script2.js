function User(name, age){
    this.name = name;
    this.age = age;
    
    User.prototype.info = function(){
        return `${this.name} (${this.age})`;
    }
}


let person = {
    //name: "jack",
    info: function(){return this.name;} 
}

let ann = {
    name: "ann",
    __proto__:person

}
console.log(ann);
console.log(ann.info());





let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
  __proto__
};
