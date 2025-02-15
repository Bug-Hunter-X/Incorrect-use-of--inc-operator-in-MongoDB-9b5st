```javascript
//Correct use of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{a:1}});
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{b:1}});
//Alternative using $set
db.collection.updateOne({"_id":ObjectId("someId")},{$set:{a:a+1,b:b+1}});
```