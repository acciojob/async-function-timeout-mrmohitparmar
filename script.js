let btn = document.getElementById("btn");

btn.addEventListener("click", trigger);

async function trigger() {
    let txt = document.getElementById("text").value;
    let dly = document.getElementById("delay").value;

    // await promise
    let result = await delayText(txt, dly);

    document.getElementById("output").innerText = result;
}

function delayText(text, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text);
        }, Number(delay));
    });
}
