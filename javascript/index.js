function checkForWinner() {
    console.log("checking for winner...")
    let winner

    /**
     * all the possible winning combos for both players
     */
    let eightWinningCombos = [
        "#one.COLOR, #two.COLOR, #three.COLOR",
        "#four.COLOR, #five.COLOR, #six.COLOR",
        "#seven.COLOR, #eight.COLOR, #nine.COLOR",
        "#one.COLOR, #four.COLOR, #seven.COLOR",
        "#two.COLOR, #five.COLOR, #eight.COLOR",
        "#three.COLOR, #six.COLOR, #nine.COLOR",
        "#one.COLOR, #five.COLOR, #nine.COLOR",
        "#seven.COLOR, #five.COLOR, #three.COLOR"
    ]

    /**
     * looks throught the array ane find possible matches  and the replaces the combo with winning color
     */
    let blueWinArray = getWinningArray(eightWinningCombos, "blue");
    let redWinArray = getWinningArray(eightWinningCombos, "red");

    /**
     * checks if the 
     */
    let blueWins = blueWinArray.includes(true);
    let redWins = redWinArray.includes(true);

    /**
     * If blue and red don't win then the grid is full meaning it's a draw
     */
    let fullGrid = getRedCount() + getBlueCount()

    /**
     * Both players (blue and red) have filled all the boxes of the grid
     */
    let draw = (fullGrid === 9) && (!blueWins) && (!redWins);

    if (blueWins) {
        playerOneWins()
        return winner = blueWins
    }
    if (redWins) {
        computerWins()
        return winner = redWins
    }
    if (draw) {
        drawGame()
        return winner = draw
    } else {
        console.log('game on...')
    }
}