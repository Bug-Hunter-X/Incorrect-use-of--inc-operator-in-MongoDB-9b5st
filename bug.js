```javascript
//Incorrect use of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{a:1,b:1}});
//Correct use of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{a:1},{$inc:{b:1}}});
```