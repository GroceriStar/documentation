# Tests

I think you can start from writing some test coverage for this project. Writing tests is a good habit in software development. It also gives you some understanding about project structure and basic API routes.

## Basic topics for tests

```
For a first time just take "a look-a-round" it'll be ok to have 5-10-15-20 tests, related to this functionality:
* IS admin was user created?
* do we have an ultimate list imported?
* Does this list have ingredients?
* Does ingredient A(by name) have a departmentId included 
* if we pass Ultimate GL Id and department ID, how much ingredients will we have?


- [ ] Ingredients
- [ ] list of departments
- [ ] test ACL
- [ ] get ultimate gl
- [ ] test if server working
- [ ] create new GL

- [ ] add user
- [ ] find user
- [ ] test if AT works
```

{% hint style="info" %}
 Add to readme explanation how to run tests, also create a fast run script at nodejs files
{% endhint %}

After making some Grocery model methods as Remote methods - we'll extend tests.

{% embed data="{\"url\":\"https://github.com/GroceriStar/groceristar/issues/294\",\"type\":\"link\",\"title\":\"more tests · Issue \#294 · GroceriStar/groceristar\",\"description\":\"Description/Steps to reproduce addition to \#195 check in tests if we have data at env files. Expected result Additional information\",\"icon\":{\"type\":\"icon\",\"url\":\"https://github.com/fluidicon.png\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://avatars2.githubusercontent.com/u/1469198?s=400&v=4\",\"width\":400,\"height\":400,\"aspectRatio\":1}}" %}

similar tests here

[https://github.com/atherdon/cutstream-api/blob/master/test/rest-api-test.js](https://github.com/atherdon/cutstream-api/blob/master/test/rest-api-test.js) [https://github.com/atherdon/cutstream-api/blob/master/test/video.js](https://github.com/atherdon/cutstream-api/blob/master/test/video.js)



