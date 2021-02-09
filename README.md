# try-sass-or-scss
learning sacc or scss from DevED

Learn Sass In 20 Minutes | Sass Crash Course:
---------------------------------------------
refer: https://www.youtube.com/watch?v=Zz6eOVaaelI&ab_channel=DevEd

- start project [link](https://trello.com/c/s6htS9rp/32-starting-nodejs-project)
- contents: 
-----------
 - extension install (live sass compiler)
   ![extension](https://trello-attachments.s3.amazonaws.com/5cef6e87da0d0b7598cbc7a9/601e41f387ff7c2130a8019b/617eaf0f26814a89fe31e61a7a239c01/image.png)
 - scss style (header, button, contact, ...)
   
```

.contact button {
    background: blue;
}

header {
    background: lightblue;
    color: red;
}

 header button {
 background: $primaryBtn;
}

```

 - nesting (put relevant element together)

```

.contact button {
    background: blue;
}

header {
    background: lightblue;
    color: red;
    button {
        background: $primaryBtn;
        &:hover {
            background: red;
        }
        &::after {
            content: "ELLO.........";
        }
    }
}

// similar to above:
// header button {
//     background: $primaryBtn;
// }

```

 - define variables and use after (easy to make changes when it use many time)

```

$primaryBtn: rgb(99, 65, 26);
$textColor: rgba(121, 14, 73, 0.753);

```
 - separate header, variables to other .scss file (easy to keep track) **NOTE: _header.scss, _variables.scss file naming**
   ![separate](https://trello-attachments.s3.amazonaws.com/5cef6e87da0d0b7598cbc7a9/601e41f387ff7c2130a8019b/ff36302be9f8b1ffda78e2d384a9fcd1/image.png)

 - function @mixin

```

@mixin flexFunction($direction, $background) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: $direction;
    background: $background
}

header {
    @include flexFunction(column, lightblue);
}

```

 - inherit @extend <name>;

```

.contact {
    @extend header;
    @include flexFunction(row, rgb(113, 226, 113));
}

```

- "-+/*" operator

```

.contact {
    @extend header;
    @include flexFunction(row, lightcoral);
    width: 100% - 20%;
}

```
