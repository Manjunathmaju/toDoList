let countOfChecked = 0;
let countOfUnchecked = 0;
let totatCount = 0;

function counter() {
    for (let i = totatCount; i >= 0; i--) {
        if (document.getElementById(toString(i)).checked) {
            countOfChecked += 1;
        } else {
            countOfUnchecked += 1;
        }
    }
}

function getText() {
    let textValue = document.getElementById('newText').value;
    if (textValue != '') {
        addTextToList(textValue)
        counterUpdate()
    }
}

function addTextToList(text) {
    let container = document.getElementById('listOfText')
    let checkBox = document.createElement('input')
    funOfAddAttributes(checkBox, { 'value': 'no', 'id': totatCount++, 'type': 'checkbox' });

    let textList = document.createElement('li')
    let data = document.createTextNode(text)
    funOfAppendElements(textList, [data, checkBox])

    container.appendChild(textList)
}


function funOfAddAttributes(mainElement, setAtt) {
    let key = Object.keys(setAtt)
    let value = Object.values(setAtt)
    for (let i = key.length - 1; i >= 0; i--) {
        mainElement.setAttribute(`${key[i]}`, `${value[i]}`);
    }
}


function funOfAppendElements(parentNode, appChild) {
    for (let i = appChild.length - 1; i >= 0; i--) {
        parentNode.appendChild(appChild[i])
    }
}

function counterUpdate() {
    // counter();
    document.getElementById('total').innerText = totatCount;
    document.getElementById('completed').innerText = countOfChecked;
    document.getElementById('pending').innerText = countOfUnchecked;
}

//******face-2************add the count field, like count the number of tasks completed , uncompleted and total number of tasks in todolist
