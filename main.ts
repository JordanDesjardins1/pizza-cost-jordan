game.splash("Welcome")
let HST = 0.13
let RENT = 1
let MATERIAL_COST = 0.5
let LABOUR = 0.75
let diameter = game.askForNumber("Enter diameter in inches")
let subtotal = RENT + LABOUR + MATERIAL_COST * diameter
let tax = subtotal * HST
let total = subtotal + tax
game.splash("Total is $" + Math.round(total * 100) / 100)
