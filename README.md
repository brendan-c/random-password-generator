# Description
Generate a password based on a given set of parameters and length

# Usage

`generatePassword([parameters], length)`

## Parameters:
- `upper`
- `lower`
- `number`
- `symbol`

### Changing the symbols
Modify the line containing ```const symbols = '`!@#$%^&*()_+-=[]{}|;\':",./<>?'```
Include/exclude any symbols you desire in the string

Note: Parameters must be contained in an array. The order you list the parameters does not matter.

## Examples:

- Generate a password with a length of 8 containing only lowercase characters:
```
generatePassword(['lower'], 8) // => 'hdrfgzbl'
```

- Generate a password with a length of 8 containing only uppercase and lowercase characters:
```
generatePassword(['upper', 'lower'], 8) // => 'BJdfwsUS'
```

- Generate a password with a length of 16 containing only numbers, uppercase characters, and lowercase characters:
```
generatePassword(['number', 'upper', 'lower'], 16) // => 'tzX9869t4kqJx8Bz'
```

- Generate a password with a length of 16 containing symbols, numbers, uppercase characters, and lowercase characters:
```
generatePassword(['upper', 'lower', 'number', 'symbol'], 16) // => '%u/o;f>gduO3t,G<'
```
