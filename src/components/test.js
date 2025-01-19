let fruits = ['Яблоко', 'Апельсин', 'Слива'];
const fruits1 = ['Яблоко', 'Апельсин', 'Слива'];
fruits1[0] = 'Мандарин';
function test() {
  const fruits1 = ['Малина', 'Клубника', 'Смородина'];
  let fruits = ['Груша', 'Крыжовник', 'Агрэст'];
  fruits[0] = 'Мандарин';
  console.log(fruits);
}
test();
console.log(fruits1);
console.log(fruits);
