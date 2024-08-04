package main

import (
	"fmt"
)

func predictPartyVictoryAlt(senate string) string {
	direQueue := []int{}
	radiantQueue := []int{}

	for i, s := range senate {
		if s == 'R' {
			radiantQueue = append(radiantQueue, i)
		} else {
			direQueue = append(direQueue, i)
		}
	}

	for len(direQueue) > 0 && len(radiantQueue) > 0 {
		if direQueue[0] < radiantQueue[0] {
			direQueue = append(direQueue, direQueue[0]+len(senate))
		} else {
			radiantQueue = append(radiantQueue, radiantQueue[0]+len(senate))
		}
		direQueue = direQueue[1:]
		radiantQueue = radiantQueue[1:]
	}

	if len(direQueue) > 0 {
		return "Dire"
	}
	return "Radiant"
}

func main() {
	param := "RDDDDDDDDDDD"
	fmt.Println(param, "expect Dire", "recieved", predictPartyVictoryAlt(param))
	param = "RD"
	fmt.Println(param, "expect Radiant", "recieved", predictPartyVictoryAlt(param))
	param = "RDD"
	fmt.Println(param, "expect Dire", "recieved", predictPartyVictoryAlt(param))
	param = "DDRRR"
	fmt.Println(param, "expect Dire", "recieved", predictPartyVictoryAlt(param))
	param = "DRDRDRDRDRDRDR"
	fmt.Println(param, "expect Dire", "recieved", predictPartyVictoryAlt(param))
}
