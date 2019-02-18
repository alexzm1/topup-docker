db.createUser({
   user: "topup",
   pwd: "test",
   roles: [
    { role: "readWrite", db: "topup-db" }
    ],
   mechanisms: [
    "SCRAM-SHA-1"
    ]
});
