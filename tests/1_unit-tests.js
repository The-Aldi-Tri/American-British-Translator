const chai = require('chai')
const assert = chai.assert
const mocha = require('mocha')
const { suite, test } = mocha
const Translator = require('../components/translator.js')
const translator = new Translator()

suite('Unit Tests', () => {
  suite('Translate american to british', () => {
    test('Translate - Mangoes are my favorite fruit.', (done) => {
      const text = 'Mangoes are my favorite fruit.'
      const translate = translator.americanToBritish(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'Mangoes are my favourite fruit.')
      done()
    })

    test('Translate - I ate yogurt for breakfast.', (done) => {
      const text = 'I ate yogurt for breakfast.'
      const translate = translator.americanToBritish(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'I ate yoghurt for breakfast.')
      done()
    })

    test("Translate - We had a party at my friend's condo.", (done) => {
      const text = "We had a party at my friend's condo."
      const translate = translator.americanToBritish(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, "We had a party at my friend's flat.")
      done()
    })

    test('Translate - Can you toss this in the trashcan for me?', (done) => {
      const text = 'Can you toss this in the trashcan for me?'
      const translate = translator.americanToBritish(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'Can you toss this in the bin for me?')
      done()
    })

    test('Translate - The parking lot was full.', (done) => {
      const text = 'The parking lot was full.'
      const translate = translator.americanToBritish(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'The car park was full.')
      done()
    })

    test('Translate - Like a high tech Rube Goldberg machine.', (done) => {
      const text = 'Like a high tech Rube Goldberg machine.'
      const translate = translator.americanToBritish(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'Like a high tech Heath Robinson device.')
      done()
    })

    test('Translate - To play hooky means to skip class or work.', (done) => {
      const text = 'To play hooky means to skip class or work.'
      const translate = translator.americanToBritish(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'To bunk off means to skip class or work.')
      done()
    })

    test('Translate - No Mr. Bond, I expect you to die.', (done) => {
      const text = 'No Mr. Bond, I expect you to die.'
      const translate = translator.americanToBritish(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'No Mr Bond, I expect you to die.')
      done()
    })

    test('Translate - Dr. Grosh will see you now.', (done) => {
      const text = 'Dr. Grosh will see you now.'
      const translate = translator.americanToBritish(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'Dr Grosh will see you now.')
      done()
    })

    test('Translate - Lunch is at 12:15 today.', (done) => {
      const text = 'Lunch is at 12:15 today.'
      const translate = translator.americanToBritish(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'Lunch is at 12.15 today.')
      done()
    })
  })

  suite('Translate british to american', () => {
    test('Translate - We watched the footie match for a while.', (done) => {
      const text = 'We watched the footie match for a while.'
      const translate = translator.britishToAmerican(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'We watched the soccer match for a while.')
      done()
    })

    test('Translate - Paracetamol takes up to an hour to work.', (done) => {
      const text = 'Paracetamol takes up to an hour to work.'
      const translate = translator.britishToAmerican(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'Tylenol takes up to an hour to work.')
      done()
    })

    test('Translate - First, caramelise the onions.', (done) => {
      const text = 'First, caramelise the onions.'
      const translate = translator.britishToAmerican(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'First, caramelize the onions.')
      done()
    })

    test('Translate - I spent the bank holiday at the funfair.', (done) => {
      const text = 'I spent the bank holiday at the funfair.'
      const translate = translator.britishToAmerican(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'I spent the public holiday at the carnival.')
      done()
    })

    test('Translate - I had a bicky then went to the chippy.', (done) => {
      const text = 'I had a bicky then went to the chippy.'
      const translate = translator.britishToAmerican(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'I had a cookie then went to the fish-and-chip shop.')
      done()
    })

    test("Translate - I've just got bits and bobs in my bum bag.", (done) => {
      const text = "I've just got bits and bobs in my bum bag."
      const translate = translator.britishToAmerican(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, "I've just got odds and ends in my fanny pack.")
      done()
    })

    test('Translate - The car boot sale at Boxted Airfield was called off.', (done) => {
      const text = 'The car boot sale at Boxted Airfield was called off.'
      const translate = translator.britishToAmerican(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'The swap meet at Boxted Airfield was called off.')
      done()
    })

    test('Translate - Have you met Mrs Kalyani?', (done) => {
      const text = 'Have you met Mrs Kalyani?'
      const translate = translator.britishToAmerican(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'Have you met Mrs. Kalyani?')
      done()
    })

    test("Translate - Prof Joyner of King's College, London.", (done) => {
      const text = "Prof Joyner of King's College, London."
      const translate = translator.britishToAmerican(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, "Prof. Joyner of King's College, London.")
      done()
    })

    test('Translate - Tea time is usually around 4 or 4.30.', (done) => {
      const text = 'Tea time is usually around 4 or 4.30.'
      const translate = translator.britishToAmerican(text)
      const noHighlightTranslate = translate.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '')
      assert.equal(noHighlightTranslate, 'Tea time is usually around 4 or 4:30.')
      done()
    })
  })

  suite('Highlight translate', () => {
    test('Translate - Mangoes are my favorite fruit.', (done) => {
      const text = 'Mangoes are my favorite fruit.'
      const translate = translator.americanToBritish(text)
      assert.equal(translate, 'Mangoes are my <span class="highlight">favourite</span> fruit.')
      done()
    })

    test('Translate - I ate yogurt for breakfast.', (done) => {
      const text = 'I ate yogurt for breakfast.'
      const translate = translator.americanToBritish(text)
      assert.equal(translate, 'I ate <span class="highlight">yoghurt</span> for breakfast.')
      done()
    })

    test('Translate - We watched the footie match for a while.', (done) => {
      const text = 'We watched the footie match for a while.'
      const translate = translator.britishToAmerican(text)
      assert.equal(translate, 'We watched the <span class="highlight">soccer</span> match for a while.')
      done()
    })

    test('Translate - Paracetamol takes up to an hour to work.', (done) => {
      const text = 'Paracetamol takes up to an hour to work.'
      const translate = translator.britishToAmerican(text)
      assert.equal(translate, '<span class="highlight">Tylenol</span> takes up to an hour to work.')
      done()
    })
  })
})
