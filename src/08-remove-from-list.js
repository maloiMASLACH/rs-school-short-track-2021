/**
 * let s=[]
l=l+''
k=k+''
  l=l.split(',')
  for(let i=0;i<l.length;i++){
    if(l[i]===k){
      l.splice(i,1)
    }
  }
for(let i=0;i<l.length;i++){
  s.push(+l[i])
}

  return s
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(str, k) {
  let l = str;
  const n = k;
  let q = null;
  let t;
  let p;

  while (l.next) {
    if (l.value === n) {
      if (!q) {
        q = l.next;
      }
      t = l.next;
      if (p) {
        p.next = t;
      }
      l.next = null;
      l = t;
    } else {
      p = l;
      l = l.next;
    }
  }
  return q;
}

module.exports = removeKFromList;
