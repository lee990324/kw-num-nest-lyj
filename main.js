//console.log(process.argv)

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

let result;
switch (command) {
    case "avg":
        break;
    case "prime":
        break;
    case "factorial":
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);