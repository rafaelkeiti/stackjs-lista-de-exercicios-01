const users = [
    {
        name: "Salvio",
        revenues: [115.3, 48.7, 98.3, 14.5],
        expenditure: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        revenues: [24.6, 214.3, 45.3],
        expenditure: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        revenues: [9.8, 120.3, 340.2, 45.3],
        expenditure: [450.2, 29.9]
    }
];

function sumNumbers() {
    for (let i = 0; i < users.length; i++) {
        let totalRevenues = 0;
        let totalExpenditure = 0;
        for (let j = 0; j < users[i].revenues.length; j++) {
            totalRevenues += users[i].revenues[j];
        }
        for (let k = 0; k < users[i].expenditure.length; k++) {
            totalExpenditure += users[i].expenditure[k]
        }
        const finalBalance = calculateBalance(totalRevenues, totalExpenditure).toFixed(2);
        if (finalBalance >= 0) {
            console.log(`${users[i].name} possui um saldo de ` + finalBalance)
        } else {
            console.log(`${users[i].name} possui um saldo de ` + finalBalance)
        }
    }
}

function calculateBalance(revenues, expenditure) {
    return revenues - expenditure
}

sumNumbers()