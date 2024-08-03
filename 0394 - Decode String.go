package main

import (
	"fmt"
	"strings"
	"unicode"
)

func decodeString(s string) string {
	// Stacks to keep track of multipliers and strings at different levels of nesting
	multiplierStack := []int{}
	stringStack := []string{}
	// Variables to store the current segment of the string and the current multiplier
	currentString := ""
	currentNumber := 0

	for _, c := range s {
		if unicode.IsDigit(c) {
			// Build the current number (handle multi-digit numbers)
			currentNumber = currentNumber*10 + int(c-'0')
		} else if c == '[' {
			// When encountering '[', push the current number and string onto their respective stacks
			multiplierStack = append(multiplierStack, currentNumber)
			stringStack = append(stringStack, currentString)
			// Reset current number and current string for the new nested segment
			currentNumber = 0
			currentString = ""
		} else if unicode.IsLetter(c) {
			// Append the current character to the current segment of the string
			currentString += string(c)
		} else if c == ']' {
			// When encountering ']', pop the last multiplier and last string from the stacks
			lastMultiplier := multiplierStack[len(multiplierStack)-1]
			multiplierStack = multiplierStack[:len(multiplierStack)-1]
			lastString := stringStack[len(stringStack)-1]
			stringStack = stringStack[:len(stringStack)-1]
			// Repeat the current string segment as per the popped multiplier
			repeatedString := strings.Repeat(currentString, lastMultiplier)
			// Concatenate the repeated string segment with the string segment before the current nested level
			currentString = lastString + repeatedString
		}
	}
	return currentString
}

func main() {
	param := "3[a]2[bc]"
	fmt.Println(param, "expect aaabcbc", "recieved", decodeString(param))
	param = "3[a2[c]]"
	fmt.Println(param, "expect accaccacc", "recieved", decodeString(param))
	param = "2[abc]3[cd]ef"
	fmt.Println(param, "expect abcabccdcdcdef", "recieved", decodeString(param))
	param = "10[a]"
	fmt.Println(param, "expect aaaaaaaaaa", "recieved", decodeString(param))
	param = "2[3[a]b]"
	fmt.Println(param, "expect aaabaaab", "recieved", decodeString(param))
}
