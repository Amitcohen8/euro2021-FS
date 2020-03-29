export const groupCalc = (fstTeam, secTeam, games, gr, teams, teamGame, opponentGame) => {
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

export const groupSort = (teams, games) => {

    const sortedTeams = teams.sort((a, b) => {
        const ptsSort = b.pts - a.pts;
        const winsHeadToHead = games[b.team][a.team].w - games[a.team][b.team].w;
        const gdHeadToHead = games[b.team][a.team].gd - games[a.team][b.team].gd;
        const gsHeadToHead = games[b.team][a.team].gs - games[a.team][b.team].gs;
        const goalDifference = b.gd - a.gd;
        const goalScored = b.gs - a.gs;
        const wins = b.w - a.w;
        
        if (ptsSort !== 0) {
            return ptsSort
        }
        else if (winsHeadToHead !== 0) {
            return winsHeadToHead
        } else if (gdHeadToHead !== 0) {
            return gdHeadToHead
        } else if (gsHeadToHead !== 0) {
            return gsHeadToHead
        }
        else if (gsHeadToHead !== 0) {
            return goalDifference
        }
        else if (goalScored !== 0) {
            return goalScored
        }
        else if (wins !== 0) {
            return wins
        }

    }

    )
    return sortedTeams

}
export const thirdPlaceSort = (teams) => {
    
    const sortedTeams = teams.sort((a, b) => {
        const ptsSort = b.pts - a.pts;
        const goalDifference = b.gd - a.gd;
        const goalScored = b.gs - a.gs;
        const wins = b.w - a.w;
       
        if (ptsSort !== 0) {
            return ptsSort
        }
        else if (goalDifference !== 0) {
            return goalDifference
        }
        else if (goalScored !== 0) {
            return goalScored
        }
        else if (wins !== 0) {
            return wins
        }
        
})

return sortedTeams.splice(0,4)
}
export const allResultsDictionary = { '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e', '5': 'f', '6': 'r16', '7': 'qf', '8': 'sf', '9': 'final' }

export const r16PlaceHolder =  [
    { home: '2A', away: '2B', num: '37'},
    { home: '1A', away: '2C', num: '38' },
    { home: '1C', away: '3D/E/F', num: '39'},
    { home: '1B', away: '3A/D/E/F', num: '40'},
    { home: '2D', away: '2E', num: '41'},
    { home: '1F', away: '3A/B/C', num: '42'},
    { home: '1D', away: '2F', num: '43' },
    { home: '1E', away: '3A/B/C/D', num: '44' },
]