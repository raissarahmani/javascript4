function kalimat (sentence) {
    const char = " ";
    const splitSentence = sentence.split(char)
    const reverseSentence = splitSentence.reverse().join(char)
    console.log(reverseSentence);
}
kalimat("Saya Belajar Javascript dan HTML")