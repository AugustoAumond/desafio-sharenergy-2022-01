
export function HeightDivHome(value){
    let div = document.querySelector('#divhome');
    console.log(value);

    if (value === 10){
        div.style.height = '1600px';
    } 
    
    if (value === 25){
        div.style.height = '3000px';
    }

    if (value === 50){
        div.style.height = '6400px';
    }

    if (value === 100){
        div.style.height = '11200px';
    }
}