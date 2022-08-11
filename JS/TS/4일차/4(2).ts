type SuperPrint = <T>(arr : T[]) => T
type SuperPrint2 = <T, M>(a : T[], b : M) => T


//generic은 내가 요규한 대로 signature 를 생성해줄 수 있는 도구
//typePlaceholder

const superPrint : SuperPrint = (a) => a[0];
const superPrint2 : SuperPrint2 = (a) => a[0];

const a = superPrint([1, 2, 3, 4])
const b = superPrint([1, "2", true]);

const c = superPrint2(['1', true, 2], 'x');
console.log(b);