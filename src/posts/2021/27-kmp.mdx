---
title: 'KMP coding'
date: 2021-05-17
published: false
slug: 27-kmp
tags: ['算法']
cover_image: "./images/p27.jpg"
canonical_url: false
description: 'kmp'
---

# KMP 学习

KMP 是什么？KMP 解决了什么问题？

先想办法解决下面这个问题，KMP 也是解决这个问题时想出来的算法。

https://leetcode-cn.com/problems/implement-strstr/submissions/

先写个暴力的，也就是 BF 算法。

```cpp
class Solution {
public:
    int strStr(string haystack, string needle) {
        int i = 0, m = haystack.size();
        int j = 0, n = needle.size();
        while (i < m && j < n) {
            if (haystack[i] == needle[j]) {
                i++, j++;
            }else {
                i = i - j + 1;
                j = 0;
            }
        }

        if (j == n) {
            return i - j;
        }
        return -1;
    }
};
```

然后看这两个视频。

https://www.bilibili.com/video/BV1PD4y1o7nd

https://www.bilibili.com/video/BV1M5411j7Xx

接下来是 KMP 的实现，有了两个视频的铺垫，此时不看视频应该能够写出如下代码。

```cpp
class Solution {
public:
    void getNext(vector<int>& next, string haystack) {
        int j = 0;
        next[0] = j;

        for (int i = 1; i < haystack.size(); i++) {
            while (j > 0 && haystack[i] != haystack[j]) {
                j = next[j - 1];
            }
            if (haystack[i] == haystack[j]) {
                j++;
            }
            next[i] = j;
        }
    }

    int strStr(string haystack, string needle) {
        if (needle.size() == 0) return 0;
        vector<int> next(needle.size() , 0);
        getNext(next , needle);
        int j = 0;
        for (int i = 0; i < haystack.size(); i++) {
            while (j > 0 && haystack[i] != needle[j]) {
                j = next[j - 1];
            }
            if (haystack[i] == needle[j]) {
                j++;
            }
            if (j == needle.size()) {
                return i - j + 1;
            }
        }              
        return -1;
    }
};
```

然后仔细阅读这篇[文章](https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0028.%E5%AE%9E%E7%8E%B0strStr.md)。思考为什么要变形。

此时再遇到类似的问题时就能自己推出来了。