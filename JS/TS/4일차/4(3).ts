function superPrint<V>(a : V[]){
    return a[0]
}

type Player<E> = {
    name : string,
    extraInfo : E
}

type NicoExtra = {
    favFood : string
}
type NicoPlayer = Player<NicoExtra>

// generic or call signature
/*
    function printAllNumbers(arr : Array<number>){
    }
    function printAllNumber(arr : number[]) : number
 */




const a = superPrint([1, 2, 3, 4]);
// ts가 알아서 number형이라고 인식
// 형 override 가능
//const b = superPrint<???>(['1', 2, 3]) ??? = 원하는 형

const nico : NicoPlayer = {
    name : "nico",
    extraInfo : {
        favFood : 'kimchi'
    }
}

const lynn  : Player<null> = {
    name : 'lynn',
    extraInfo : null
}