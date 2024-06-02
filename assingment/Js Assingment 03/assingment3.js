/*Q1) Create an array of states in india.
Remove all the names starting with vowels from the list. Use array.fil*/
const indiaStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  const statesWithoutVowel = indiaStates.filter(state => {
    const first = state.charAt(0).toLowerCase()
    return !['a', 'e', 'i', 'o', 'u'].includes(first)
  })
  console.log(statesWithoutVowel)

 /* Q2) let str = 'I love my India'
output expected = 'India my love I'
Write code for this.*/

let string = "I love my India";

let words = string.split(" ");

let reverseWords = words.reverse();

let reverseString = reverseWords.join(" ");

console.log(reverseString);

/*Q3) let string = 'INDIA'
output = 'INDONESIA'
Use array.splice*/

let stri = "INDIA";

let Arr = Array.from(stri);

Arr.splice(3, 0, "O", "N", "E", "S");

let output = Arr.join("");
console.log(output);


//Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
let vowelCnt = 0;
let consonantCnt = 0;
const chcheck = (x) => {
  for (i in x) {
    if ("aeiou".includes(x[i])) {
      vowelCnt++;
    } else {
      consonantCnt++;
    }
  }
  return vowelCnt, consonantCnt;
};

chcheck("jayprakshkumarsingh");

console.log(vowelCnt, consonantCnt);

/*Q5) Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function.*/

function correctfn(string, wrong, correct) {
    let output;
    output = string.replace(wrong, correct);
    return output;
  }
  
  const text = correctfn("The time has come.", "time", "day");
  console.log(text);



/*Q6) inputArr = [1,2,3,9,10,7,5,4,3]
answer = [9, 10, 7]
User array.filter and return numbers greater than 5.*/

const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
function checkn(num) {
  return num > 5;
}

let ans = inputArr.filter(checkn);

console.log(ans);



/*Q7)
const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];
Output = [
{ name: "Ram", average: 70 },
{ name: "Mohan", average: 80 },
{ name: "Sai", average: 70 },
{ name: "Hemang", average: 85 },
];
Use array.map and array.reduce.*/

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  const out = students.map((student) => {
    const sum = student.scores.reduce((ac, score) => ac + score, 0);
    const avg = sum / student.scores.length;
    return { name: student.name, average: avg };
  });
  
  console.log(out);



/*Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6.*/

function repSumNum(x) {
    if (x < 10) {
      return x;
    }
    let sum = 0;
  
    while (x > 0) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }
  
    return repSumNum(sum);
  }
  let n = 456;
  const a = repSumNum(n);
  
  console.log(a);



/*Q9) Write a function to count the number of words in a paragraph.*/

const cntWpara = (paragraph) => {
    const words = paragraph.split(/\s+/);
  
    return words.length;
  };
  
  const para ="  aperiam perferendis sapiente distinctio ullam iusto eaque nobis.";
  
  console.log(cntWpara(para));



/*Q10) Write a function to reverse a string.
Input - Hello
Outpur - olleH*/

const revString = (x)=>{
    let n = x.length;
    let output = "";
    while(n--){
        output += x[n];
    }
    return output;
}

const st = revString("Hello");
console.log(st);





/*Q11)
Input

[
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
]
    
Output: -
[
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
]
Write code to find average as mentioned above. Use array and object methods.*/

const arr = [
    {
        name: "student1",
        subjects: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        name: "student2",
        subjects: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        name: "student3",
        subjects: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

function calculateAvg(arr){
    const numSub = Object.keys(arr[0].subjects).length;
    const avgScores = [];


    arr.forEach(element => {
        const studentName = element.name;
        const subjects = element.subjects;

        let total = 0;

        Object.values(subjects).forEach(ele => {
            total += ele;
        });
        const avgScore = total / numSub;

        const studentObject = {
            [studentName]:{
                average: avgScore
            }
        };

        avgScores.push(studentObject);

    });
    return avgScores;

}

const averageScores = calculateAvg(arr);

console.log(JSON.stringify(averageScores, null, 4))

