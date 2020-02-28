
var sum = items.reduce(function(a,b){
    return a + b.price
},0)
var avg = sum / items.length
    document.querySelector('#answer1').innerHTML = `${avg}`





var filterPrice=items.filter(function(prices){   
if (prices.price > 14.00  && prices.price < 18.00){
return true
 }
})
var html = filterPrice.map(function(prices){
    return prices.title
})
    document.querySelector('#answer2').innerHTML = `${html}`


var code = items.filter(function(currencyCode){
    return currencyCode.currency_code === "GBP"
})
var name = code.map(function(currencyCode){
    return currencyCode.title
})
    document.querySelector('#answer3').innerHTML = `${name} costs £18`




var list = items.filter(function(wood){
    return wood.materials.includes('wood')    
})

var listTwo = list.map(function(item){
    return `<p>${item.title} is made of wood.</p>`

}).join("")

document.querySelector("#answer4").innerHTML= listTwo

var eightMore = items.filter(function (item){
 var materials = item.materials
 var countOfMaterials = materials.length
return countOfMaterials >= 8


})

var itemOne = eightMore.map(function(item){
    return `<p>${item.title}<p>`

}).join("")

var itemTwo = eightMore.map(function(item){
return `<p>${item.materials}<p>`
}).join("")

var itemThree = eightMore.forEach(function(item){
var total= 0;
var materials = item.materials

total + materials
})

document.querySelector('#answer5').innerHTML= itemOne
document.querySelector('#answer5').innerHTML= itemTwo


var sellers = items.filter(function(made){
    return made.who_made === "i_did"
})

var numberOfSellers = sellers.length


document.querySelector('#answer6').innerHTML= `${numberOfSellers} were made by their sellers`
