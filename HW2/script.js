let n = 0;
	m = 0;
	sum = 0;
	
n = +prompt('Введіть перше ціле число більше за 0:', '');
while ((n !== Math.round(n)) || (isNaN(n))) {
	n = +prompt('От халепа🥲\nВведіть ще раз перше ціле число більше за 0', '');
}

m = +prompt('Введіть друге ціле число більше за 0:', '');
while ((m !== Math.round(m)) || (isNaN(m))) {
	m = +prompt('От халепа🥲\nВведіть ще раз друге ціле число більше за 0', '')
}

const skip = confirm('Пропускаємо парні числа?'); 

for (let i = n; i <= m; i++){
	if (skip) {
		if (i % 2 === 0){
			sum += 0;
		} else {
			sum += i;
		}
	} else {
		sum += i;
	}
}
document.writeln('Від: ', n);
document.writeln('До: ', m);
document.writeln('Сума: ', sum);