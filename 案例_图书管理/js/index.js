/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
//封装-获取并渲染图书列表函数
const creator = 'cfz'
function getBooksList() {
    axios({
        url: 'http://hmajax.itheima.net/api/books',
        params: {
            creator
        }
    }).then(result => {
        // console.log(result)
        const bookList = result.data.data
        // console.log(bookList)
        const htmlStr = bookList.map((item, index) => {
            return `<tr>
            <td>${index + 1}</td>
            <td>${bookList[index].bookname}</td>
            <td>${bookList[index].author}</td>
            <td>${bookList[index].publisher}</td>
            <td data-id=${item.id}>
              <span class="del">删除</span>
              <span class="edit">编辑</span>
            </td>
          </tr>`
        }).join('')
        // console.log(htmlStr)
        document.querySelector(`.list`).innerHTML = htmlStr
    })
}


//网页加载运行，获取并渲染列表一次
getBooksList()

const addModalDom = document.querySelector(`.add-modal`)
const addModal = new bootstrap.Modal(addModalDom)

document.querySelector(`.add-btn`).addEventListener(`click`, () => {
    //收集表单数据，提交到服务器保存
    const addForm = document.querySelector(`.add-form`)
    const bookObj = serialize(addForm, { hash: true, empty: true })
    console.log(bookObj)
    //提交到服务器
    axios({
        url: 'http://hmajax.itheima.net/api/books',
        method: 'post',
        data: {
            // bookname: bookObj.bookname,
            // author:bookObj.author,
            // publisher:bookObj.publisher,
            // creator
            ...bookObj,
            creator
        }
    }).then(result => {
        console.log(result)
        //添加成功后重新请求并渲染图书列表
        getBooksList()
        //重置表单
        addForm.reset()
        //点击隐藏
        addModal.hide()
    })
})

//删除图书
document.querySelector('.list').addEventListener('click', e => {
    // if (e.target.innerHTML === '删除') {
    //     //重新渲染图书列表
    //     // getBooksList()
    // }

    if (e.target.classList.contains('del')) {
        //获取图书id
        const theId = e.target.parentNode.dataset.id
        //调用删除接口
        axios({
            url: `http://hmajax.itheima.net/api/books/${theId}`,
            method: "delete"
        }).then(() => {
            getBooksList()
        })
    }
})

const editModalDom = document.querySelector(`.edit-modal`)
const editModal = new bootstrap.Modal(editModalDom)
//编辑图书
document.querySelector(`.list`).addEventListener('click', e => {
    if (e.target.classList.contains('edit')) {
        const theId = e.target.parentNode.dataset.id
        axios({
            url: `http://hmajax.itheima.net/api/books/${theId}`
        }).then(result => {
            // console.log(result)
            const bookObj = result.data.data
            // document.querySelector(`.edit-form .bookname`).value = bookObj.booknames
            // document.querySelector(`.edit-form .author`).value = bookObj.author
            //遍历数据对象，用属性去获取对应的标签
            const keys = Object.keys(bookObj)
            keys.forEach(key => {
                document.querySelector(`.edit-form .${key}`).value = bookObj[key]
            })
        })

        editModal.show()
    }



    //修改-隐藏弹框
    document.querySelector(`.edit-btn`).addEventListener(`click`, () => {
        //提交保存修改，并刷新列表
        const editForm = document.querySelector(`.edit-form`)
        const { id, bookname, author, publisher } = serialize(editForm, { hash: true, empty: true })

        axios({
            url: `http://hmajax.itheima.net/api/books/${id}`,
            method: 'PUT',
            data: {
                bookname,
                author,
                publisher,
                creator
            }
        }).then(() => {
            editModal.hide()
            getBooksList()
        })




    })

})