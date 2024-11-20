function list(names){
    let string = names.map((x,i) => i != list5.length-1 ? x['name'] + ', ' : x['name']);
    string[string.length-2] = string[string.length-2].split(',')[0] + ' & ';
    return string.reduce((accumulator, currentVal)=> accumulator + currentVal, '');
}