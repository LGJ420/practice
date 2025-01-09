function cleanString(input) {

    return input
    .replace(/\[.*?\]/, "");
}

const result = cleanString("ov[ep]p[r]e");
console.log(result);