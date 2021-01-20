var button = document.getElementById('btn');

button.addEventListener('click', showAmount);

document.getElementById('payment').style.visibility ='hidden';

function showAmount(e)
{
    e.preventDefault();
    var amount = document.querySelector('#amount').value;
    var rate = document.querySelector('#rate').value;
    var months = document.querySelector('#months').value;
    if(amount!=='' && rate!=='' && months!=='')
    {
        var interest = (amount * (rate * 0.01)) / months;
        let payment = ((amount / months) + interest).toFixed(2);

        var output = document.getElementById('payment');
        output.style.visibility='visible';
        output.innerText = payment;
    }
    else
    {
        alert("Please fill all the fields");
    }
    
}