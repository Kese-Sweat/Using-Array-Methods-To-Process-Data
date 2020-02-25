
var sum = items.reduce(function(a,b){
    return a + b.price


},0)

var avg = sum / items.length

document.querySelector('#answer1').innerHTML = `${avg}`





var filterPrice=items.filter(function(prices){   
return prices.price >= 14.00 



})

var code = items.filter(function(currencyCode){
    return currencyCode.currency_code === "GBP"
    
    
})


var list = items.filter(function(woodList){
    return woodList.materials === "wood"
    

})

var eightMore = items.filter(function (item){
 var materials = item.materials
 var countOfMaterials = materials.length
return countOfMaterials 


})



var sellers = items.filter(function(made){
return made.who_made === "i_did"

})