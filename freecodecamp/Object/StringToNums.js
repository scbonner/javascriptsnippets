const HTMLBadges = prompt('How many HTML badges do you have?');
const CSSBadges = prompt('How many CSS badges do you have?');

const totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);

//can be written this way also
//const totalBadges = +HTMLBadges + +CSSBadges;

console.log(totalBadges);;
console.log(typeof parseInt(HTMLBadges), typeof parseInt(CSSBadges))