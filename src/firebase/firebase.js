const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

module.exports = {
    db
}