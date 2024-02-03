var recipes=[
    {
        name:"french-fries",
        ingredients:["potato","turmeric powder","chilli powder","salt","chat powder"],
        instructions:["Cut the potato in to stripes","Add masala to the potato","Turn on the stove","Add oil as required","Deep fried the potato"]
    },
    {
        name:"pizza",
        ingredients:["maida","tomato sauce","toppings","cheese"],
        instructions:["Prepare pizza base","Apply tomato sauce","Add toppings and cheese","Set the temperature in microwave","Bake the pizza"]
    },
    {
        name:"cake",
        ingredients:["maida","egg","oil","sugar","baking soda"],
        instructions:["Mix all the ingredients","Set the temperature in microwave","Bake the cake"]
    }
]

for(i=0; i<recipes.length; i++){
    console.log("Recipes Name:",recipes[i].name);
}