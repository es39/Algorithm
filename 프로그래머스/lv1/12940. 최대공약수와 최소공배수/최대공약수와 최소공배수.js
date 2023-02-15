function solution(n, m) {
    let max = Math.max(m, n)
    let min = Math.min(m, n)
    return [gcd(max, min), lcm(max, min)]
}

function gcd(a, b){
	while(b !== 0){
		let r = a % b;
		a = b;
		b = r;
	}
	return a;
}

function lcm(a, b){
	return a * (b / gcd(a, b));
}