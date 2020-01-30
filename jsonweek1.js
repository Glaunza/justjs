let client = {
    name: 'quay launza',
    address: {
        address: ' 2704 rolling hills ln',
        city: 'Arlington',
        state: 'tx'
    },
    netWorth: 15.00,
    riskTolerance: 'medium',
    nextVist: "july 1, 2020",
    children: ['tyty', 'nana', 'cocoa', 'jared']
}
console.table(client.children)
let searchChild = 'jared';
console.quaylaunza = 'hey look what i did '

console.log('${client.name} lives in ${client.address.city} and is worth ${client.netWorth}')

client.netWorth += 10;
console.log(client.netWorth)
client.children.push('')
client.children.push('')
let firstChild = client.children.shift();
// console.log()client.children[1].length( ));