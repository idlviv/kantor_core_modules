var util = require('util');

var phrases = {
  Hello: 'Привіт',
  world: 'світ'
};

function PhraseError(message) {
  this.message = message;
  Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError(status, message) {
  this.status = status;
  this.message = message;
  // зберігає стек в this, стек не весь, а з помилки HttpError
  Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function getPhrase(name) {
  if (!phrases[name]) {
    throw new PhraseError('Немає такої фрази ' + name);
  }
  return phrases[name];
}

function makePage(url) {
  if (url !== 'index.html') {
    throw new HttpError(404, 'Немає такої сторінки ' + url);
  }
  return util.format('%s, %s!',  getPhrase('Hell'),  getPhrase('world'));
}

try {
  var page = makePage('index.html');
  console.log(page);
} catch (e) {
  if (e instanceof HttpError) {
    console.log(e.status, e.message);
  } else if (e instanceof PhraseError) {
    console.error('Помилка %s\n повідомлення: %s\n стек: %s',
      e.name, e.message, e.stack);
  }
}
