package main

import "fmt"

func romanToInt(s string) int {
	m := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	result := 0

	for i := 0; i < len(s); i++ {
		current := m[s[i]]

		if i+1 < len(s) && current < m[s[i+1]] {
			result -= current
		} else {
			result += current
		}
	}

	return result
}

func main() {
	fmt.Println(romanToInt("III"))     // 3
	fmt.Println(romanToInt("LVIII"))   // 58
	fmt.Println(romanToInt("MCMXCIV")) // 1994
}
