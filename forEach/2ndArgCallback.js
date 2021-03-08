

// The second argument to forEach's callback is the item's index.


const names = ['Gabriel', 'Hana'];
const userIDs = [10, 11];
let result = '';
names.forEach((name, index) => {
  result += name + userIDs[index];
});
result;

Result: 

'Gabriel10Hana11' 