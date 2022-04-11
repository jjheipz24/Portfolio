---
title: 'Grammasaurus-Rex'
date: '2021-02-22'
blurb: 'A digital tool to help students practice grammar skills.'
img: '/images/g-rex-main.png'
link: 'https://brickhack-grex.herokuapp.com/'
technology: 'HTML, CSS, Vue.js, jQuery, typist.js, Grammarbot API, Adobe Illustrator'
media: [['/images/g_rex/g-rex.png', 'G-Rex home screen'], ['/images/g_rex/g-rex-game.png', 'Play screen that shows a sentence that needs to be made into past tense'], ['/images/g_rex/g-rex-game-error.png', 'Play screen that provides information when a user gets the answer wrong']]
---

Grammasaurus-Rex (G-Rex for short) was a small project completed by myself and two others in 24 hours for RIT's annual BrickHack hackathon. We wanted to create an application intended for young students to quickly learn and practice their grammar skills. We drew inspiration from the grammar worksheets/books we had to do when we were in elementary school, so many of the grammar questions and problems to solve come directly from existing examples used in English classes.

When the user begins the application, it randomly generates grammar-related questions to solve. Some examples include fixing sentences to be more grammatically correct, adding in the correct word, and fill in the blank. If the user gets the question wrong, the application will show where the errors are and will display messages explaining why they are wrong. Important note: the Grammarbot API that we used is sometimes incorrect, so the application may mark something as wrong when it is right (or vice versa). Future considerations would be to invest in a better API or build our own.