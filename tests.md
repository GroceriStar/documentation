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

{% embed data="{\"url\":\"https://medium.com/@andrei.pfeiffer/jest-matching-objects-in-array-50fe2f4d6b98\",\"type\":\"link\",\"title\":\"Jest matching objects in array\",\"description\":\"If you use Jest and you need to check that an Array contains an Object that matches a given structure, .toContain\(\) won’t help you. So, a…\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cdn-images-1.medium.com/fit/c/304/304/1\*8I-HPL0bfoIzGied-dzOvA.png\",\"width\":152,\"height\":152,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://cdn-images-1.medium.com/max/1090/1\*OMF3fSqH8t4xBJ9-6oZDZw.png\",\"width\":375,\"height\":74,\"aspectRatio\":0.19733333333333333}}" %}

{% embed data="{\"url\":\"https://github.com/sapegin/jest-cheat-sheet/blob/master/Readme.md\",\"type\":\"link\",\"title\":\"sapegin/jest-cheat-sheet\",\"description\":\"jest-cheat-sheet - Jest cheat sheet\",\"icon\":{\"type\":\"icon\",\"url\":\"https://github.com/fluidicon.png\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://avatars2.githubusercontent.com/u/70067?s=400&v=4\",\"width\":400,\"height\":400,\"aspectRatio\":1}}" %}

{% embed data="{\"url\":\"https://github.com/facebook/jest/issues/3954\",\"type\":\"link\",\"title\":\"Array.toContain\(\) with expect.objectContaining · Issue \#3954 · facebook/jest\",\"description\":\"What is the current behavior? It seems that .toContain\(\) can&\#39;t be combined with expect.objectContaining. There might be another solution to test if an array of objects contains a specific objec...\",\"icon\":{\"type\":\"icon\",\"url\":\"https://github.com/fluidicon.png\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://avatars2.githubusercontent.com/u/2970814?s=400&v=4\",\"width\":400,\"height\":400,\"aspectRatio\":1}}" %}

{% embed data="{\"url\":\"https://github.com/wallabyjs/public/issues/1492\",\"type\":\"link\",\"title\":\"Using Jest, \\\"no such file or directory\\\" for .env.example · Issue \#1492 · wallabyjs/public\",\"description\":\"Using Jest, &quot;no such file or directory&quot; for .env.example .env.example file exists at &lt;project-root&gt; jest tests run fine normally with NODE\_ENV=test jest I&\#39;ve tried adding rootDi...\",\"icon\":{\"type\":\"icon\",\"url\":\"https://github.com/fluidicon.png\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://avatars3.githubusercontent.com/u/1000759?s=400&v=4\",\"width\":400,\"height\":400,\"aspectRatio\":1}}" %}

{% embed data="{\"url\":\"https://stackoverflow.com/questions/49111647/jest-coverage-issue\",\"type\":\"link\",\"title\":\"Jest coverage issue\",\"description\":\"I\'ve started to work with Jest a few days ago and I\'m trying to get 100% of coverage, but I have simple issue, which I cant solve.  Here\'s example of Jest Coverage   File          \|% Stmts \|% Branc...\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded\",\"width\":316,\"height\":316,\"aspectRatio\":1}}" %}

{% embed data="{\"url\":\"https://medium.com/@stipsan/best-kept-jest-secret-testing-only-changed-files-with-coverage-reports-3affc8b4d30f\",\"type\":\"link\",\"title\":\"Best kept Jest secret: Testing only changed files with coverage reports\",\"description\":\"UPDATE: this whole post is soon \(https://github.com/facebook/jest/pull/5601\) no longer necessary and the same thing can be done using…\",\"icon\":{\"type\":\"icon\",\"url\":\"https://cdn-images-1.medium.com/fit/c/304/304/1\*8I-HPL0bfoIzGied-dzOvA.png\",\"width\":152,\"height\":152,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://cdn-images-1.medium.com/max/942/1\*mOZlz7BwrFkGIruaRTg5yA.png\",\"width\":471,\"height\":484,\"aspectRatio\":1.0276008492569002}}" %}



