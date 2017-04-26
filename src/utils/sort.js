/**
 * merge-sort
 * @see http://tbranyen.com/post/increasing-javascript-array-sorting-performance
 */

export function sort (
  array,
  comparator
) {
  const length = array.length
  if (length < 2) {
    return array
  }
  const pivot = Math.ceil(length / 2)
  return merge(
    sort(array.slice(0, pivot), comparator),
    sort(array.slice(pivot), comparator),
    comparator
  )
}

function merge (
  left,
  right,
  comparator
) {
  const result = []
  while ((left.length > 0) &&
      (right.length > 0)) {
    if (comparator(left[0], right[0])) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left, right)
}
