// Return the Most Expensive Piece of Jewellery
// You go to a jewelry shop and try to find the most expen
// sive piece of jewelry. You write down the name of each piece of jewelry and its price.
// Create a function that gets the name of the piece of jewelry with the highest pr
// ice and returns "The most expensive one is the {name of jewelry piece}".
// Examples
// mostExpensive ({
// "Diamond Earrings": 980,
// "Gold Watch": 250,
// "Pearl Necklace": 4650
// }) ➞ "The most expensive one is the Pearl Necklace"
// mostExpensive({
// "Silver Bracelet": 280,
// "Gemstone Earrings": 180,
// "Diamond Ring": 3500
// }) ➞ "The most expensive one is the Diamond Ring"
// Notes
// ● There will always be at least one item in the object.
// ● There will always be only one highest priced item (i.e. there will not be two
// items with the joint highest value).


let items = [
    {
      itemName: "Diamond Earrings",
      price: 980
    },
    {
      itemName: "Gold Watch",
      price: 250
    },
   {
      itemName:"Pearl Necklace",
      price: 4650
    } 
  ]
  
  let maxItem = items.reduce((max, min) => max.price > min.price ? max : min);
  
  console.log("The most expensive one is the " + maxItem.itemName)