# Basic Knowledge on Back End

## 1. list of advantages of Node.js
### the advantages of using Node.js:
we don't need browser to build our syntaxes,
we can test the javascript code with our application,

## 2. Give an explanation about Synchronous & Asynchronous
javascript outside the function is work asynchronously, 
it mean javascript work in order according to every line in javascript.
(example: if first line hasn't done the synctax operation the second line must wait
until the fisrt line done the task). in otherhand synchronous is a behavior oh the syntax,
that work simulately, so the below line doesn't wait the above to done the task, in 
depend of complexity of the lines( example: if line 1 have to count big number and the second line is just
print simple string, then the second line will be appear first then the firt line.


## 3. What is a module in Node.js?
The module of node.js is any file or directory in the node_modules directory that can be used by the Node.js
to store packages so it can be called by "require()" syntax. 

## 4. Give an explanation about callback
callback is function that is places in function as the parameter/argument,
the used of callback is same as other function but it will execute in order,
most of call back is used in build-in function and promises. now callback mostly use with arrow function

## 5. What are array iterator functions in JavaScript?
Array interator function in javascript is an array to iterate some code as much as the lenght or the array.

##  6. What is the differentiation between SQL & NoSQL (at high level)?
SQL is a programming language used in communicate with data that stored in RDBMS. witch mean is to access database
that store database witch have relation to each other tables or databases. 
noSQL also can store relationship data,but they store it differently than relationship databases do. the noSQL databases
is more flexible than SQL becouse the stored data can be input with defferent type in one document.

## 7. What is MongoDB?
mongoDB is application data platformthat help to create and manage noSQL database with cloud services. so we can use store our
databases in cloud.

## 8. What is index in MongoDB?
mongodb creates a unique index on the "_id" field during the creation of a collection.
index types in mongodb:
#### 1. single Field : the index supports the userdefined ascending/descending indexes,
#### 2. compund index : user-defined indexes on multiple field,
#### 3.Multikey: index: the index for content stored in arrays,
#### 4. HASH index: index that store with hash value of a field,

## 9. What is Document & Collection in MongoDB?
Document is a data that store in collection, document can be input with json type, if we compare to SQL document is a row of data,
and collection is the table.

## 10. What Data Types are supported in MongoDB?
string, integer,double(float), boolean, array,object,objcet id,
date,