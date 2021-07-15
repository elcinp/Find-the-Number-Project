const randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber);


const check = document.getElementById("check")
const highlow = document.querySelector("#highlow")
const attemptNumber = document.getElementById("count")
let a = 0;

    check.onclick = () => {
        const enteredNumber = parseInt(document.getElementById("number").value)
        console.log(enteredNumber);
    
    if (enteredNumber == randomNumber) {
        a+=1;
        return (highlow.textContent = "You won.Congrutulations!!") && (attemptNumber.textContent = `${a}`);

    } else if (enteredNumber>randomNumber) {
        highlow.textContent = "Your guess is too high";
        a +=1;
        return (attemptNumber.textContent = `${a}`);

    } else if (enteredNumber<randomNumber) {
        highlow.textContent = "Your guess is too low"
        a+=1;
        return (attemptNumber.textContent = `${a}`);
    }

}
