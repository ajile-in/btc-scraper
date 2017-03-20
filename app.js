const scrapeIt = require("scrape-it");

// Promise interface
// scrapeIt("http://ionicabizau.net", {
//     title: ".header h1"
//   , desc: ".header h2"
//   , avatar: {
//         selector: ".header img"
//       , attr: "src"
//     }
// }).then(page => {
//     console.log(page);
// });

// Promise interface
//     title: ".header h1",
//     price: {
//         selector: "span",
//         id: "buy"
//     }
// }).then(page => {
//     console.log(page);
// });



// Promise interface
scrapeIt("http://www.bitcoinrates.in/", {
    title: ".header h1",
    price: {
        selector: "td"
    }
}).then(page => {
    console.log(page);
});


// Promise interface
//     price: {
//         selector: "p",
//         class: "ng-bindings"
//     }
// }).then(page => {
//     console.log(page);
// });

