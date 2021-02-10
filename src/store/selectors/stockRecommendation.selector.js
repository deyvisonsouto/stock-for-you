export const stockRecommendationsSelector = (state) => {
    return state.stockRecommendations && state.stockRecommendations.recommendations;
}