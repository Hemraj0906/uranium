let data = req.body
console.log(data)
players.map((x) => {
    if (x.name == data.name) {
        return res.send("player already exist")
    }

})
players.push(data)
res.send({ msg: "My NewPlayerList:" , Player : players })



 module.exports = router;