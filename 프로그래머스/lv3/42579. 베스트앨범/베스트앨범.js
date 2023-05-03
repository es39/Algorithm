function solution(genres, plays) {
    // 1. 객체 생성
    // 2. 장르: 인덱스, 실행횟수
    // 3. value 가 가장 높은 장르의 인덱스를 넣음 (높은 순서대로) -> 이후 장르에 대한 인덱스 
    // 4. 장르별로 2개가 넘어가면 그 다음 노래는 수록하지 않음

    // map 객체 선언
    let map = new Map();
    // map에 장르: [{인덱스, 실행횟수}]
    for (let i=0; i<genres.length; i++) {
        if (map.get(genres[i])) { // map 객체 value
            // 있다면 해당 장르에 value 추가
            map.set(genres[i], [...map.get(genres[i]), {idx: i, play: plays[i]}]); 
        } else {
            // 없다면 장르 + value 추가
            map.set(genres[i], [{idx: i, play: plays[i]}])
        }
        // 정렬
        const sorted = map.get(genres[i])
        sorted.sort((a,b) => b.play - a.play);
        sorted.sort((a,b) => {
            if (a.play === b.play) {
                a.idx - b.idx
            }
        });
        map.set(genres[i], sorted);
    }
    // 장르별 누적 재생 횟수
    let sum = [];
    for (let genre of map.keys()) {
        const temp = map.get(genre);
        const total = temp.reduce((acc, cur) => acc + cur.play, 0);
        sum.push({
            genre: genre,
            total: total,
        })
    }
    sum.sort((a, b) => b.total - a.total);
    
    let result = [];
    for (let i=0; i<sum.length; i++) {
        const topSongs = map.get(sum[i].genre);
        const sliced = topSongs.slice(0, 2);
        if (sliced.length >= 2) {
            result = [...result, sliced[0].idx, sliced[1].idx];
        } else {
            result = [...result, sliced[0].idx]
        }
    }
    return result;
}