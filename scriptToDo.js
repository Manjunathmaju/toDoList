function getText() {
    let textValue = document.getElementById('newText').value;
    console.log(textValue);
    if (textValue != '') {
        addTextToList(textValue)
    }
}

function addTextToList(text) {
    let container = document.getElementById('listOfText')
    let checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox')
    checkBox.setAttribute('id', 'ischeckbox')
    let removeList = document.createElement('input')
    removeList.setAttribute('id', 'del')
    removeList.setAttribute('type', 'button')
    removeList.setAttribute('value', 'X')

    // funOfAddAttributes('removeList', { 'value': 'x', 'type': 'button' });

    let textList = document.createElement('li')
    let data = document.createTextNode(text)
    // unOrderList.setAttribute('id', 'name')

    textList.appendChild(checkBox)
    textList.appendChild(data);
    textList.appendChild(removeList)

    // funOfAppendElement('textList', ['removeList', 'data', 'checkbox'])

    container.appendChild(textList)
}

// function funOfAddAttributes(mainElement, setAtt) {
//     let key = Object.keys(setAtt)
//     let value = Object.values(setAtt)
//     console.log(key.length + ' ' + value.length)
//     for (let i = key.length; i > 0; i--) {
//         mainElement = document.setAttribute(`${key[i]}, ${value[i]}`);
//     }
//     return;
// }


// function funOfAppendElement(parentNode, appChild) {
//     for (let i = appChild.length; i > 0; i--) {
//         parentNode.appendChild(appChild[i])
//     }
//     return;
// }

//face-2 add the count field, like count the number of tasks completed and uncompleted and total number of tasks in todolist