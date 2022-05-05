const maça = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr,thisArg){
    return arr.map(function(item){
      return item*this.value;
    }, thisArg)
}

const nums = [1,2]

console.log("this -> maçã",mapComThis(nums,maça));

console.log("this -> laranja",mapComThis(nums,laranja));
