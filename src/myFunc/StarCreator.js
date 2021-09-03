export const starCreator =(vote_average, stars)=> {
    for (let i = 0; i < Math.round(vote_average); i++) {
        stars.push('★')
    }
}
