const emailListInData = [
	'roberta@email.com',
	'paulo@email.com',
	'anaroberta@email.com',
	'fabiano@email.com',
];

const enviarEmail = (email, posicao, array) => {
	console.log(`O email ${email} está cadastrado no nosso banco de dados!`);
	console.log(`Sua posição é: ${posicao}`);
	return `O numero total de pessoas na empresa é de ${array.length}`;
};

emailListInData.forEach((email, posição, array) => {
	enviarEmail(email, posicao, array);
});
