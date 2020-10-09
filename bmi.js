// Mark的身高及体重
let M_height = 1.85;
let M_mass = 75;
// John的身高及体重
let J_height = 1.80;
let J_mass = 65;
// Mark跟John的BMI
 let M_BMI = M_mass / (M_height * M_height);
 let J_BMI = J_mass / (J_height * J_height);
// //  输出Mark跟John的BMI
console.log("Mark的BMI为："+M_BMI);
console.log("John的BMI为："+J_BMI);
// //比较Mark跟Jhon的BMI
BMI = (M_BMI > J_BMI ? "Mark的BMI比John高":"Mark的BMI比John低");
console.log(BMI);



