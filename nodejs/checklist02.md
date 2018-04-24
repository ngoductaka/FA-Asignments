# 1 NodeJS introduction
## 1.1 Nodejs la gi:
nodeJS la nền tảng (server-side ) được xây dựng dựa trên js và C++ dựa vào v8 engine.Là Opent sourse, có thể viết bằng javascript. 
## 1.2 điểm mạnh 
lập trình viên có thể sử dụng js để làm viêc server-side;
tương đối nhanh, xây dựng trên engine V8 của gg
## 1.3 engine V8:
V8 is Google’s open source high-performance JavaScript engine, 
là 1 loại process visual machine dùng để biên dịch javascript 
## 1.4 Nêu mô hình client - server ?. Cụ thế mô hình client server ở trong web service
* mô hình client - server (khách - chủ) là mô hình đinh điển phân chức năng nhiệm vụ các máy tính trong hệ thống . 1 bên là client đưa ra các request tới server. server có trách nhiệm nghe các request và đưa ra reponse đáp trã
* trong web service các máy người dùng (có chạy brower ) là client và máy chủ là máy cài đặt chương trình máy chủ có nhiệm vụ sử lý các yêu cầu và trã lời các yêu cầu từ client 
## 1.5 Thế nào là code js ở phía server ?
* trước khi có nodejs js chỉ đc biết đến là ngôn ngữ xây dựng giao diện phía người dùng và các ngôn ngữ server-side khác để xây dụng chương trình server 
* khi có nodejs có khả năng dùng js để xây dựng chương trình chạy trên server 
## 1.6 Cài đặt node và kiểm tra phiên bản của node và npm ?
```
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo apt-get install npm
```
## 1.7 Use node CLI to run js script ?
```
node -v
npm -v
```
## 1.8 Viết script để lắng nghe cổng 3000 trả về Hello World ?
```javascript
const http = require('http');
// const _ = require('lodas');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`hello World server run at http://${hostname}:${port}`);
});

```
# NPM
## NPM là gì ?. Nêu các lợi ích khi sử dụng trình quản lí package ?
* ý tưởng viết 1 lần chạy mọi nơi. Node package manager quản lý các package mà chương trình cần để chạy 
## File package.json dùng để làm gì ? Cách tạo file và nêu chức năng của từng trường trong file package.json
* dùng để ghi lại những package đã cài đặt như 1 bản ghi lại lịch sử dử dụng 
```
{
  "name": "mockproject",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "micromatch": "^3.1.10",
    "mocha": "^5.0.5"
  },
  "devDependencies": {
    "eslint": "^4.19.1",
    "eslint-config-airbnb": "^16.1.0",
    "eslint-plugin-import": "^2.10.0",
    "eslint-plugin-jsx-a11y": "^6.0.3",
    "eslint-plugin-react": "^7.7.0",
    "husky": "^1.0.0-rc.1",
    "jest": "^22.4.3",
    "lint-staged": "^7.0.4",
    "pre-commit": "^1.2.2",
    "prettier": "1.11.1"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "format": "prettier --single-quote --write ; eslint",
    "prettier": "prettier --single-quote --write",
    "eslint": "eslint --fix",
    "lint-staged": "lint-staged"
  },
  "pre-commit": "lint-staged",
  "lint-staged": {
    "*.js": [
      "yarn prettier",
      "yarn eslint",
      "yarn mocha test/test.js",
      "git add"
    ]
  },
  "author": "dnd",
  "description": ""
}

``` 
* devDependencies : các package đã cài 
* scripts tự định nghĩa các lệnh được thực thi và cách gọi ngắn gọn của nó 
    * có thể chạy bằng 
    ```
    yarn <command> file 
    npm run <command> file 
    ```
## Dependency la gì ?, devDependencies là gì ?
* Dependency: các package dùng khi sử dụng chương trình
* devDependencies các gói chỉ chạy trong khi xây dựng chương trình
https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies
## xóa thư viện 
``` yarn remove <package> ``` hoặc ``` npm uninstall <package>```
## chạy lệnh ? scripts trong package.json định nghĩa các lệnh chạy 

