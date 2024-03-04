// function getGrade(s1, s2, s3) {
//   const hasil = (s1 + s2 + s3) / 3;
//   if (hasil >= 90 && hasil <= 100) {
//     return "A";
//   } else if (hasil >= 80 && hasil < 90) {
//     return "B";
//   } else if (hasil >= 70 && hasil < 80) {
//     return "C";
//   } else if (hasil >= 60 && hasil < 70) {
//     return "D";
//   } else {
//     return "F";
//   }
// }

// function getGrade(s1, s2, s3) {
//   const hasil = (s1 + s2 + s3) / 3;
//   if (hasil < 60) return "F";
//   if (hasil < 70) return "D";
//   if (hasil < 80) return "C";
//   if (hasil < 90) return "B";
//   return "A";
// }

function getGrade(...s) {
  const hasil = s.reduce((acc, curr) => acc + curr) / s.length;
  if (hasil < 60) return "F";
  if (hasil < 70) return "D";
  if (hasil < 80) return "C";
  if (hasil < 90) return "B";
  return "A";
}

console.log(getGrade(70, 70, 100));
