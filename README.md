# Vue-js
Vue.jsの勉強用リポジトリ

- 「Vue.js入門　基礎から実践アプリケーション開発まで」の写経

- DockerでVueCLI環境つくったときに躓いたこと
    - コンテナのビルド&起動
    
        ```docker-compose up -d --build```
    - コンテナの終了
    
        ```docker-compose down```
    - 起動中のコンテナの中に入る  
        ```docker-compose exec {サービス名} //bin/sh```  
      「/bin/sh 部分が ${Git Bashのルートディレクトリ}/bin/sh と変換され」るため、変換させないためにエスケープが必要らしい。
      [WindowsのGit Bashでパス変換が予期せぬ動作をする場合の対処法](https://qiita.com/nannany_tis/items/52c471d7b13bff9b285e#例1-起動中のコンテナの中身をみようとして失敗)
