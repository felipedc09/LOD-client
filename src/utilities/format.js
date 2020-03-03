export function compare(a, b, key) {
    const keyA = a[key].toUpperCase();
    const keyB = b[key].toUpperCase();
  
    let comparison = 0;
    if (keyA < keyB) {
      comparison = 1;
    } else if (keyA > keyB) {
      comparison = -1;
    }
    return comparison;
  }