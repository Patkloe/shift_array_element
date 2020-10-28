function shift(arr, direction, n) {
   var times = n > arr.length ? n % arr.length : n;
   return arr.concat(arr.splice(0, (direction > 0 ? arr.length - times : times)));
}
tab = [1,2,3,4,5];
shift(tab, 1, 1);
/** Another version   **/
var tab = [1,2,3,4,5];
var nbre = prompt("nobre de deplacement :");
for(var i = 0; i < Number(nbre); i++){
  var deb = tab.shift();
      tab[tab.length] = deb;
      tab;
}
