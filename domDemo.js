const node = document.getElementById("savingsBalance");
console.log(node);

document.addEventListener('DOMContentLoaded', () => {
    const savingsButton = document.getElementById("deposit_savings");
    savingsButton.addEventListener('click', ()=>{
        var savings_node = document.querySelector('#savingsBalance');
        var savings_value = parseInt(savings_node.textContent,10);
        savings_value+=100;
        savings_node.textContent = savings_value;
    })
    const checkingButton = document.getElementById("deposit_checking");
    checkingButton.addEventListener('click', ()=>{
        var checking_node = document.querySelector('#checkingBalance')
        var checking_value = parseInt(checking_node.textContent,10);
        checking_value+=100;
        checking_node.textContent = checking_value;
    })
});