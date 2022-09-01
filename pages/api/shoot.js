// Compare hands and return victor

export default function handler(req, res) {
  const winner = ""+isWinner("rock", "paper")
  if (winner === "tie") {
    res.status(200).json({ result: 'Tie' })
  } else {
    res.status(200).json({ result: ""+winner })
  }
}

function isWinner(firstHand, secondHand) {
  if (firstHand === secondHand) {
    return "tie"
  }

  if (firstHand === "scissors" && secondHand === "paper"){
    return ""+firstHand
  }

  if (firstHand === "paper" && secondHand === "rock"){
    return ""+firstHand
  }

  if (firstHand === "rock" && secondHand === "scissors"){
    return ""+firstHand
  }

  return ""+secondHand
}
