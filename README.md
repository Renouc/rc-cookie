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

- 使用工具类

```js
import { CookieStorage } from "rc-cookie";

// 设置 cookie
CookieStorage.setItem("token", "123456");

// 获取 单个 cookie
CookieStorage.getItem("token");

// 删除 单个 cookie
CookieStorage.removeItem("token");

// 清空 cookie
CookieStorage.clear();
```
