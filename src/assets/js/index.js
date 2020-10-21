const nodeValue={
    nodeForm:document.querySelector('.form'),
    nodeText: document.querySelector('.textBox')
}

nodeValue.nodeForm.addEventListener('submit',e=>{
    console.log(nodeValue.nodeText.value);
    nodeValue.nodeText.value="";
})