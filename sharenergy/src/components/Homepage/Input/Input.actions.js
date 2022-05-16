

export function OpenClose (value){
    if (value !== ''){
        document.querySelector('.divselect').style.display = 'none';
        document.querySelector('#select').value = '';
        document.querySelector('#value').style.display = 'flex';
    } else {
        document.querySelector('.divselect').style.display = 'flex';
    }
}