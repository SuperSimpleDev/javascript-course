# Lesson 3 Strings:
String is something that represent as text
`string = text`


## What we learnt

`typeof` to check what type is it.
```js
typeof "hello" --> String
typeof 2 --> int
```

### Concatination:
>> Combining strings together

```js
"hello" + "world" --> "helloworld"
```


### Type coercion:
>> When a <u>int</u> is contatinated with <u>str</u> --> Javascript converts it to str
```javascript
typeof "hello" + 2 
// results --> string
```

>> Note: Strings also follow the Order of Operations.

### 3 Ways to create a string

1. '...' --> single quotes
2. "..." --> double quotes
    ## Escape character
    We use when we want to tell some symbol or character is not actual code
    eg:
    ```js
    'I'm learning JavaScript' ❌ 
    'I\'m learning JavaScript' ✔
    ```
    new line charactor
    ```js
    'Hi this is\n JavaScript'

    //results
    //  "Hi this is
    //  JavaScript"
    ```
3. Template Strings

   \`...\` --> backticks 
    They are called template strings. They have special features

    * Interpolation = insert a value directly into a string[we can use differnt types under one roof]

    Interpolation vs Concatination

    ```js
    // Concatination
    'Items (' + (1 + 1) + '): $'+ ((2095 + 799)/ 100)

    // Interpolation
    `Items (${2+2}): $${(2095 + 799) / 100}`

    ```
    It is comparitively less complex

    * Multi-line string 
        We can have multiple lines written
    ```js
    `some
    text`

    // 'some\ntext'
    ```
