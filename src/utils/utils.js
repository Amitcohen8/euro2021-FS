export const groupCalc = (fstTeam,secTeam,games,gr,teams,teamGame,opponentGame) => {
 games[fstTeam][secTeam] = opponentGame;
                    games[secTeam][fstTeam] = teamGame;
                    let teamsa = Object.keys(games[fstTeam])
                    let totalTeam = {}

                    Object.keys(games[fstTeam][teamsa[0]]).map((a) => {
                        totalTeam[a] = games[fstTeam][teamsa[0]][a] + games[fstTeam][teamsa[1]][a] + games[fstTeam][teamsa[2]][a]

                    })
                    totalTeam.team = fstTeam
                    totalTeam.gr = gr

                    let teamsh = Object.keys(games[secTeam])
                    var totalOpponent = {}
                    Object.keys(games[secTeam][teamsh[0]]).map((a) => {
                        totalOpponent[a] = games[secTeam][teamsh[0]][a] + games[secTeam][teamsh[1]][a] + games[secTeam][teamsh[2]][a]

                    })
                    totalOpponent.team = secTeam;
                    totalOpponent.gr = gr;
                    const opIndex = teams.findIndex(item => item.team === secTeam)
                    const teamIndex = teams.findIndex(item => item.team === fstTeam)
                    teams[opIndex] = totalOpponent;
                    teams[teamIndex] = totalTeam;    
}

// const groupSort = (teams) => {

//     teams.every(item=>)
//     if()
//     teams.sort((a, b) => b.pts - a.pts)
// }
