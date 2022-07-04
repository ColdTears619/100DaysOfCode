const Url = require('url')

const testurl = new URL(
    'https://www.exmaple.com:3021/test.html?id=100&name=test&description=testurl&status=active'
    );

console.log(testurl.hostname)

console.log(testurl.host)

console.log(testurl.pathname)

console.log(testurl.searchParams)

testurl.searchParams.append('newparam',123)

console.log(testurl.href)

console.log(testurl.searchParams)

testurl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`))