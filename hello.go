package main

import (
	"fmt"
	"math"
)

// Types ###########################################

type Person struct {
	Name string
	Age  int
}

type Vertex struct {
	X, Y float64
}

type Abser interface {
	Abs() float64
}

type IPAddr [4]byte

type MyFloat float64

type ErrNegativeSqrt float64

// Pointer Empfänger ###############################

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func AbsFunc(v Vertex) float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

// Interface ######################################

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

// Interface-Werte: Interface führt die Methode mit einem konkreten Typen aus

// Type Switches

func do(i interface{}) {
	switch v := i.(type) {
	case int:
		fmt.Printf("Twice %v is %v\n", v, v*2)
	case string:
		fmt.Printf("%q is %v bytes long\n", v, len(v))
	default:
		fmt.Printf("I don't know about type %T!\n", v)
	}
}

// Stringer ######################################

func (p Person) String() string {
	return fmt.Sprintf("%v (%v years)", p.Name, p.Age)
}

// Sprintf klappt mit jedem type
// a := Person{"Arthur Dent", 42}
// z := Person{"Zaphod Beeblebrox", 9001}
// fmt.Println(a, z)
// ------> Output: Arthur Dent (42 years) Zaphod Beeblebrox (9001 years)

func (ip IPAddr) String() string {
	return fmt.Sprintf("%v.%v.%v.%v", ip[0], ip[1], ip[2], ip[3])
}

// Errors #######################################

func (e ErrNegativeSqrt) Error() string {
	return fmt.Sprintf("can not Sqrt negative number: %v", float64(e))
}

func Sqrt(x float64) (float64, error) {
	if x < 0 {
		return 0, ErrNegativeSqrt(x)
	}
	z := 1.0
	for {
		if math.Abs(z-(z-(z*z-x)/(z*2))) < 0.00000000000001 {
			return z, nil
		} else {
			z = z - (z*z-x)/(z*2)
		}
	}
}

func main() {
	do(21)
	do("Hello")
	do(true)

	fmt.Println(Sqrt(2))
	fmt.Println(Sqrt(-2))

	// Stringers ####################################
	hosts := map[string]IPAddr{
		"loopback":  {127, 0, 0, 1},
		"googleDNS": {8, 8, 8, 8},
	}
	for name, ip := range hosts {
		fmt.Printf("%v: %v\n", name, ip)
	}
}
