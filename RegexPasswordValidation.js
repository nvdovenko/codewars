// Regex that will validate a password to make sure it meets the following criteria:
// at least six characters long;
// contains a lowercase letter;
// contains an uppercase letter;
// contains a digit;
// only contains alphanumeric characters (note that '_' is not alphanumeric).

const REGEXP =/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])^[a-zA-Z0-9]{6,}$/;