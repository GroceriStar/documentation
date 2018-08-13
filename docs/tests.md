---
id: tests
title: Tests
sidebar_label: Tests
---

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

`
 Add to readme explanation how to run tests, also create a fast run script at nodejs files
`

After making some Grocery model methods as Remote methods - we'll extend tests.

[issue#294](https://github.com/GroceriStar/groceristar/issues/294)

similar tests here

[https://github.com/atherdon/cutstream-api/blob/master/test/rest-api-test.js](https://github.com/atherdon/cutstream-api/blob/master/test/rest-api-test.js) [https://github.com/atherdon/cutstream-api/blob/master/test/video.js](https://github.com/atherdon/cutstream-api/blob/master/test/video.js)



[https://github.com/sapegin/jest-cheat-sheet/blob/master/Readme.md](https://github.com/sapegin/jest-cheat-sheet/blob/master/Readme.md)  
[https://github.com/facebook/jest](https://github.com/facebook/jest)

https://medium.com/@andrei.pfeiffer/jest-matching-objects-in-array-50fe2f4d6b98

https://github.com/sapegin/jest-cheat-sheet/blob/master/Readme.md

https://github.com/facebook/jest/issues/3954

https://github.com/wallabyjs/public/issues/1492

https://stackoverflow.com/questions/49111647/jest-coverage-issue

https://medium.com/@stipsan/best-kept-jest-secret-testing-only-changed-files-with-coverage-reports-3affc8b4d30f
