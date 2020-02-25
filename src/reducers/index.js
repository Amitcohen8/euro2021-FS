
import { combineReducers } from 'redux'
import _ from 'lodash';
// const initial_state = [{team:"",g:0},
// {team:"",g:0},
// {team:"",g:0},
// {team:"",g:0},
// {team:"",g:0},
// {team:"",g:0},
// {team:"",g:0},
// {team:"",g:0},
// {team:"",g:0},
// {team:"",g:0},
// {team:"",g:0},
// {team:"",g:0},
// ]
// Array(6).fill()
const initial_state = {
    "groups": {
        a: {
            games: {
                Italy: {
                    "Switzerland": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Turkey": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Wales": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                Turkey: {
                    "Switzerland": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Italy": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Wales": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                Switzerland: {
                    "Turkey": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Italy": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Wales": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                Wales: {
                    "Turkey": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Italy": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Switzerland": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                },
            },
            teams: [{ team: 'Italy',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
             { team: 'Turkey',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }, 
             { team: 'Switzerland',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
              { team: 'Wales',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }],
            results: 
            [
                {gh: 0, ga: 0, home: 'Italy', away: 'Turkey'},
                {gh: 0, ga: 0, home: 'Wales', away: 'Switzerland'},
                {gh: 0, ga: 0, home: 'Turkey', away: 'Wales'},
                {gh: 0, ga: 0, home: 'Italy', away: 'Switzerland'},
                {gh: 0, ga: 0, home: 'Italy', away: 'Wales'},
                {gh: 0, ga: 0, home: 'Switzerland', away: 'Turkey'}
            ],
           
        },
        b:{
            games: {
                Belgium: {
                    "Denmark": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Finland": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Russia": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                Denmark: {
                    "Belgium": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Finland": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Russia": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                Finland: {
                    "Belgium": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Russia": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Denmark": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                Russia: {
                    "Belgium": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Denmark": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Finland": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                },
            },
            teams: [{ team: 'Belgium',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
             { team: 'Denmark',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }, 
             { team: 'Finland',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
              { team: 'Russia',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }],
            results: 
            [
                {gh: 0, ga: 0, home: 'Denmark', away: 'Finland'},
                {gh: 0, ga: 0, home: 'Belgium', away: 'Russia'},
                {gh: 0, ga: 0, home: 'Finland', away: 'Russia'},
                {gh: 0, ga: 0, home: 'Denmark', away: 'Belgium'},
                {gh: 0, ga: 0, home: 'Finland', away: 'Belgium'},
                {gh: 0, ga: 0, home: 'Russia', away: 'Denmark'}
            ], 
        },
        c: {
            games: {
                Austria: {
                    "Romania": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Ukraine": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Netherlands": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                Romania: {
                    "Austria": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Ukraine": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Netherlands": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                Ukraine: {
                    "Austria": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Romania": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Netherlands": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                Netherlands: {
                    "Austria": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Romania": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Ukraine": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                },
            },
            teams: [{ team: 'Austria',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
             { team: 'Netherlands',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }, 
             { team: 'Romania',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
              { team: 'Ukraine',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }],
            results: 
            [
                {gh: 0, ga: 0, home: 'Austria', away: 'Romania'},
                {gh: 0, ga: 0, home: 'Netherlands', away: 'Ukraine'},
                {gh: 0, ga: 0, home: 'Ukraine', away: 'Romania'},
                {gh: 0, ga: 0, home: 'Netherlands', away: 'Austria'},
                {gh: 0, ga: 0, home: 'Ukraine', away: 'Austria'},
                {gh: 0, ga: 0, home: 'Romania', away: 'Netherlands'}
            ], 
        },
        d:{
            games: {
                Croatia: {
                    "Czech Republic": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Norway": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "England": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                "Czech Republic": {
                    "Croatia": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Norway": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "England": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                England: {
                    "Croatia": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Czech Republic": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Norway": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                Norway: {
                    "Croatia": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Czech Republic": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "England": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                },
            },
            teams: [{ team: 'Croatia',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
             { team: 'Czech Republic',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }, 
             { team: 'England',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
              { team: 'Norway',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }],
            results: 
            [
                {gh: 0, ga: 0, home: 'England', away: 'Croatia'},
                {gh: 0, ga: 0, home: 'Norway', away: 'Czech Republic'},
                {gh: 0, ga: 0, home: 'Croatia', away: 'Czech Republic'},
                {gh: 0, ga: 0, home: 'England', away: 'Norway'},
                {gh: 0, ga: 0, home: 'Czech Republic', away: 'England'},
                {gh: 0, ga: 0, home: 'Croatia', away: 'Norway'}
            ], 
        },
        e:{
            games: {
                Slovakia: {
                    "Poland": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Sweden": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Spain": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                "Poland": {
                    "Slovakia": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Sweden": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Spain": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                Spain: {
                    "Slovakia": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Poland": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Sweden": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                Sweden: {
                    "Slovakia": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Poland": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Spain": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                },
            },
            teams: [{ team: 'Slovakia',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
             { team: 'Poland',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }, 
             { team: 'Spain',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
              { team: 'Sweden',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }],
            results: 
            [
                {gh: 0, ga: 0, home: 'Poland', away: 'Slovakia'},
                {gh: 0, ga: 0, home: 'Spain', away: 'Sweden'},
                {gh: 0, ga: 0, home: 'Sweden', away: 'Slovakia'},
                {gh: 0, ga: 0, home: 'Spain', away: 'Poland'},
                {gh: 0, ga: 0, home: 'Sweden', away: 'Poland'},
                {gh: 0, ga: 0, home: 'Slovakia', away: 'Spain'}
            ], 
        },
        f:{
            games: {
                France: {
                    "Germany": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Kosovo": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Portugal": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                "Germany": {
                    "France": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Kosovo": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Portugal": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                Kosovo: {
                    "France": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Germany": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Portugal": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }
                },
                Portugal: {
                    "France": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Germany": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                    "Kosovo": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
                },
            },
            teams: [{ team: 'France',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
             { team: 'Germany',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }, 
             { team: 'Kosovo',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
              { team: 'Portugal',p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }],
            results: 
            [
                {gh: 0, ga: 0, home: 'Kosovo', away: 'Portugal'},
                {gh: 0, ga: 0, home: 'France', away: 'Germany'},
                {gh: 0, ga: 0, home: 'Kosovo', away: 'France'},
                {gh: 0, ga: 0, home: 'Portugal', away: 'Germany'},
                {gh: 0, ga: 0, home: 'Germany', away: 'Kosovo'},
                {gh: 0, ga: 0, home: 'Portugal', away: 'France'}
            ], 
        },
        
    }
}
const scoresReducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'CHANGE_SCORE':
            // console.log('1',state.groups.a.results[index].ga)
            const currentResults = _.cloneDeep(state);
          
           
            const { index, team, score, side, opponent,gr } = action
           console.log('gggggg',gr)
            const { games,teams } = currentResults.groups[gr];
          
            if (side === 'h') {
                currentResults.groups[gr].results[index].gh = score; 
            } 
            else {
                currentResults.groups[gr].results[index].ga = score;
               
            }
            let { gh, ga } = currentResults.groups[gr].results[index]

            
            const diff = gh - ga;
           
            let balanceT, ptsT, balanceO, ptsO;
            if (diff > 0) {
                balanceT = 'w';
                balanceO = 'l';
                ptsT = 3;
                ptsO = 0;

            } else if (diff === 0) {
                balanceT = balanceO = 'd'
                ptsT = ptsO = 1
            }
            else {
                balanceT = 'l';
                balanceO = 'w';
                ptsT = 0;
                ptsO = 3;
            }
            if (ga !== null && gh !== null && (side === 'a')) {
                const teamGame = { p: 1, w: balanceT === 'w' ? 1 : 0, d: balanceT === 'd' ? 1 : 0, l: balanceT === 'l' ? 1 : 0, gs: gh, ga: ga, gd: diff, pts: ptsT }
                const opponentGame = { p: 1, w: balanceO === 'w' ? 1 : 0, d: balanceO === 'd' ? 1 : 0, l: balanceO === 'l' ? 1 : 0, gs: ga, ga: gh, gd: -diff, pts: ptsO }
                games[team][opponent] = opponentGame;
                games[opponent][team] = teamGame;
                let teamsa = Object.keys(games[team])
                let totalTeam = {}

                Object.keys(games[team][teamsa[0]]).map((a) => {
                    totalTeam[a] = games[team][teamsa[0]][a] + games[team][teamsa[1]][a] + games[team][teamsa[2]][a]

                })
                totalTeam.team = team

                let teamsh = Object.keys(games[opponent])
                var totalOpponent = {}
                Object.keys(games[opponent][teamsh[0]]).map((a) => {
                    totalOpponent[a] = games[opponent][teamsh[0]][a] + games[opponent][teamsh[1]][a] + games[opponent][teamsh[2]][a]

                })
                totalOpponent.team = opponent;
                const opIndex = teams.findIndex(item=>item.team === opponent)
                const teamIndex = teams.findIndex(item=>item.team === team)
                teams[opIndex] = totalOpponent;
                teams[teamIndex] = totalTeam;
               
               teams.sort((a,b)=>b.pts-a.pts)
            }
           

            return currentResults
        default:
            return state
    }
}





const allReducers = combineReducers({
    scores: scoresReducer,
})

export default allReducers

// const stat = {
//     game: {
//         lol: "haha",
//         blabla: 0
//     },
//     score: 14
// }

// return {
//     ...stat,
//     score: 146
// }

// return {
//     ...stat,
//     game: {
//         ...stat.game,
//         blabla: 5656
//     },
//     score: 146
// }