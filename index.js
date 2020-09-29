let found = false,
    num = 0
    x = 0;

function smallM(n) {
    for (let i = 0; i < 20; i++) {
        if (n % i != 0) {
            found = false;
        }
        if (n % i === 0 && i == 20) {
            console.log(true);
            found = true;
        }
    }
}

while (found == false) {
    x++;
    smallM(x);
}