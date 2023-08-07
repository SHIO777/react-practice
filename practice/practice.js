const pizza = true;
log("pizza: " + pizza);

// テンプレート文字列
const firstname = "taro";
const lastname = "yamada";
const email = `
Your itenary is attached to this email.
`
// log(`${firstname}, ${lastname}`);
// log(email);
const emailMsg = document.getElementById("email");

emailMsg.innerHTML = `
--- テンプレート文字列
<h3>Hello ${lastname},</h3>
<p>${email}</p>

Thanks,
${firstname}
`

// ------------------
log("--- default引数");
function logActivity(name = "default", activity = "running") { 
    console.log(`${name} loves ${activity}`);
}
logActivity();

const defaultPerson = {
    name: {
        first: "Shane",
        last: "McConkey"
    },
    favActivity: "skiing"
};
logActivity2();

function logActivity2(person=defaultPerson){
    console.log(`${person.name.first} loves ${person.favActivity}`);
}


// ----------
log("--- Arrow function");
// const lordifyWithoutArrow = function (firstname) {
//     return `${firstname} of Fukuoka`
// }
const lordify = (firstname="default", land="Fukuoka") => `${firstname} of ${land}`
log(lordify());
log(lordify("shio", "Hakata"));


// ---------
log("--- オブジェクトの返却");
const person = (firstname, lastname) => ({
    first: firstname,
    last: lastname
})
console.log(person("a", "b"));


// ---------
log("--- アロー関数とスコープ")
// scopeの関係でエラー
const tahoe1 = {
    mountains: ["Freel", "Rose"],
    print: function (delay = 500) {
        setTimeout(function () {
            log("tahoe1");
            console.log(this);
            console.log(this.mountains.join(", "));
        }, delay);
    }
}
console.log(tahoe1.print());

const tahoe2 = {
    mountains: ["Freel", "Rose"],
    print: function (delay = 500) {
        setTimeout(() => {
            log("tahoe2");
            console.log(this);
            console.log(this.mountains.join(", "));
        }, delay);
    }
}
console.log(tahoe2.print());

// ----------
function log(msg) {
    console.log(msg);
}
