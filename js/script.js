const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Commentaires
let message = document.querySelector("#message");
let envoyer = document.querySelector("#envoyer");
let messageList = document.querySelector("#message-list");

let output = "";
envoyer.addEventListener("click", (e) => {
  e.preventDefault();
  let storage = localStorage.getItem("messages");
  console.log(storage)
  storage += `
  <li>
    <div class="header-comm">
      <img src="./images/user.png" alt="" />
      <span>Anonyme</span>
    </div>
    <p>${message?.value}</p>
  </li>
  `;
  //   messageList.innerHTML = output;
  JSON.stringify(localStorage.setItem("messages", storage));
  messagesStorage();
  message.value = "";
});

function messagesStorage() {
  if (localStorage.getItem("messages") != null) {
    console.log("existe");
    let storage = localStorage.getItem("messages");
    console.log(storage);
    messageList.innerHTML += storage;
  } else {
    console.log("existe pas");

    localStorage.setItem("messages", "");
  }
}
messagesStorage();
