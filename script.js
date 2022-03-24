let txtName = document.getElementById('txtName')
let stattusofName = document.getElementById('statusOfName')

txtName.addEventListener('focusout', leaveName)

function leaveName(){
    var nameRegex = /^[a-zA-Z]+$/;
    if(nameRegex.test(txtName.value)){
        stattusofName.textContent = 'Tên hợp lệ'
        stattusofName.style.color = 'green'
    }
    else{
        stattusofName.textContent = 'Tên không hợp lệ'
        stattusofName.style.color = 'red'
    }
}

console.log('txtName: ',txtName)