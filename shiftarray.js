function shift(arr, direction, n) {
   var times = n > arr.length ? n % arr.length : n;
   return arr.concat(arr.splice(0, (direction > 0 ? arr.length - times : times)));
}
tab = [1,2,3,4,5];
shift(tab, 1, 1);
