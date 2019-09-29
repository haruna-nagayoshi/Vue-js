Vue.component('description', {
  template: '<p>季節ごとのくだもの一覧です。</p>',
});

Vue.component('fruits-table', {
  template: `
    <table>
        <tr>
            <th>季節</th>
            <th>くだもの</th>
        </tr>    
        <tr>
            <td>春</td>
            <td>いちご</td>
        </tr>   
        <tr>
            <td>夏</td>
            <td>ぶどう</td>
        </tr>  
        <tr>
            <td>秋</td>
            <td>なし</td>
        </tr>  
        <tr>
            <td>冬</td>
            <td>みかん</td>
        </tr>  
    </table>
  `,
});

new Vue({
  el: '#fruits-list',
  components: {
    'fruits-list-title': {
      template: '<h1>くだものリスト</h1>',
    },
  },
});
