/**
 * Function which takes an array containing the names of people that like an item.
 * It must return the display text as shown in the examples:
 * [] -->  "no one likes this"
 * ["Peter"] -->  "Peter likes this"
 * ["Jacob", "Alex"] -->  "Jacob and Alex like this"
 * ["Max", "John", "Mark"] -->  "Max, John and Mark like this"
 * ["Alex", "Jacob", "Mark", "Max"] -->  "Alex, Jacob and 2 others like this"
 */
function likes(names) {
  const numOfNames = names.length;

  switch (numOfNames) {
    case 0:
      return 'no one likes this';
    case 1:
      return names[0] + ' likes this';
    case 2:
      return names[0] + ' and ' + names[1] + ' like this';
    case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    default:
      return (
        names[0] +
        ', ' +
        names[1] +
        ' and ' +
        String(numOfNames - 2) +
        ' others like this'
      );
  }
}
