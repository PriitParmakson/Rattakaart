package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"

	// "path"
	"regexp"
)

type punktinimi string

type koordinaat float32

// Punkt loetakse failist.
type Punkt struct {
	Nimi punktinimi   `json:"nimi"`
	Loc  []koordinaat `json:"loc"`
}

// Lõik loetakse failist.
type Lõik struct {
	Algus  punktinimi `json:"a"`
	Lõpp   punktinimi `json:"l"`
	Pikkus float32    `json:"p"`
}

type teepunkt struct {
	punktinimi punktinimi
	pikkus     float32 // Tee kumuleeruv pikkus selle punktini.
}

// Failist sisseloetud punktid ja lõigud.
var punktid []Punkt
var lõigud []Lõik

// Koostatav tee ja selle pikkus.
var tee []teepunkt
var teepikkus float32

// Jätkude slice. Jätk on punkt, kuhu tee viimasest punktist on võimalik edasi
// minna.
var jätkud []Lõik

// main teeb alustustoimingud ja seejärel kontrollib andmete kooskõla.
func main() {

	fmt.Print("Rattatee: \n")

	// Testimiseks:
	// loePunktid("../test/punktid.js")
	// loeLõigud("../test/loigud.js")

	loePunktid("../punktid.js")
	loeLõigud("../loigud.js")

	kontrolliLõigud()
}

// loePunktid loeb punktid failist sisse.
func loePunktid(fnimi string) {
	data, err := ioutil.ReadFile(fnimi)
	if err != nil {
		panic(err)
	}
	r, _ := regexp.Compile(`\[(?s).*\]`)
	// fmt.Println(string(r.Find(data)))
	e := r.Find(data)

	punktid = make([]Punkt, 0)
	err = json.Unmarshal(e, &punktid)
	if err != nil {
		panic(err)
	}
	fmt.Printf("Loetud %v punkti.\n", len(punktid))
	// for _, p := range punktid {
	// 	fmt.Println(" punkt: ", p.Nimi)
	// }
}

// loeLõigud loeb lõigud failist sisse.
func loeLõigud(fnimi string) {
	data, err := ioutil.ReadFile(fnimi)
	if err != nil {
		panic(err)
	}
	// Võta välja JSON-osa. Raw string backticks on vajalikud, et pagendamine (escape)
	// toimiks. (?s) on s mode, vajalik selleks, et otsing hõlmaks ka reavahetusi.
	r, _ := regexp.Compile(`\[(?s).*\]`)
	// fmt.Println(string(r.Find(data)))
	e := r.Find(data)

	lõigud = make([]Lõik, 0)
	err = json.Unmarshal(e, &lõigud)
	if err != nil {
		panic(err)
	}
	fmt.Printf("Loetud %v lõiku.\n", len(lõigud))
	// for _, l := range lõigud {
	// 	fmt.Println(" lõik: ", l.Algus, l.Lõpp, l.Pikkus)
	// }
}

// kontrolliLõigud kontrollib, et:
// 1) punktid ei ole kahekordselt;
// 2) lõigu otspunktid on punktide nimekirjas;
// 3) lõik ei ole kahekordselt;
// 4) punktiga on seotud vähemalt üks lõik.
func kontrolliLõigud() {

	// Koosta punktide paisktabel, kontrolli punktide unikaalsust (1. kontroll).
	fmt.Println("1. kontroll")
	var pM map[punktinimi]bool
	pM = make(map[punktinimi]bool)
	for _, p := range punktid {
		_, leitud := pM[p.Nimi]
		// fmt.Printf("punkt: %v \n", p.Nimi)
		if leitud {
			fmt.Println("  kahekordne punkt: ", p.Nimi)
		} else {
			pM[p.Nimi] = true
		}
	}

	// Kontrolli, et lõigu otspunktid on punktide nimekirjas (2. kontroll).
	fmt.Println("2. kontroll")
	for _, l := range lõigud {
		_, leitud := pM[l.Algus]
		if !leitud {
			fmt.Println("  lõik viitab kirjeldamata punktile: ", l.Algus)
		}
		_, leitud = pM[l.Lõpp]
		if !leitud {
			fmt.Println("  lõik viitab kirjeldamata punktile: ", l.Lõpp)
		}
	}

	// Kontrolli, et lõik ei ole kahekordselt (3. kontroll).
	fmt.Println("3. kontroll")
	for i1, l1 := range lõigud {
		for i2, l2 := range lõigud {
			if i1 == i2 {
				continue
			}
			if ((l1.Algus == l2.Algus) && (l1.Lõpp == l2.Lõpp)) ||
				((l1.Algus == l2.Lõpp) && (l1.Lõpp == l2.Algus)) {
				fmt.Println("  lõik kahekordselt: ", l1.Algus, " - ", l1.Lõpp)
			}
		}
	}

	// Kontrolli, et punktiga on seotud vähemalt üks lõik (4. kontroll).
	fmt.Println("4. kontroll")
	for _, p1 := range punktid {
		leitud := false
		for _, l := range lõigud {
			if (l.Algus == p1.Nimi) || (l.Lõpp == p1.Nimi) {
				leitud = true
				break
			}
		}
		if !leitud {
			fmt.Println("  ühegi lõiguga sidumata punkt: ", p1.Nimi)
		}
	}

	fmt.Println("Kontrollitud")
}

// Märkmed
// Google re2 syntax
// https://github.com/google/re2/wiki/Syntax

// Go by Example: Regular Expressions
// https://gobyexample.com/regular-expressions

// Decode top level JSON array into a slice of structs in golang
// https://coderwall.com/p/4c2zig/decode-top-level-json-array-into-a-slice-of-structs-in-golang
