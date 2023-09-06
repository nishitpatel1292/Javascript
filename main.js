let a = 45
function outer(){
    let b = 45
    function inner(){
        let c = 12
        console.log(a,b,c)
    }
    inner()

}
outer()