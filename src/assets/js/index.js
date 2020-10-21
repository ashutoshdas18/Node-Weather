const nodeValue={
    nodeForm:document.querySelector('.form'),
    nodeText: document.querySelector('.textBox'),
    nodeTextContainer:document.querySelector('.textContainer')
}

nodeValue.nodeForm.addEventListener('submit',e=>{
    nodeValue.nodeText.value="";
})