// = String-Methods-TS-Level-1_1

let firstName: string = 'Bill';
let lastName: string = 'Gates';

console.log(`Length of firstName: ${firstName.length}`);
console.log(`Length of lastName: ${lastName.length}`);

let fullName: string = `${firstName} ${lastName}`;
console.log(`Full name: ${fullName}`);

console.log(`Length of fullName: ${fullName.length}`);


// = String-Methods-TS-Level-1_2

const earthQuote: string = "How inappropriate to call this planet Earth, when clearly it is Ocean.";

const positionH: number = earthQuote.indexOf("h");
console.log(`Position of 'h': ${positionH}`);


const positionEarth: number = earthQuote.indexOf("Earth");
console.log(`Position of 'Earth': ${positionEarth}`);


const positionMoon: number = earthQuote.indexOf("Moon");
console.log(`Position of 'Moon': ${positionMoon}`);


// = String-Methods-TS-Level-1_4

// const susisStatus: string = 'Susi is going to codingschool';


// const name: string = susisStatus.slice(0, 4); // Susi
// const firstWord: string = susisStatus.slice(5, 7); // is
// const phrase: string = susisStatus.slice(5, 17) + susisStatus.slice(23 ,33); // is going to school
// const lastWord: string = susisStatus.slice(23, 33); // school
// const combined: string = susisStatus.slice(0, 8) + ' is ' + lastWord; // Susi is school

// document.getElementById('output1')!.innerHTML = name;
// document.getElementById('output2')!.innerHTML = firstWord;
// document.getElementById('output3')!.innerHTML = phrase;
// document.getElementById('output4')!.innerHTML = lastWord;
// document.getElementById('output5')!.innerHTML = combined;

// = String-Methods-TS-Level-1_5 

// const whereIsSusi: string = 'Susi is back from codingschool';

// const susi: string = whereIsSusi.substring(0, 4); // "Susi"
// const is: string = whereIsSusi.substring(5, 7); // "is"
// const school: string = whereIsSusi.substring(24); // "school"
// const susiIsSchool: string = `${susi} ${is} ${school}`; // "Susi is school"

// document.getElementById('output1')!.innerHTML = susi;
// document.getElementById('output2')!.innerHTML = is;
// document.getElementById('output3')!.innerHTML = school;
// document.getElementById('output4')!.innerHTML = susiIsSchool;

// = string-methods-ts-level-1_7

// const samsStatus: string = "Sam is good at codingschool";

// const samsStatusBad: string = samsStatus.replace("good at codingschool", "bad at school");
// const susisStatusGood: string = samsStatus.replace("Sam is", "Susi is").replace("codingschool", "school");
// const samsStatusTennis: string = samsStatus.replace("codingschool", "tennis");

// document.getElementById('output')!.innerHTML = samsStatusBad + " ";
// document.getElementById('output')!.innerHTML += susisStatusGood + " ";
// document.getElementById('output')!.innerHTML += samsStatusTennis + " ";


// = string-methods-ts-level-1_9

const infoAboutSam: string = "Sam is going to codingschool";
const susi: string = "Susi";
const and: string = "and";

const samToMovieTheater: string = infoAboutSam.replace('codingschool', 'school').concat(' and the movie theater');
const samToMovieTheaterShort: string = infoAboutSam.replace('codingschool', 'the movie theater');
const susiAndSamToSchool: string = susi.concat(' and ', and, ' ', infoAboutSam.replace('codingschool', 'school')).concat(' are going to school');
const susiAndSamToGymAndMovie: string = susi.concat(' ', and, ' ', infoAboutSam.replace('codingschool', '')).concat(' going to gym and to the movie theater');
const susiToSchoolAndMovie: string = susi.concat(' is going to school and to the movie theater');

document.getElementById('output')!.innerHTML = 
    samToMovieTheater + "<br>" +
    samToMovieTheaterShort + "<br>" +
    susiAndSamToSchool + "<br>" +
    susiAndSamToGymAndMovie + "<br>" +
    susiToSchoolAndMovie;