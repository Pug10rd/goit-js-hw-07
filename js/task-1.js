const cList = document.querySelectorAll(".item");
console.log(`Number of categories: ${cList.length}`);
cList.forEach((item) => {
  console.log(`Category: ${item.children[0].innerHTML}`);
  console.log(`Elements: ${item.children[1].childElementCount}`);
});
