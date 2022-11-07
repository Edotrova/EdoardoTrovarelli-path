

const apiUrl = 'users.json';

const lista = document.querySelector('#lista');
const campiVisibili = ['username', 'firstName', 'lastName', 'gender', 'profileURL', 'email']


    fetch(apiUrl)
    .then(res => res.json())
    .then(res => {

        console.log(res)

        for (let user of res) {

            let tr = document.createElement('tr');

               

            for (prop in user) {


                if (campiVisibili.includes(prop)) {
                    let td = document.createElement('td');
                    td.innerHTML = user[prop]
                    tr.append(td)
            
                 if (prop == 'profileURL') {

                    let img = document.createElement('img');
                    td.innerHTML = '';
                    img.src = user[prop];
                    td.append(img);

                }

                

            }

            lista.append(tr)
        }
    }
})
