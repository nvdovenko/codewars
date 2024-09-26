/**
 * Function converts between camelCase, snake_case, and kebab-case.
 * Examples:
 * changeCase("snakeCase", "snake") -> "snake_case"
 * changeCase("invalid-inPut_bad", "kebab") -> undefined'
 * changeCase("doHTMLRequest", "kebab") -> "do-h-t-m-l-request"
 * changeCase("valid-input", "huh???") -> undefined
 */
function changeCase(identifier, targetCase) {
  let answer = '';

  if (identifier === '') return '';
  let upperCase = identifier.match(/[A-Z]/);
  if (upperCase === null) upperCase = [];

  if (
    identifier.includes('_') +
      identifier.includes('-') +
      (upperCase.length > 0) >
    1
  )
    return undefined;

  if (targetCase === 'snake' || targetCase === 'kebab') {
    let correctSymbol = '';

    if (targetCase === 'snake') correctSymbol = '_';
    else correctSymbol = '-';

    for (i = 0; i < identifier.length; i++) {
      if (identifier[i] === '-' || identifier[i] === '_')
        answer += correctSymbol;
      else if (identifier[i] === identifier[i].toUpperCase())
        answer += correctSymbol + identifier[i].toLowerCase();
      else answer += identifier[i];
    }

    return answer;
  }

  if (targetCase === 'camel') {
    let cangeNextLetter = false;

    for (i = 0; i < identifier.length; i++) {
      if (identifier[i] === '_' || identifier[i] === '-')
        cangeNextLetter = true;
      else {
        if (cangeNextLetter) answer += identifier[i].toUpperCase();
        else answer += identifier[i];

        cangeNextLetter = false;
      }
    }

    return answer;
  }

  return undefined;
}
