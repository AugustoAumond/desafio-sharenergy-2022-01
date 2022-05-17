export function OpenClose (value){
    if (value !== ''){
        document.querySelector('.divselect').style.display = 'none';
        document.querySelector('#published').style.display = 'none';
        document.querySelector('#select').value = '';
        document.querySelector('#begin').value = '';
        document.querySelector('#final').value = '';
        document.querySelector('#value').style.display = 'flex';
    } else {
        document.querySelector('.divselect').style.display = 'flex';
        document.querySelector('#published').style.display = 'flex';
    }
}

export function Dates(list){
    let newList = list;
    for (let i = 0; i < list.length; i++) {
        newList[i].publishedAt = list[i].publishedAt.slice(0, 10);
    }
    return newList;
}
