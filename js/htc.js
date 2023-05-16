// const cards = document.querySelectorAll(".card");
// const closeButtons = document.querySelectorAll("button");

// cards.forEach((card, i) => {
//   card.style.viewTransitionName = `card-${i}`;
//   card.addEventListener("click", () => {
//     if (!document.startViewTransition) {
//       activateCard(card);
//     }
//     document.startViewTransition(() => {
//       activateCard(card);
//     });
//   });
// });

// closeButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.stopPropagation();
//     if (!document.startViewTransition) {
//       cards.forEach((card) => {
//         card.classList.remove("featured");
//       });
//     }
//     document.startViewTransition(() => {
//       cards.forEach((card) => {
//         card.classList.remove("featured");
//       });
//     });
//   });
// });

// function activateCard(card) {
//   cards.forEach((card) => {
//     card.classList.remove("featured");
//   });
//   card.classList.add("featured");
// }
