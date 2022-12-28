const user = {
    name: "Diego",
    company: {
        name: "Rocketseat",
        color: "Roxo",
        focus: "Programaçäo",
        anddress: {
            street: "street Guilherme Gembala",
            number: 260
        }
    }
}

console.log(`A company está localizada em ${user.company.anddress.street}, ${user.company.anddress.number}`)
console.log(`O name do usuário é ${user.name}`)