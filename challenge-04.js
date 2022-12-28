const programmers = {
    dice: [
        {
            name: "Carlos",
            age: 30,
            especialage: [
                { name: 'C++', especialage: 'Desktop' },
                { name: 'Python', especialage: 'Data Science' },
                { name: 'JavaScript', especialage: 'Web/Mobile' }
            ]
        }
    ]
}

console.log(`O usuário ${programmers.dice[0].name} tem ${programmers.dice[0].age} anos e usa a tecnologia ${programmers.dice[0].especialage[0].name} com especialidade em ${programmers.dice[0].especialage[0].especialage}`)
