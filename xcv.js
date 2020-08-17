var allowPaste = function(e){
  e.stopImmediatePropagation();
  return true;
};
document.addEventListener('paste', allowPaste, true);
var allowCopy = function(e){
  e.stopImmediatePropagation();
  return true;
};
document.addEventListener('copy', allowCopy, true);
var allowCut = function(e){
  e.stopImmediatePropagation();
  return true;
};
document.addEventListener('cut', allowCut, true);