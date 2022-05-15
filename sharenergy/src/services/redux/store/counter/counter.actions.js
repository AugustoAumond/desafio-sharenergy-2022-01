
export function add(counter){
    return {
        type: 'add',
        payload: counter
    }
}

export function edit(counter, newCounter){
    return {
        type: 'edit',
        payload:[counter, newCounter]
    }
}
