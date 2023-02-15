function solution(n, m) {
    let max = Math.max(m, n)
    let min = Math.min(m, n)
    return [gcd(max, min), lcm(max, min)]
}

function gcd(n, m){
    // n = 24, m = 15
	while(m !== 0){
        // 24 % 15 = 1, 9 
        // 15 % 9
        // ... n % m = 0
		let r = n % m;
		n = m;
		m = r;
        
	}
	return n;
}

function lcm(n, m){
	return n * (m / gcd(n, m)); // 3
}

// 24 15
// 24 -> 1 2 3 4 6 8 12 24
// 15 -> 1 5 15

