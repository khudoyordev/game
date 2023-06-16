const boxes = document.getElementsByClassName("box");

for (const box of boxes) {
  box.onmouseover = async () => {
    box.style.transition = "1s";
    let color = await new Promise((resolve, reject) => {
      setTimeout(() => {
        box.style.background = "red";
        resolve("green");
        box.innerHTML = "red";
      }, 100);
    });

    color = await new Promise((resolve, reject) => {
      setTimeout(() => {
        box.style.background = color;
        box.innerHTML = "green";
        resolve("yellow");
      }, 1000);
    });

    color = await new Promise((resolve, reject) => {
      setTimeout(() => {
        box.style.background = color;
        resolve("rgb(65, 61, 61)");
        box.innerHTML = "yellow";
      }, 1000);
    });

    color = await new Promise((resolve, reject) => {
      setTimeout(() => {
        box.style.background = color;
        box.innerHTML = "";
      }, 1000);
    });
  };
}
