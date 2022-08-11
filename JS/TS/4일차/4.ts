type SuperPrint = {
    <TypePlaceholder>(arr:TypePlaceholder[]) : void
}

type SuperPrint2 = {
    <TypePlaceholder>(arr:TypePlaceholder[]) : TypePlaceholder
}
/*
    type SuperPrint = {
    (arr: number[]) : void
    (arr: boolean[]) : void
    (arr: string[]) : void
    (arr: (number|boolean)[]) : void //이런식으로 섞어서 사용해야함. 별로 안좋음.
    }

    generic 사용 방법
    1. 재너릭을 사용한다고 알려줘야 함.

 */
const superPrint : SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

const superPrint2 : SuperPrint2 = (arr) => arr[0]

superPrint([1,2,3,4,]);
superPrint([true, false, true]);
superPrint(['1', '2', '3']);
const a = superPrint2([1,2,3,4,]);
const b = superPrint2([true, false, true]);
const c = superPrint2(['1', '2', '3']);

/*
    만약에 형이 섞인 배열을 superPrint 하고 싶은 경우
 */
superPrint([1, 2, true, false])