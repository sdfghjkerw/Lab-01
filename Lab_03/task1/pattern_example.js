function emailValidion(email){
    const checks = /^[^\s@]+@[^\s@]+\.[^s@]+$/
    return checks.test(email)
}

console.log(emailValidion("valeriaa@gmail.com"))
console.log(emailValidion("valeriaa"))