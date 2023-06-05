(() => {
    const values = {
        totalTask: 0,
        taskDone: 0,
        taskPending: 0
    };

    let store = {};
    document.querySelector('.addBtn').addEventListener('click', init);
    document.querySelector('.getHistoryTask').addEventListener('click', getLocalScorage);


    function init() {
        const textValue = document.querySelector('.addTask').value;
        // console.log('Object.values(localStorage).size' + !textValue);
        if (!textValue) {
            alert('enter the task!')
        } else {
            values.totalTask += 1;
            const randomNo = Date.now();
            store[randomNo] = { id: randomNo, task: textValue, status: false };
            setLocalStorage('localObj', JSON.stringify(store));
            addTextToList(textValue, randomNo);
        }
    }

    function statusUpdate(elem) {
        const taskId = elem.target.parentNode;
        console.log(elem)
        const currentElementId = elem.target.id
        const localStorageDate = JSON.parse(localStorage.getItem('localObj'));
        console.log(localStorageDate[key])
        for (const key in localStorageDate) {
            // console.log(currentElementId)
            if (localStorageDate.hasOwnProperty.call(localStorageDate, key)) {
                const storedId = localStorageDate[key].id;
                // console.log(storedId)
                if (storedId === Number(currentElementId)) {
                    localStorageDate[key].status = true;
                    break;
                }
            }
        }
    }
    // alert('you clicked the check box');

    function addTextToList(task, uniqueNo) {
        // console.log(uniqueNo)
        const ulElement = createElementFunction('ul', { 'class': 'allTask' });
        const liElement = createElementFunction('li', { 'class': 'task', 'id': values.totalTask });
        const data = document.createTextNode(task);
        const checkboxElement = createElementFunction('input', { 'type': 'checkbox', 'id': uniqueNo, 'class': 'taskStatus' });
        checkboxElement.addEventListener('click', (e) => { statusUpdate(e) });
        const delBtn = createElementFunction('input', { 'class': 'taskDeletBtn', 'type': 'button', 'value': 'delete', 'id': values.totalTask + 1 });
        appendElements(liElement, data, checkboxElement, delBtn);
        const domElement = getElement('class', 'taskList');
        appendElements(ulElement, liElement);
        appendElements(domElement, ulElement);
        let temp = document.querySelectorAll('.taskStatus');
        // console.log(temp) rendring
    }

    function getElement(prop, value) {
        const val = (prop === 'id') ? document.querySelector(`#${value}`) :
            (prop === 'class') ? document.querySelector(`.${value}`) : alert('enter class name or id name!!');
        return val;
    }
    function createElementFunction(value, addAtt) {
        const element = document.createElement(value);
        return addAttributes(element, addAtt);//here have to check addAtt identifier is object 
    }

    function addAttributes(mainElement, setAtt) {
        const key = Object.keys(setAtt);
        const value = Object.values(setAtt);
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

    function setLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }

    function getLocalScorage() {
        const localStorageDate = JSON.parse(localStorage.getItem('localObj'));
        for (const key in localStorageDate) {
            if (localStorageDate.hasOwnProperty.call(localStorageDate, key)) {
                const storedText = localStorageDate[key].task;
                addTextToList(storedText);
            }
        }
    }



})();

//task-1
//add tasks to list
//task-2
//count the checked tasks
//task-3
//push data to local storage
