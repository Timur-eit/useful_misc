const text = '<p>Регулярное выражение (оно же «регэксп», «регулярка» или просто «рег»), состоит из шаблона ...</p>';
const word = '«регэксп»';

/**
 * 
 * @param {string} text 
 * @param {string} word
 * @returns {string | null} result or 'null'
 */
function highlightText(text, word) {
    const regexp = new RegExp(word, 'gi');
    const match = text.match(regexp);
    if (match) {
        const highlighted = `<span>${word}</span>`;
        return text.replace(regexp,  highlighted);
    }
    return null;
}

highlightText(text2, word2) // => <p>Регулярное выражение (оно же <span>«регэксп»</span>, «регулярка» или просто «рег»), состоит из шаблона ...</p>'
