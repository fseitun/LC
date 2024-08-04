package main

import (
	"fmt"
)

func predictPartyVictory(senate string) string {
	senateSlice := []rune(senate)
	for len(senateSlice) > 1 {
		if senateSlice[0] == 'R' {
			found := false
			for i := 1; i < len(senateSlice); i++ {
				if senateSlice[i] == 'D' {
					senateSlice = append(senateSlice[:i], senateSlice[i+1:]...)
					found = true
					break
				}
			}
			if !found {
				return "Radiant"
			}
		} else {
			found := false
			for i := 1; i < len(senateSlice); i++ {
				if senateSlice[i] == 'R' {
					senateSlice = append(senateSlice[:i], senateSlice[i+1:]...)
					found = true
					break
				}
			}
			if !found {
				return "Dire"
			}
		}
		senateSlice = append(senateSlice[1:], senateSlice[0])
	}
	if senateSlice[0] == 'R' {
		return "Radiant"
	} else {
		return "Dire"
	}
}

func main() {
	param := "RDDDDDDDDDDD"
	fmt.Println(param, "expect Dire", "recieved", predictPartyVictory(param))
	param = "RD"
	fmt.Println(param, "expect Radiant", "recieved", predictPartyVictory(param))
	param = "RDD"
	fmt.Println(param, "expect Dire", "recieved", predictPartyVictory(param))
	param = "DDRRR"
	fmt.Println(param, "expect Dire", "recieved", predictPartyVictory(param))
	param = "DRDRDRDRDRDRDR"
	fmt.Println(param, "expect Dire", "recieved", predictPartyVictory(param))
}
