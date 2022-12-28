const users = [
    { nome: "Carlos", technologies: ["HTML", "CSS"] },
    { nome: "Jasmine", technologies: ["JavaScript", "CSS"] },
    { nome: "Tuane", technologies: ["HTML", "Node.js"] }
]

function checkYourUserUsaCSS(users) {
    if (users.technologies.includes("CSS")) {
        return true
    }
}

for (let i = 0; i < users.length; i++) {
    const userWorksWithCSS = checkYourUserUsaCSS(users[i]);

    if (userWorksWithCSS) {
        console.log(`O usuário ${users[i].nome} trabalha com CSS`);
    }
}