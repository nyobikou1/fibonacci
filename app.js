'use strict';

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
    //has メソッド 指定された要素があればtrueを返す
    if (memo.has(n)) {  //memoの添字nに記憶していれば
        return memo.get(n); //memoから答えを取り出す
    }
    const value = fib(n - 1) + fib(n - 2);  //新規計算
    memo.set(n, value); //添字nのmapに答えを記憶させる
    return value;
}


const length = 100;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}