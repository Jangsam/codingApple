//콜 시그니쳐
type Add = (a:number, b:number) => number;
/*
    길게 표현한 call signature
    오버로딩은 함수가 여러개의 call signatures를 가지고 있을때 발생
    다른 여러개의 arguments를 갖고 있을 떄
 */

type add = {
    (a:number, b:number) : number
    (a:number, b:string) : number
}
function add(a:number, b:number){
    return a + b
}

//arrow

const Add:add = (a,b) => {
    if(typeof b === 'string') return a
    return a + b;
}

/*
    call signature 는 함수 위에 마우스 올렸을때 보이는 것
    엄청 많이 사용 함
 */


/*
    call signature에서 파라메터 인자 수가 다르면 ts에서 오류가 남
    ex)
    type add = {
     1   (a:number, b:number) : number
     2  (a:number, b:number, c:number) : number
    }

    1번 call signature 사용 but err
    const add:add(a, b) => {
        return a + b
    }
    해결법 c를 사용 안할수도 있다는 것을 표기
    const add:add(a, b, c?:number) => {
        if(c) return a + b + c
        return a + b
    }
 */

