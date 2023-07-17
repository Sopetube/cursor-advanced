async function getRandomChinese(length){
    let i = 1;
    let words = '';
    const promises = [];

    while(i <= length){
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                const sign = Date.now();
                const sgnStr = sign.toString().slice(-5);
                const chinese = String.fromCharCode(sgnStr);
                resolve(chinese);
            }, 50 * i);
            i++;
        });
        promises.push(promise)
    }
return await Promise.all(promises).then((res) => res.join(""))
}
getRandomChinese(4).then((promises) => {
    console.log(promises);
});