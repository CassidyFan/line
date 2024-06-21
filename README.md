# Festival Searcher 🌟

- Festival Searcher 允許用戶傳送他們的位置，並接收附近的節慶活動地點資訊。
- 使用 LINE Messaging API 及基於位置的服務來查找並返回附近節慶活動地點的資訊。
## 目標群體

適合想參加當地的特別慶典活動，但卻不知道從哪取得資訊的人。
## 📞ID
@297btejz

## QRcode
![Line Bot](https://yourimageurl.com/line-bot.png)

## 功能

- 📍 **傳送位置**：用戶可以傳送他們的位置給機器人。
- 🏙️ **接收附近地點**：機器人根據傳送的位置返回附近的地點列表。

## 設置

### 先決條件

- 安裝 [Node.js](https://nodejs.org/) 和 [npm](https://www.npmjs.com/)。
- 註冊 [LINE Developers](https://developers.line.biz/en/) 帳戶。
- 獲取基於位置的 API 金鑰（如 [Google Maps API](https://cloud.google.com/maps-platform)）。

### 安裝

1. **克隆倉庫**

    ```sh
    git clone https://github.com/yourusername/line-bot-nearby-places.git
    cd line-bot-nearby-places
    ```

2. **安裝依賴**

    ```sh
    npm install
    ```

3. **創建 `.env` 文件**

    在根目錄創建一個 `.env` 文件，並添加您的 LINE 和位置服務 API 金鑰：

    ```env
    LINE_CHANNEL_ACCESS_TOKEN=YOUR_LINE_CHANNEL_ACCESS_TOKEN
    LINE_CHANNEL_SECRET=YOUR_LINE_CHANNEL_SECRET
    MAPS_API_KEY=YOUR_MAPS_API_KEY
    ```

### 使用

1. **啟動伺服器**

    ```sh
    npm run dev
    ```

2. **設置您的 Webhook URL**

    - 前往您的 LINE Developers Console。
    - 將 Webhook URL 設置為：`https://yourdomain.com/webhook`

3. **部署到伺服器**

    - 使用如 [Heroku](https://www.heroku.com/)、[Vercel](https://vercel.com/) 或任何其他 Node.js 主機服務來部署您的機器人。

## 程式碼說明

### `index.js`
