const { map } = require("fp-ts/lib/Functor");

async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList)
  return await result
}

function test(data) {
  new Promise((resolve) =>{
    setTimeout(() =>{
      console.log("3秒経過");
      data.full_name = `${data.family_name} ${data.first_name}`;
      console.log(data);
      resolve();
    },3000);
  }).then(() =>{
    return data;
  });
  
}