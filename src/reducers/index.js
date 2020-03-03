
import { combineReducers } from 'redux'
import _ from 'lodash';


const fillTrdPlace = (arr) => {
    var code = '';

    [...arr].forEach(el => {
        code += el.gr

    });
    console.log(code)

    return thirdPlace[code]
}
const knDic = {
    a: {
        0: { num: 38, side: 'home' },
        1: { num: 37, side: 'home' }


    },
    b: {
        0: { num: 40, side: 'home' },
        1: { num: 37, side: 'away' }

    },
    c: {
        0: { num: 39, side: 'home' },
        1: { num: 38, side: 'away' }

    },
    d: {
        0: { num: 43, side: 'home' },
        1: { num: 41, side: 'home' }

    },
    e: {
        0: { num: 44, side: 'home' },
        1: { num: 41, side: 'away' }

    },
    f: {
        0: { num: 42, side: 'home' },
        1: { num: 43, side: 'away' }

    },
    '37': { side: 'away', num: '46' },
    '38': { side: 'away', num: '47' },
    '39': { side: 'home', num: '46' },
    '40': { side: 'home', num: '47' },
    '41': { side: 'home', num: '45' },
    '42': { side: 'away', num: '45' },
    '43': { side: 'home', num: '48' },
    '44': { side: 'away', num: '48' },
    '45': { side: 'away', num: '49' },
    '46': { side: 'home', num: '49' },
    '47': { side: 'away', num: '50' },
    '48': { side: 'home', num: '50' },
    '49': { side: 'home', num: '51' },
    '50': { side: 'away', num: '51' },
}



const thirdPlace = {
    'abcd': [{ num: '39', gr: 'd' }, { num: '40', gr: 'a' }, { num: '44', gr: 'b' }, { num: '42', gr: 'c' }],
    'abce': [{ num: '39', gr: 'e' }, { num: '40', gr: 'a' }, { num: '44', gr: 'b' }, { num: '42', gr: 'c' }],
    'abcf': [{ num: '39', gr: 'f' }, { num: '40', gr: 'a' }, { num: '44', gr: 'b' }, { num: '42', gr: 'c' }],
    'abde': [{ num: '39', gr: 'e' }, { num: '40', gr: 'd' }, { num: '44', gr: 'a' }, { num: '42', gr: 'b' }],
    'abdf': [{ num: '39', gr: 'f' }, { num: '40', gr: 'd' }, { num: '44', gr: 'a' }, { num: '42', gr: 'b' }],
    'abef': [{ num: '39', gr: 'f' }, { num: '40', gr: 'e' }, { num: '44', gr: 'b' }, { num: '42', gr: 'a' }],
    'acde': [{ num: '39', gr: 'd' }, { num: '40', gr: 'e' }, { num: '44', gr: 'c' }, { num: '42', gr: 'a' }],
    'acdf': [{ num: '39', gr: 'd' }, { num: '40', gr: 'f' }, { num: '44', gr: 'c' }, { num: '42', gr: 'a' }],
    'acef': [{ num: '39', gr: 'f' }, { num: '40', gr: 'e' }, { num: '44', gr: 'c' }, { num: '42', gr: 'a' }],
    'adef': [{ num: '39', gr: 'f' }, { num: '40', gr: 'e' }, { num: '44', gr: 'd' }, { num: '42', gr: 'a' }],
    'bcde': [{ num: '39', gr: 'd' }, { num: '40', gr: 'e' }, { num: '44', gr: 'b' }, { num: '42', gr: 'c' }],
    'bcdf': [{ num: '39', gr: 'd' }, { num: '40', gr: 'f' }, { num: '44', gr: 'c' }, { num: '42', gr: 'b' }],
    'bcef': [{ num: '39', gr: 'e' }, { num: '40', gr: 'f' }, { num: '44', gr: 'c' }, { num: '42', gr: 'b' }],
    'bdef': [{ num: '39', gr: 'e' }, { num: '40', gr: 'f' }, { num: '44', gr: 'd' }, { num: '42', gr: 'b' }],
    'cdef': [{ num: '39', gr: 'e' }, { num: '40', gr: 'f' }, { num: '44', gr: 'd' }, { num: '42', gr: 'c' }],
    'wxyz': [{ num: '39', gr: 'w' }, { num: '40', gr: 'x' }, { num: '44', gr: 'y' }, { num: '42', gr: 'z' }]
    //            {'39':'d','40':'a','44':'b','42':'c'},
    //  'abce':{'39':'e','40':'a','44':'b','42':'c'}  
}


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
            teams: [{ team: 'Italy', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'a' },
            { team: 'Turkey', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'a' },
            { team: 'Switzerland', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'a' },
            { team: 'Wales', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'a' }],
            results:
                [
                    { gh: 0, ga: 0, home: 'Italy', away: 'Turkey', num: '1' },
                    { gh: 0, ga: 0, home: 'Wales', away: 'Switzerland', num: '2' },
                    { gh: 0, ga: 0, home: 'Turkey', away: 'Wales', num: '3' },
                    { gh: 0, ga: 0, home: 'Italy', away: 'Switzerland', num: '4' },
                    { gh: 0, ga: 0, home: 'Italy', away: 'Wales', num: '5' },
                    { gh: 0, ga: 0, home: 'Switzerland', away: 'Turkey', num: '6' }
                ],

        },
        b: {
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
            teams: [
                { team: 'Belgium', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'b' },
                { team: 'Denmark', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'b' },
                { team: 'Finland', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'b' },
                { team: 'Russia', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'b' }],
            results:
                [
                    { gh: 0, ga: 0, home: 'Denmark', away: 'Finland', num: '7' },
                    { gh: 0, ga: 0, home: 'Belgium', away: 'Russia', num: '8' },
                    { gh: 0, ga: 0, home: 'Finland', away: 'Russia', num: '9' },
                    { gh: 0, ga: 0, home: 'Denmark', away: 'Belgium', num: '10' },
                    { gh: 0, ga: 0, home: 'Finland', away: 'Belgium', num: '11' },
                    { gh: 0, ga: 0, home: 'Russia', away: 'Denmark', num: '12' }
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
            teams: [{ team: 'Austria', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'c' },
            { team: 'Netherlands', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'c' },
            { team: 'Romania', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'c' },
            { team: 'Ukraine', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'c' }],
            results:
                [
                    { gh: 0, ga: 0, home: 'Austria', away: 'Romania', num: '13' },
                    { gh: 0, ga: 0, home: 'Netherlands', away: 'Ukraine', num: '14' },
                    { gh: 0, ga: 0, home: 'Ukraine', away: 'Romania', num: '15' },
                    { gh: 0, ga: 0, home: 'Netherlands', away: 'Austria', num: '16' },
                    { gh: 0, ga: 0, home: 'Ukraine', away: 'Austria', num: '17' },
                    { gh: 0, ga: 0, home: 'Romania', away: 'Netherlands', num: '18' }
                ],
        },
        d: {
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
            teams: [{ team: 'Croatia', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'd' },
            { team: 'Czech Republic', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'd' },
            { team: 'England', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'd' },
            { team: 'Norway', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'd' }],
            results:
                [
                    { gh: 0, ga: 0, home: 'England', away: 'Croatia', num: '19' },
                    { gh: 0, ga: 0, home: 'Norway', away: 'Czech Republic', num: '20' },
                    { gh: 0, ga: 0, home: 'Croatia', away: 'Czech Republic', num: '21' },
                    { gh: 0, ga: 0, home: 'England', away: 'Norway', num: '22' },
                    { gh: 0, ga: 0, home: 'Czech Republic', away: 'England', num: '23' },
                    { gh: 0, ga: 0, home: 'Croatia', away: 'Norway', num: '24' }
                ],
        },
        e: {
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
            teams: [{ team: 'Slovakia', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'e' },
            { team: 'Poland', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'e' },
            { team: 'Spain', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'e' },
            { team: 'Sweden', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, gr: 'e' }],
            results:
                [
                    { gh: 0, ga: 0, home: 'Poland', away: 'Slovakia', num: '25' },
                    { gh: 0, ga: 0, home: 'Spain', away: 'Sweden', num: '26' },
                    { gh: 0, ga: 0, home: 'Sweden', away: 'Slovakia', num: '27' },
                    { gh: 0, ga: 0, home: 'Spain', away: 'Poland', num: '28' },
                    { gh: 0, ga: 0, home: 'Sweden', away: 'Poland', num: '29' },
                    { gh: 0, ga: 0, home: 'Slovakia', away: 'Spain', num: '30' }
                ],
        },
        f: {
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
                    "Kosovo": { p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0, },
                },
            },
            teams: [{ team: 'France', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
            { team: 'Germany', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
            { team: 'Kosovo', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 },
            { team: 'Portugal', p: 0, w: 0, d: 0, l: 0, gs: 0, ga: 0, gd: 0, pts: 0 }],
            results:
                [
                    { gh: 0, ga: 0, home: 'Kosovo', away: 'Portugal', num: '31' },
                    { gh: 0, ga: 0, home: 'France', away: 'Germany', num: '32' },
                    { gh: 0, ga: 0, home: 'Kosovo', away: 'France', num: '33' },
                    { gh: 0, ga: 0, home: 'Portugal', away: 'Germany', num: '34' },
                    { gh: 0, ga: 0, home: 'Germany', away: 'Kosovo', num: '35' },
                    { gh: 0, ga: 0, home: 'Portugal', away: 'France', num: '36' },

                ],
        },
        r16: {
            results:
                [

                    { gh: 0, ga: 0, home: '2A', away: '2B', num: '37', qual: "", np: 'qf' },
                    { gh: 0, ga: 0, home: '1A', away: '2C', num: '38', qual: "", np: 'qf' },
                    { gh: 0, ga: 0, home: '1C', away: '3D/E/F', num: '39', qual: "", np: 'qf' },
                    { gh: 0, ga: 0, home: '1B', away: '3A/D/E/F', num: '40', qual: "", np: 'qf' },
                    { gh: 0, ga: 0, home: '2D', away: '2E', num: '41', qual: "", np: 'qf' },
                    { gh: 0, ga: 0, home: '1F', away: '3A/B/C', num: '42', qual: "", np: 'qf' },
                    { gh: 0, ga: 0, home: '1D', away: '2F', num: '43', qual: "", np: 'qf' },
                    { gh: 0, ga: 0, home: '1E', away: '3A/B/C/D', num: '44', qual: "", np: 'qf' },
                ]
        },
        qf: {
            results:
                [

                    { gh: 0, ga: 0, home: 'Winner Match 41', away: 'Winner Match 42', num: '45', np: 'sf' },
                    { gh: 0, ga: 0, home: 'Winner Match 39', away: 'Winner Match 37', num: '46', np: 'sf' },
                    { gh: 0, ga: 0, home: 'Winner Match 40', away: 'Winner Match 38', num: '47', np: 'sf' },
                    { gh: 0, ga: 0, home: 'Winner Match 43', away: 'Winner Match 44', num: '48', np: 'sf' },
                ],

        },
        sf: {
            results:
                [

                    { gh: 0, ga: 0, home: 'Winner Match 46', away: 'Winner Match 45', num: '49', np: 'final' },
                    { gh: 0, ga: 0, home: 'Winner Match 48', away: 'Winner Match 47', num: '50', np: 'final' }

                ],

        },
        final: {
            results:
                [

                    { gh: 0, ga: 0, home: 'Winner Match 49', away: 'Winner Match 50', num: '51','winner':'' },


                ]
        }
    }
}
const scoresReducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'CHANGE_SCORE':
            // console.log('1',state.groups.a.results[index].ga)
            const currentResults = _.cloneDeep(state);
            const { index, team, score, side, opponent, gr } = action



            const { games, teams } = currentResults.groups[gr];

            if (side === 'h') {
                currentResults.groups[gr].results[index].gh = score;
            }
            else {
                currentResults.groups[gr].results[index].ga = score;

            }
            let { gh, ga, qual, home, away } = currentResults.groups[gr].results[index]


            const diff = gh - ga;
            if (gr === 'a' || gr === 'b' || gr === 'c' || gr === 'd' || gr === 'e' || gr === 'f') {
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
                    totalTeam.gr = gr

                    let teamsh = Object.keys(games[opponent])
                    var totalOpponent = {}
                    Object.keys(games[opponent][teamsh[0]]).map((a) => {
                        totalOpponent[a] = games[opponent][teamsh[0]][a] + games[opponent][teamsh[1]][a] + games[opponent][teamsh[2]][a]

                    })
                    totalOpponent.team = opponent;
                    totalOpponent.gr = gr;
                    const opIndex = teams.findIndex(item => item.team === opponent)
                    const teamIndex = teams.findIndex(item => item.team === team)
                    teams[opIndex] = totalOpponent;
                    teams[teamIndex] = totalTeam;

                    teams.sort((a, b) => b.pts - a.pts)

                    const grReady = teams.every(item => item.p === 3) //if group is ready should be true

                    if (grReady) {
                        const winners = teams.map(item => item.team).splice(0, 2)
                        const winnerIdx = currentResults.groups.r16.results.findIndex(game => game.num === knDic[gr][0].num.toString())
                        const runnerUpIdx = currentResults.groups.r16.results.findIndex(game => game.num === knDic[gr][1].num.toString())

                        currentResults.groups.r16.results[winnerIdx][knDic[gr][0].side] = winners[0]
                        currentResults.groups.r16.results[runnerUpIdx][knDic[gr][1].side] = winners[1]

                    }
                    
                }
            }
            if ((gr === 'r16' || gr === 'qf' || gr === 'sf') && ga !== null && gh !== null && (side === 'a')) {
                let { qual, np, num } = currentResults.groups[gr].results[index]
                let { results } = currentResults.groups[np]
                if (diff > 0) {
                    qual = opponent
                } else if (diff < 0) {
                    qual = team
                } else {
                    qual = 'Penalty shootout results'
                }
                const nextGame = knDic[num];
                const gameIdx = results.findIndex(game => game.num === nextGame.num)
                results[gameIdx][nextGame.side] = qual
            }
            if(gr === 'final' && ga !== null && gh !== null && (side === 'a')){
                let winner = '';
                if (diff > 0) {
                    qual = opponent
                } else if (diff < 0) {
                    qual = team
                } else {
                    qual = 'Penalty shootout results'
                } 
                currentResults.groups[gr].results[0].winner = winner
            }

            return currentResults
        case 'EVAL_R16':
            const currentResult = _.cloneDeep(state);
            let [teamsA,teamsB,teamsC,teamsD,teamsE,teamsF] = [currentResult.groups.a.teams,currentResult.groups.b.teams,currentResult.groups.c.teams,currentResult.groups.d.teams,currentResult.groups.e.teams,currentResult.groups.f.teams]
            const fullStanding = [...(teamsA.map(e => e.p)), ...(teamsB.map(e => e.p)), ...(teamsB.map(e => e.p)), ...(teamsB.map(e => e.p)), ...(teamsB.map(e => e.p)), ...(teamsB.map(e => e.p))]
            const sumOfGames = fullStanding.reduce((tot, num) => tot + num)
            if(sumOfGames === 72){
            const thirdplaces = [teamsA[2], teamsB[2], teamsC[2], teamsD[2], teamsE[2], teamsF[2]].sort((a, b) => b.pts - a.pts)
            const array3rd = thirdplaces.splice(0, 4)
            // const { arr } = action
            let { results } = currentResult.groups.r16
            array3rd.sort((a, b) => a.gr.localeCompare(b.gr))

            const fillTrd = fillTrdPlace(array3rd)
            fillTrd.forEach(game => {
                const resultIdx = results.findIndex(result => result.num === game.num)
                
                const teamIdx = array3rd.findIndex(team => team.gr === game.gr)
                currentResult.groups.r16.results[resultIdx].away = array3rd[teamIdx].team

                

            })

            console.log('3rd', fillTrd)
        }
            return currentResult
        default:
            return state
    }
}

// const thirdPlcReducer = (state = state, action) => {
//     switch (action.type) {
//     case 'EVAL_R16':
//     const currentResults = _.cloneDeep(state);
// const {arr} = action
// let {results} = currentResults.groups.r16
// arr.sort((a, b) => a.gr.localeCompare(b.gr))

// const fillTrd = fillTrdPlace(arr)
// fillTrd.forEach(game=>{
// const resultIdx = results.findIndex(result=>result.num === game.num)
// console.log('result idx',resultIdx)
// const teamIdx = arr.findIndex(team=>team.gr === game.gr)
// console.log('team idx',teamIdx)
// currentResults.groups.r16.results[resultIdx].away = arr[teamIdx].team

// console.log('team content',arr[teamIdx].team)
// console.log('the state',currentResults.groups.r16.results[resultIdx].away)

// })

// console.log('3rd',fillTrd)
//     return currentResults
//     default:
//         return state
//     }
// }



const allReducers = combineReducers({
    scores: scoresReducer,
    // trd:thirdPlcReducer
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