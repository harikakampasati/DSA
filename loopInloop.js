//i<3, j<3 normal loop
for(let i =0; i<3; i++){
    for(let j= 0; j<3; j++){
        console.log(i,"-->", j)
    }
}

// i<5, j<i normal loop
for(let i =0; i<5; i++){
    for(let j= 0; j<i; j++){
        console.log(i,"-->", j)
    }
}

// i<5, j<=i normal loop
for(let i =0; i<5; i++){
    for(let j= 0; j<=i; j++){
        console.log(i,"-->", j)
    }
}

//i<5, j>0 j reverse loop, i normal loop
for(let i =0; i<5; i++){
    for(let j= i; j>0; j--){
        console.log(i,"-->", j)
    }
}

//i<5 j>=0 j reverse loop, i normal loop
for(let i =0; i<5; i++){
    for(let j= i; j>=0; j--){
        console.log(i,"-->", j)
    }
}

// i>0 j<i i reverse loop j normal loop
for(let i =5; i>0; i--){
    for(let j= 0; j<i; j++){
        console.log(i,"-->", j)
    }
}

// i>0,j>0 both reverse loop
for(let i =5; i>0; i--){
    for(let j= i; j>0; j--){
        console.log(i,"-->", j)
    }
}