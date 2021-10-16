document.addEventListener("scroll", () => {
  document.querySelector("nav").style.backgroundColor = "grey";
});

const imgshow = document.querySelector(".imgshow");
document.getElementById("img1").addEventListener("click", () => {
  document.querySelector(".imgshow img").classList.add("hide");
  imgshow.innerHTML = `<img src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">`;
  document.getElementById("img1").classList.add("borde");
  document.getElementById("img2").classList.remove("borde");
  document.getElementById("img3").classList.remove("borde");
  document.getElementById("img4").classList.remove("borde");
  document.getElementById("img5").classList.remove("borde");
});
document.getElementById("img2").addEventListener("click", () => {
  document.querySelector(".imgshow img").classList.add("hide");
  imgshow.innerHTML = `<img src="https://images.pexels.com/photos/1255062/pexels-photo-1255062.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">`;
  document.getElementById("img1").classList.remove("borde");
  document.getElementById("img2").classList.add("borde");
  document.getElementById("img3").classList.remove("borde");
  document.getElementById("img4").classList.remove("borde");
  document.getElementById("img5").classList.remove("borde");
});
document.getElementById("img3").addEventListener("click", () => {
  document.querySelector(".imgshow img").classList.add("hide");
  imgshow.innerHTML = `<img src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">`;
  document.getElementById("img1").classList.remove("borde");
  document.getElementById("img2").classList.remove("borde");
  document.getElementById("img3").classList.add("borde");
  document.getElementById("img4").classList.remove("borde");
  document.getElementById("img5").classList.remove("borde");
});
document.getElementById("img4").addEventListener("click", () => {
  document.querySelector(".imgshow img").classList.add("hide");
  imgshow.innerHTML = `<img src="https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">`;
  document.getElementById("img1").classList.remove("borde");
  document.getElementById("img2").classList.remove("borde");
  document.getElementById("img3").classList.remove("borde");
  document.getElementById("img4").classList.add("borde");
  document.getElementById("img5").classList.remove("borde");
});
document.getElementById("img5").addEventListener("click", () => {
  document.querySelector(".imgshow img").classList.add("hide");
  imgshow.innerHTML = `<img src="https://images.pexels.com/photos/9807593/pexels-photo-9807593.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">`;
  document.getElementById("img1").classList.remove("borde");
  document.getElementById("img2").classList.remove("borde");
  document.getElementById("img3").classList.remove("borde");
  document.getElementById("img4").classList.remove("borde");
  document.getElementById("img5").classList.add("borde");
});
