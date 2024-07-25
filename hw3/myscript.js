// 1
function num_reverse(num){
    return String(num).split("").reverse().join("");
}

// 2
function is_palindrome(s) {
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        left += 1;
        right -= 1;
    }
    return true;
}

// 3
function combinations(s){
    var arr = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            arr.push(s.slice(i,j+1))
        }
    }
    return arr;
}

// 4
function alphabetical_order(s) {
    return [...s].sort((a, b) => a.localeCompare(b)).join("");
}

// 5
function capitalize(s) {
    return s.split(" ").reduce(
        (sentence, word) => sentence + " " + word.slice(0,1).toUpperCase() + word.slice(1),
        ""
    );
}

// 6
function longest_word(s) {
    return s.split(" ").reduce(
        (longest, word) => longest.length > word.length? longest : word,
        ""
    );
}

// 7
function count_vowels(s) {
    var counts = [...s].reduce((acc, curr) => {
        if ('aiueo'.includes(curr.toLowerCase())) {
            acc[curr.toLowerCase()] = (acc[curr.toLowerCase()] || 0) + 1;
        } 
        return acc;
    }, {});
    return Object.values(counts).reduce((acc, curr) => acc + curr, 0);
}

// 8
function is_prime(num) {
    var lim = num;
    var it = 2;
    while (it <= lim) {
        if (!(num % it)) {
            return false;
        }
        lim = Math.floor(num / it);
        it++;
    }
    return true;
}

// 9
function type_of(variable) {
    return typeof variable;
}

// 10
function identity(n) {
    return Array(n).fill(null)
            .map((val, idx) => 
                Array(n).fill(0).fill(1, idx, idx+1)
            );
}

// 11
function low_grd_2nd(arr) {
    return [arr.sort()[1], arr[arr.length-2]];
}

// 12
function is_perfect(num) {
    var lim = num;
    var it = 2;
    var divisors_sum = 1;
    while (it <= lim) {
        if (!(num % it)) {
            divisors_sum += it + num / it;
        }
        lim = Math.floor(num / it);
        it++;
    }
    return divisors_sum == num ? true : false;
}

// 13
function factors(num) {
    var lim = num;
    var it = 1;
    var factors = [];
    while (it <= lim) {
        if (!(num % it)) {
            factors.push(it);
            factors.push(num / it);
        }
        lim = Math.floor(num / it);
        it++;
    }
    return factors;
}

// 14
function to_coins(num, coin_types) {
    // decending order
    coin_types.sort((a,b) => b - a);
    var rem = num;
    var coins = {}; 
    for (let start = 0; start < coin_types.length; start++) { 
        // search with current strategy    
        for (let i = start; i < coin_types.length; i++) {
            while (rem / coin_types[i] >= 1) {
                coins[coin_types[i]] = (coins[coin_types[i]] || 0) + 1;
                rem -= coin_types[i];
            }
        } 
        if (!rem) {
            var result = Object.keys(coins).reduce(
                (total, coin_type) =>
                    total.concat(Array(coins[coin_type]).fill(coin_type)),
                []
            );
            return result;
        }
        // if remain exists, delete largest coin type and continue
        coins = {};
        rem = num;
    }
    return null;
}

// 15
function exponent(b, n) {
    return Math.pow(b, n);
}

// 16
function unique(s) {
    return [...s].filter((c, idx)=>s.indexOf(c) == idx).join("");
}

// 17
function count(s) {
    var counts = [...s].reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    return counts;
}

// 18
function binary_search(arr, target) {
    const binary_search_help = (arr, target, start, end) => {
        // assume arr is sorted
        
        if (start > end) {
            return null;
        }
        let mid = Math.floor((end + start) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] > target) {
            // go left
            return binary_search_help(arr, target, start, mid-1);
        }
        else {
            // go right
            return binary_search_help(arr, target, mid+1, end);
        }
    }
    return binary_search_help(arr, target, 0, arr.length-1);
}

// 19
function arr_larger(arr, num) {
    return arr.filter(elm => elm > num);
}

// 20
function generate_id(len) {
    const char_list =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const get_random_int = (min, max) => Math.floor(Math.random() * (max - min) + min);
    // testing time, the map is significant quicker than for loop
    // var cur_time = Date.now();
    // let s1 = "";
    // for (let i = 0; i < len; i++) {
    //     s1 += char_list[get_random_int(0, char_list.length)];
    // }
    // console.log(Date.now() - cur_time);
    // var cur_time2 = Date.now();
    // var s2 = Array(len).fill(0).map(elm => char_list[get_random_int(0, char_list.length)]).join("");
    // console.log(Date.now() - cur_time2);
    return Array(len).fill(0).map(elm => char_list[get_random_int(0, char_list.length)]).join("");
}

// 21
function get_subsets(arr, len) {
    if (len > arr.length) {
        return [];
    }
    const get_all_subsets = arr => {
        if (arr.length === 1) return [arr];
        else {
            subarr = get_all_subsets(arr.slice(1));
            console.log(JSON.stringify(subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]])));
            return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
        }
    }
    return get_all_subsets(arr).filter(elm => elm.length == len);
}

// 22
function count_letter(s, letter) {
    return [...s].reduce((acc, cur) => acc + (cur == letter), 0)
}

// 23
function first_non_repeat(s) {
    var counts = [...s].reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {}
    );
    for (c of s) {
        if (counts[c] == 1) {
            return c;
        }
    }
    return null;
}

// 24
function bubble_sort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        // last i has been sorted
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j+1]) {
                // swap
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// 25
function longest_country_name(arr) {
    return arr.reduce((longest, cur) =>
        longest.length > cur.length ? longest : cur
    );
}

// 26
function longest_non_repeat_substring(s) {
    if (s.length == 0) {
        return "";
    }
    // sliding window
    var left = 0;
    var right = 0;
    var longest = [left, right];
    var exists = new Set();
    while (right + 1 < s.length) {
        right += 1;
        // if exist repeat, delete previous
        while (exists.has(s[right])) {
            exists.delete(s[left]);
            left += 1;
        }
        // update exists and longest
        exists.add(s[right]);
        longest = (longest[1] - longest[0] > right - left) ? longest : [left, right];
    }
    return s.slice(longest[0], longest[1]+1);
}

// 27
function longest_palindromes(s) {
    var longest_palindromes = [];
    var longest = 0;
    for (let i = 0; i < s.length; i++) {
        // i as left
        let left = i;
        let right = i + 1;
        while (left >= 0 && right < s.length) {
            if (s[left] != s[right]) {
                break;
            }
            left--;
            right++;
        };
        // left and right are all exclusive
        // if has so far longest palindromes
        if (right - left - 2 > longest) {
            longest_palindromes = [s.substring(left+1, right)];
            longest = right - left - 2;
        }
        else if (right - left - 2 == longest) {
            longest_palindromes.push(s.substring(left+1, right));
        }

        // i as middle
        left = i - 1;
        right = i + 1;
        while (left >= 0 && right < s.length) {
            if (s[left] != s[right]) {
                break;
            }
            left--;
            right++;
        };
        // left and right are all exclusive
        // if has so far longest palindromes
        if (right - left - 2 > longest) {
            longest_palindromes = [s.substring(left+1, right)];
            longest = right - left - 2;
        }
        else if (right - left - 2 == longest) {
            longest_palindromes.push(s.substring(left+1, right));
        }
    }
    return longest_palindromes;
}

// 28
function execute_func(func, ...args) {
    return func(...args);
}

// 29
function get_func_name(func) {
    return func.name;
}