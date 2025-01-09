// Definition der Arrays
let bucketList: string [] = ["Paris", "Tokio", "New York"];
let luckyNumbers: number [] = [7, 13, 21];
let favoritePeople: string [] = ["Patrick", "Debo", "Bea"];


console.log (bucketList);
let removedBucketListValue: string | undefined = bucketList.shift();
console.log (removedBucketListValue);
console.log (bucketList);


console.log (luckyNumbers);
let removedLuckyNumbersValue: number | undefined = luckyNumbers.shift();
console.log (removedLuckyNumbersValue);
console.log (luckyNumbers);


console.log (favoritePeople);
let removedFavoritePeopleValue: string | undefined = favoritePeople.shift();
console.log (removedFavoritePeopleValue);
console.log (favoritePeople);