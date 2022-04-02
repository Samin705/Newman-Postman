const newman = require('newman');
newman.run({
collection: require('./Users_B3.postman_collection.json'), //

iterationCount: 1,
reporters: 'htmlextra',
reporter: {
htmlextra: {
export: './Reports/report.html', // If not specified, the file
}
}
}, function (err) {
if (err) { throw err; }
console.log('collection run complete!');
});