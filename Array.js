const data = document.getElementById('inputValue');
const addBtn = document.getElementById('addBtn');
const viewBtn = document.getElementById('viewBtn');
const searchBtn = document.getElementById('searchBtn');
const deleteBtn = document.getElementById('deleteBtn');
const tableBody = document.getElementById('tableBody');
let arr=[];

addBtn.onclick=()=>{
    if(data.value.trim()==''){
        data.focus();
        // this.showMessage("no data to display");
    }else{
        arr.push(data.value.trim());
    }
    data.value = "";
    console.log(arr); 
}
viewBtn.onclick=()=>{
    arr.forEach((val, index)=>{
        tableBody.innerHTML +=`
        <tr>
            <td>${index}</td>
            <td>${val}</td>
        </tr>
        `
    })
}
searchBtn.onclick=()=>{
    const search = data.value.trim();
    const rs = arr.indexOf(search);
    if(rs == -1){
        alert('There is no this data');
        tableBody.innerHTML='';
    }else{
        tableBody.innerHTML=`
        <tr>
            <td>${rs}</td>
            <td>${search}</td>
        </tr>
        `;
    }
    data.value = '';
}
deleteBtn.onclick = () => {
    const delVal = data.value.trim();
    const index = arr.indexOf(delVal);

    if (index !== -1) {
        arr.splice(index, 1); 
        alert(`you want to delete "${delVal}" ?`);
        tableBody.innerHTML = ''; 
        arr.forEach((v,i)=>{
            tableBody.innerHTML +=`
            <tr>
                <td>${i}</td>
                <td>${v}</td>
            </tr>
         `;
        })
       
       
    } else {
         alert("Value not found!");
    }
    data.value = '';
}
