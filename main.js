function dscount(str, s1, s2) {
    var count = ((str.match(new RegExp(s1+s2, "gi")) || []).length);
    return count;
}