import { round_complete } from "../main"
import { changeRoundComplete } from "../main"



export let cell_selected_val
export let round_complete_map = 0

let givenNumbers = []

export const changeGivenNumbers = (given_array) => {
    givenNumbers = given_array
}


export const createSudokuMap = async(element, size,n_given) => {

    n_given = n_given + size
    let choosen_divs = []
    element.style.gridTemplateColumns = `repeat(${size}, ${50}px)`;


    for(let i=0;i<size;i++){

        for(let j=0;j<size;j++){

            let div_el = document.createElement('div')
            div_el.id = `${i+"-"+j}`
            let val = Math.ceil(Math.random() *size*size)
            
            if(val < n_given){
                div_el.classList.add('cell-null')
                let num = Math.ceil(Math.random() * size)
                if (!givenNumbers.includes(num)){
                    div_el.innerHTML = num
                    element.appendChild(div_el)
                    n_given -= 1
                    givenNumbers.push(num)
                }else{
                    
                    div_el.classList.add('cell')
                    div_el.id = `${i+"-"+j}`
                    div_el.innerHTML = Math.ceil(Math.random() * size)
                    element.appendChild(div_el)

                    div_el.addEventListener('click',(e) => {
                        choosen_divs = []
                       
                        if(!choosen_divs.includes([i,j]) & choosen_divs.length == 0){
                            choosen_divs.push([i,j])
                            if (round_complete){
                                choosen_divs = []
                                changeRoundComplete(true)
                            }
                        }

                        if(round_complete){
                            choosen_divs = []
                            changeRoundComplete(false)
                        }
                        console.log(choosen_divs)
                        if(choosen_divs.some(coords => coords[0] === i && coords[1] === j)){
                            if(choosen_divs.length == 1){
                                div_el.classList.add('cell-selected')
                                cell_selected_val = [i,j]
                                let val = parseInt(div_el.innerHTML)
                                val += 1
                                val = val % (size+1)
                                if (val === 0){
                                    val += 1
                                }
                                div_el.innerHTML = val
                            }
                            
                        }
                        
                })
                }
            }else{
                
                div_el.classList.add('cell')
                div_el.id = `${i+"-"+j}`
                div_el.innerHTML = Math.ceil(Math.random() * size)
                element.appendChild(div_el)

                div_el.addEventListener('click',(e) => {
                    if(!choosen_divs.includes([i,j]) & choosen_divs.length == 0){
                        choosen_divs.push([i,j])
                        if (round_complete){
                            choosen_divs = []
                            changeRoundComplete(true)
                        }
                    }

                    if(round_complete){
                        choosen_divs = []
                        round_complete_map += 1
                        changeRoundComplete(false)
                    }
                    console.log(choosen_divs)
                    if(choosen_divs.some(coords => coords[0] === i && coords[1] === j)){
                        if(choosen_divs.length <= 1){
                            div_el.classList.add('cell-selected')
                            cell_selected_val = [i,j]
                            let val = parseInt(div_el.innerHTML)
                            val += 1
                            val = val % (size+1)
                            if (val === 0){
                                val += 1
                            }
                            div_el.innerHTML = val
                        }
                    }
                })
            }
            

            
        }
    }
}

