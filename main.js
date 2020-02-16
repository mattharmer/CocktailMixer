// Search For Classic Cocktails and Click from cocktail List.

// Cocktail filter function
function searchCocktails() {
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('cocktailSearch');
  filter = input.value.toLowerCase();
  ul = document.getElementById("cocktailList");
  li = ul.getElementsByTagName('li');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// ServiceWorker is a progressive technology. Ignore unsupported browsers
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}

// // Initially hide all cocktail text. DEPRECIATED - Going to new page.
// function hideInfo () {
//   let myClasses = document.querySelectorAll('.cocktail'),
//       i = 0,
//       l = myClasses.length;

//   for (i; i < l; i++) {
//       myClasses[i].style.display = 'none';
//   }
// }
//hideInfo ();

// // Hide and Show text function. DEPRECIATED - Going to new page.
// function hideShow(id) {
//   hideInfo ();
//    let e = document.getElementById(id);
//    if(e.style.display == 'block')
//       e.style.display = 'none';

//    else
//       e.style.display = 'block';
// }
