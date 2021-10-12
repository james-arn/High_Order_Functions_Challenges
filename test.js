let friendOrFoe = (threatLevel) => {
    console.log(`you are a ${threatLevel}`)
}
let decision = (threat, fn) => {
    if(threat >= 5) {
        fn("foe")
    } else if (threat < 5) {
        fn("friend")
    }
}

decision(6, friendOrFoe)