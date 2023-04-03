const os = require("node:os");

console.log(os.platform()); // Platform
console.log(os.arch()); // Archeticture
console.log(os.cpus()); // Object info
console.log(os.freemem()); // Free memory
console.log(os.totalmem()); // Total memory
console.log(os.homedir()); // Main derictory
console.log(os.uptime()); // Time of the system woking
