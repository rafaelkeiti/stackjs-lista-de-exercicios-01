const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === "credit") {
        user.balance += transaction.value
    } else if (transaction.type === "debit") {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(type) {
    let larger = 0
    let biggestTransaction
    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type === type && user.transactions[i].value > larger) {
            larger = user.transactions[i].value
            biggestTransaction = user.transactions[i]
        }
    }
    console.log(biggestTransaction)
}

function getAverageTransactionValue() {
    let sum = 0;
    for (let i = 0; i < user.transactions.length; i++) {
        sum += user.transactions[i].value
    }
    let average = sum / user.transactions.length
    console.log(average)
}

function getTransactionsCount() {
    const count = {
        credit: 0,
        debit: 0
    }
    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type === "credit") {
            count.credit++
        } else {
            count.debit++
        }
    }
    console.log(count)
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }