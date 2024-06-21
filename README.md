# Festival Searcher 🌟

- Festival Searcher 允許用戶傳送他們的位置，並接收附近的節慶活動地點資訊。
- 使用 LINE Messaging API 及基於位置的服務來查找並返回附近節慶活動地點的資訊。
## 目標群體

適合想參加當地特別的慶典活動，但卻不知道從哪取得資訊的人。
## 📧 ID 
@297btejz

## 📱 QRcode
![Line Bot](https://raw.githubusercontent.com/CassidyFan/line/main/images/QRcode.jpg)

## 功能 

- 📍 **傳送位置**：用戶可以傳送他們的位置給機器人。
- 🏙️ **接收附近地點**：機器人根據傳送的位置返回附近的慶典活動地點列表。

## 設置 ⚙️

### 先決條件

- 安裝 [Node.js](https://nodejs.org/) 和 [npm](https://www.npmjs.com/)。
- 註冊 [LINE Developers](https://developers.line.biz/en/) 帳戶。
- 獲取基於位置的 API 金鑰（如 [Google Maps API](https://cloud.google.com/maps-platform)）。

### 安裝 🛠️

1. **安裝npm**

    ```sh
    npm install
    ```

2. **創建 `.env` 文件**

    在根目錄創建一個 `.env` 文件，並添加金鑰：

    ```env
   CHANNEL_ID=
   CHANNEL_SECRET=
   CHANNEL_ACCESS_TOKEN=
   DEBUG = true
    ```

## 授權條款 📜
- 政府資料開放平台 : 藝文活動 - 節慶專區
- JSON 檔 : https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ
- 相關網址 :
- http://goo.gl/PGqEBv
- 相關資料集 :
- 經緯度查詢附近未過期活動
- 親子活動
- 藝文活動筆數統計
- 新住民主題區藝文活動
- 展覽資訊
