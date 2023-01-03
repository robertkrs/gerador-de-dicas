import { conectaAPI } from "./script.js";

const quote = document.querySelector("[data-advices]");
let i = 0;
advices();

function constroiAdvice(id, descricao) {
  quote.innerHTML = `
    <h3 class="advice-number">Advice #${id}</h3>
        <h1 class="advice-quote">
          “${descricao}”
        </h1>
        <div class="advice-divisor">
          <img src="/images/pattern-divider-desktop.svg" alt="divisor" />
        </div>
        
    `;
  return quote;
}
const dice = document.getElementById("dice");
dice.addEventListener("click", () => {
  i += 1;
  advices();
});

async function advices() {
  const api = await conectaAPI.advices();

  if (i === api.length) {
    i = 0;
    constroiAdvice(api[i].id, api[i].descricao);
  } else {
    constroiAdvice(api[i].id, api[i].descricao);
  }
}
