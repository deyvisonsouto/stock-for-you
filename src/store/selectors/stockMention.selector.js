export const stockMentionsFacebookSelector = (state) => {
    return state.stockMentions && state.stockMentions.stockMentionsFacebook;
}

export const stockMentionsTwitterSelector = (state) => {
    return state.stockMentions && state.stockMentions.stockMentionsTwitter;
}

export const stockMentionsInstagramSelector = (state) => {
    return state.stockMentions && state.stockMentions.stockMentionsInstagram;
}