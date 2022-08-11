const player : {
    name : string,
    age? : number //있는지 없는지 모를떄는 ?를 작성해야함 (선택적 변수)
} = {
    name : 'nico'
}

if(player.age && player.age < 10){

}
type Age = number;
type Player = {
    readonly name : string,
    //age? : number
    age? : Age
}

const nico : Player = {
    name : 'nico'
}

const lynn : Player = {
    name : 'lynn',
    age : 15
}

/*
    name과 age가 동일 타입
    변수처럼 Alias(별칭) 타입을 생성 가능

 */

// function playerMaker(name:string) : Player{
//     return{
//         //name:name
//         name
//     }
// }

const playerMaker = (name:string) : Player => ({name});

const jang = playerMaker('jang');
jang.age = 12
//jang.name = 'bin'; readonly 경우 에러남

const numbers : readonly number[] = [1,2,3,4]

//numbers.push(1) err

// ---- obj

//Tuple은 array를 생성할 수 있게 함 (최소한의 길이를 가져야 하고 특정 위치에 특정 타입이 있어야 함)
const member: [string, number, boolean] = ['bin', 12, false]
            //readonly
//member[0] = 1 member에 첫번째는 string

let a : undefined = undefined
let b : null = null

//any는 ts를 빠져 나올때 쓰는 방법
// ts는 기본적으로 c를 any의 array라고 생각한다
let c = []

let d : any[] = [1,2,3,4]
let e : any = true

d+e; // err안남

//api return type을 모를때 unknown

let f: unknown;
if(typeof f === 'number'){
    let g = f + 1
}

