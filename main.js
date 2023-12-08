let nameUser = document.getElementById("name");
let amount = document.getElementById("amount");
let btnTransfer = document.getElementById("btn-transfer");

let datahestory = [];

btnTransfer.onclick = function () {
  if (nameUser.value != "" && amount.value != "") {
    let date = new Date();
    let f = new Intl.DateTimeFormat("en-us", {
      dateStyle: "medium",
    });
    let resentInvoice = {
      id: new Date().getMilliseconds(),
      dateCreated: f.format(date),
      clint: nameUser.value,
      amount: amount.value,
      status: "PAID",
    };
    datahestory.push(resentInvoice);
    showData();
    append();
    DeleteInputs();
  }
};

function showData() {
  let table = "";
  for (let i = 0; i < datahestory.length; i++) {
    table += `
    <tr>
     <td>PQ-${datahestory[i].id}CS</td>
     <td>${datahestory[i].dateCreated}</td>
     <td>${datahestory[i].clint}</td>
     <td>$${datahestory[i].amount}</td>
     <td><span class="status"> ${datahestory[i].status}</span></td>
     </tr>
     `;
  }
  document.getElementById("tbody").innerHTML = table;
}

function DeleteInputs() {
  nameUser.value = "";
  amount.value = "";
}

showData();

let acti = document.querySelector(".acti");

function append() {
  let card = "";
  for (let i = 0; i < datahestory.length; i++) {
    card += `
  <div class="card">
                <img src="Pic.jpg" alt="" />
                <div class="text">
                  <p class="new">
                    <span> <i class="fa-solid fa-flag"></i> </span> New Invoice
                  </p>
                  <p>
                    <span class="user">${datahestory[i].clint}</span> created invoice
                    PQ-${datahestory[i].id}CS
                  </p>
                  <span class="date">Just Now</span>
                </div>
              </div>
  `;
  }
  acti.innerHTML = card;
}
