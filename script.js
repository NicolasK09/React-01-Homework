//Homework 1
const numbers = [5, -3, 2, -8, 7, -1, 0, -4];

const positiveNumbers = numbers.filter(number => number > 0);

const sumOfPositives = positiveNumbers.reduce((acc, number) => acc + number, 0);

console.log(sumOfPositives); 


//Homework 2

const strings = ['a', 'b', 'c', 'a', 'b', 'c'];

const stringOccurrences = strings.reduce((acc, str) => {
    if (acc[str]) {
      acc[str] += 1;
    } else {
      acc[str] = 1;
    }
    return acc;
  }, {});
  
  console.log(stringOccurrences);

  
//Homework 3

function addAsync(a, b) {
    return new Promise((resolve, reject) => {
      if (a === undefined || b === undefined) {
        resolve(0);
      } else if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject ('პარამეტრები უნდა იყოს რიცხვები');
      }
    });
  }
  
  // ფუნქცია რამდენიმეჯერ ხდება წინააღმდეგ პარამეტრებით და შედეგს დაბეჭდავს კონსოლში.
  
  addAsync(2, 3)
    .then(result => console.log('შედეგი:', result))
    .catch(error => console.error('შეცდომა:', error));
  
  addAsync(4, 'რიცხვი')
    .then(result => console.log('შედეგი:', result))
    .catch(error => console.error('შეცდომა:', error));
  
  addAsync()
    .then(result => console.log('შედეგი:', result))
    .catch(error => console.error('შეცდომა:', error));
  