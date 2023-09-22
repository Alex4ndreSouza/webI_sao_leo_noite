var number_one = document.getElementById("number_one")
var number_two = document.getElementById("number_two")
var btn_sum = document.getElementById("btn_sum")
var btn_sub = document.getElementById("btn_sub")
var btn_mult = document.getElementById("btn_mult")
var btn_div = document.getElementById("btn_div")
var ip_result = document.getElementById("ip_result");


btn_sum.addEventListener("click", () => {
    showResult("+")
})

btn_sub.addEventListener("click", () => {
    showResult("-")
})

btn_mult.addEventListener("click", () => {
    showResult("*")
})

btn_div.addEventListener("click", () => {
    showResult("/")
})

function showResult(operation) {
    var first_number = number_one.value
    var second_number = number_two.value

    var result = eval(first_number + operation + second_number)
    ip_result.value = "O resultado é " + result
}