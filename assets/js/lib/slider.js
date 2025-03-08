console.log("load slider.js");

const slider = document.getElementById("slider");

// 開く
const btnOpenSlider = document.querySelectorAll(".btn-openSlider[data-slider]");
btnOpenSlider.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target;
    const field = target.getAttribute("data-slider");
    const content = slider.querySelector(
      `.sliderContent[data-slider="${field}"]`
    );

    if (content) {
      document.body.classList.add("is-active");
      content.classList.add("is-show");
    }
  });
});

// 閉じる
const btnCloseSlider = slider.querySelectorAll(".btn-closeSlider");
btnCloseSlider.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const parent = e.target.closest(".sliderContent");
    document.body.classList.remove("is-active");
    parent.classList.remove("is-show");
  });
});
