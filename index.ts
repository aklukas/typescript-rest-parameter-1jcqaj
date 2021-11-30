import { map, of } from 'rxjs';
import { states } from './states';

const x = (...a) => {
  for (let i of a) {
    if (i > 5) return true;
  }
  return false;
};

console.log(x(5, 25, 4));

// ---------------- //
const blah = (...a) => {
  return a;
};
// NOTE: Having no idea how many numbers are going to be in the source or what they are. You just need to know that at least one of them is over 5. Source value is NOT an array

console.log(blah('Alaska', 'Idaho'));

// of('Alaska', 'Idaho')
//   .pipe(map((res) => blah(res)))
//   .subscribe((res) => console.log(res));
