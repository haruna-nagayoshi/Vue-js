# Vue-js
### Vue.jsの勉強用リポジトリ

- 「Vue.js入門　基礎から実践アプリケーション開発まで」の写経

### DockerでつくったVueCLI環境の使い方
- 基本
    - コンテナのビルド&起動　　

        ```docker-compose up -d --build```
    
    - コンテナの終了　　
    
        ```docker-compose down```
    
    - 起動中のコンテナの中に入る  
    
        ```docker-compose exec {サービス名} //bin/sh```  
        「/bin/sh 部分が ${Git Bashのルートディレクトリ}/bin/sh と変換され」るため、変換させないためにエスケープが必要らしい。  
        [WindowsのGit Bashでパス変換が予期せぬ動作をする場合の対処法](https://qiita.com/nannany_tis/items/52c471d7b13bff9b285e#例1-起動中のコンテナの中身をみようとして失敗)

- chapter6　　　　

     `It seems you are running Vue CLI inside a container.` など、npm独自かvue独自か不明だが説明が丁寧な感じがした。
    - 単一ファイルコンポーネントをビルドしてブラウザでビルド結果を表示する
        ```
        cd /app/src/chapter6/test
        vue serve hello.vue --open
        ```
        http://localhost:1234/にアクセスすると結果が表示される
    - Vue projectを新規作成
        ```
        cd /app/src/chapter6/
        vue create {プロジェクト名}
        cd test-project
        npm run serve
        ```
        http://localhost:1234/にアクセスするとVueのwelcomeページが表示される

### 参考
- [Dockerを使ってVue CLI 3 の開発環境を構築する](https://qiita.com/satokibi/items/189945f984e5e53117ea)
