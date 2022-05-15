
export function ShowList(list, ctr){  
  let newList = [];
    if (list){
      for (let i = 0; i < ctr; i++) {
        if (list[i]){
          newList.push(list[i]);
        } else break;
      }
    return newList;  
    }    
}

export function List (list, listredux){
  let newlist = list;
  if (listredux !== undefined || listredux !== ''){
    newlist = listredux;
  }
  return newlist;
}