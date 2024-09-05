# cookie 🔧

## 介绍

提供一些 cookie 操作方法，如：设置、获取、删除、清空等。

### 安装

```bash
npm install --save rc-cookie
```

### 使用

- 获取 cookie

```js
import { parseCookie } from "rc-cookie";

// 获取单个 cookie
const cookie = parseCookie("token");

// 获取 所有cookie 对象
const cookies = parseCookie();
```
