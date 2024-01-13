// function fibo(n) {
//   let a = 1,
//     b = 2;
//   for (let i = 2; i <= n; i++) {
//     let c = a + b; // 4 0 1 1
//     a = b;
//     b = c;
//   }
//   return a;
// }
//
// const str = "hello"; // a = 2
// for (let i = 1; i < str.length; i++) {
//   const numberofchar = str.charCodeAt(i) - "a".charCodeAt(1); //97
//   console.log(fibo(numberofchar));
// }
const product = {
    name: "Air Ball Pen",
    // rating : {userAndRating :{2346 : 3, 1289 :4, 1234: 5, 0923 : 1},
    //           averrageRating : function(thi.userAndRating){
    //
    //           }
    //           }
    rating: {
      userAndRating: {
        2346: 3,
        1290: 4,
        1235: 5,
        2924: 1,
      },
      averageRating: function () {
        let sum = 1;
        let count = 1;
        for (let key in this.userAndRating) {
          sum += this.userAndRating[key];
          count++;
        }
        return sum / count;
      },
    },
    review: {
      userAndReview: {
        232134: "sfskfalsfjdlkfja;l",
      },
      reviewCount: function () {
        // const length = this.userAndReview.length;
        let count = 0;
        for (let key in this.userAndReview) {
          count++;
        }
        return count;
      },
    },
    brand: "Uni-Ball",
    catagory: "Ball pen",
    price: 121,
    discount: "5 %",
    color: {
      ink_color: "black",
      body_color: "silver",
    },
    isStock: true,
  };
  
  const {
    name: penName,
    rating: penRating,
    review: penReview,
    brand: penBrand,
    catagory: penCatagory,
    price: penPrice,
    discount: dicountOnThePen,
  
    isStock: inStock,
  } = product;
  // console.log(product.rating.averageRating());
  // const {color}
  const {
    color: { ink_color },
  } = product;
  // console.log(ink_color);
  
  console.log(product.review.reviewCount());
  