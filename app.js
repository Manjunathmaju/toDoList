export default function prepareTask(value) {
    // const id = Object.keys(dataToLocal)
    const liElement = createEleme('li', { 'class': 'task', 'id': 'id[-1]' });
    const taskDelBtn = createEleme('input', { 'type': 'button', 'class': 'taskDeleteBtn', 'value': 'delete' });
    const taskcheckbox = createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox' });
    appendElements(liElement, value, taskcheckbox, taskDelBtn);
    return liElement;


    // return appendElements(domElements.getTaskLists, task)

}
function createEleme(value, addAtt) {
    const element = document.createElement(value);//
    return addAttributes(element, addAtt);//here have to check addAtt identifier is object 
}

function addAttributes(mainElement, setAtt) {
    const key = Object.keys(setAtt);//
    const value = Object.values(setAtt);//
    for (let i = key.length - 1; i >= 0; i--) {
        mainElement.setAttribute(`${key[i]}`, `${value[i]}`);
    }
    return mainElement;
}

function appendElements(parentNode, ...appChild) {
    for (let i = appChild.length - 1; i >= 0; i--) {
        parentNode.appendChild(appChild[i]);
    }
}