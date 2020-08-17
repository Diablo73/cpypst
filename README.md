# cpypst
1. Go to the desired page
2. Copy and paste the following into your address bar:
```js
javascript:var allowPaste=function(a){a.stopImmediatePropagation();return true};document.addEventListener("paste",allowPaste,true);var allowCopy=function(a){a.stopImmediatePropagation();return true};document.addEventListener("copy",allowCopy,true);var allowCut=function(a){a.stopImmediatePropagation();return true};document.addEventListener("cut",allowCut,true);
```
3. Hit the enter key
4. Works just fine
