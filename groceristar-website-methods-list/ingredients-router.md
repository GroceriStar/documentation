# Ingredients Router

Create or find at db new ingredient new ingredient and attach it to grocery list by passing ingredient\_id and grocery\_id

Method moves ingredient from one department to another\(can work only with custom ingredients\)

Method that changes the ingredients -&gt; name works only with custom ingredients

Method that will called only if we want to edit not a custom element\(we cannot edit main ingredient from our imported database, because this will take affect to other users\). So we basically grab grocery\_id, department\_id and create a new ingredient\(`custom` \) and attach it to this grocery list and this department. But we also should remove id of previous element - that we changing. Also we can have an order of ingredients, so when we replace ingredient with order 6 - we should apply the same number to a new created ingredient.



Remote method!

Create a new custom ingredinet+ save it to db

passed user\_id, grocery\_id, department\_id and ingredient `name`  



Method that delete array of ingredients



Method that get list of ingredients from department, by passing grocery\_id, department\_id

