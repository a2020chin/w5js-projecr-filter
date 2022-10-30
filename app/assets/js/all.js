const data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];


//新增資料
const formElement = document.querySelector('.js_form')

formElement.addEventListener('submit', (event) => {
  event.preventDefault()
  let name = formElement[0].value.trim()
  let imgUrl = formElement[1].value.trim()
  let area = formElement[2].value.trim()
  let price = formElement[3].value.trim()
  let group = formElement[4].value.trim()
  let rate = formElement[5].value.trim()
  let description = formElement[6].value.trim()

  const error_name = document.querySelector('.js_error_name')
  const error_imgUrl = document.querySelector('.js_error_imgUrl')
  const error_area = document.querySelector('.js_error_area')
  const error_price = document.querySelector('.js_error_price')
  const error_group = document.querySelector('.js_error_group')
  const error_rate = document.querySelector('.js_error_rate')

  const reFilter = document.querySelector('.js_filterGroup')

  if(!formElement[0].validity.valid){
    error_name.innerHTML = `套票名稱不能為空`
  }else{
    error_name.innerHTML = ''
  }
  if(!formElement[1].validity.valid){
    if(formElement[1].value == ''){
      error_imgUrl.innerHTML = `圖片網址不能為空`
    }else{
      error_imgUrl.innerHTML = `圖片網址格式錯誤`
    }
  }else{
    error_imgUrl.innerHTML = ''
  }
  if(!formElement[2].validity.valid){
    error_area.innerHTML = `請選擇景點地區`
  }else{
    error_area.innerHTML = ''
  }
  if(!formElement[3].validity.valid){
    if(formElement[3].value == ''){
      error_price.innerHTML = `請輸入套票金額`
    }else{
      error_price.innerHTML = `套票金額格式錯誤`
    }
  }else{
    error_price.innerHTML = ''
  }
  if(!formElement[4].validity.valid){
    if(formElement[4].value == ''){
      error_group.innerHTML = `請輸入套票組數`
    }else{
      error_group.innerHTML = `套票組數格式錯誤`
    }
  }else{
    error_group.innerHTML = ''
  }
  if(!formElement[5].validity.valid){
    if(formElement[5].value == ''){
      error_rate.innerHTML = `請輸入套票星級`
    }else{
      error_rate.innerHTML = `套票星級格式錯誤`
    }
  }else{
    error_rate.innerHTML = ''
  }

  if(formElement[0].validity.valid &&
    formElement[1].validity.valid &&
    formElement[2].validity.valid &&
    formElement[3].validity.valid &&
    formElement[4].validity.valid &&
    formElement[5].validity.valid &&
    formElement[6].validity.valid){
    console.log(data)



    console.log(name,imgUrl,area,price,group,rate,description);

    data.push({
        "id": data.length,
        name,
        imgUrl,
        area,
        description,
        group,
        price,
        rate,
    })
    formElement[0].value = ''
    formElement[1].value = ''
    formElement[2].value = ''
    formElement[3].value = ''
    formElement[4].value = ''
    formElement[5].value = ''
    formElement[6].value = ''
    error_name.innerHTML = ''
    error_imgUrl.innerHTML = ''
    error_area.innerHTML = ''
    error_price.innerHTML = ''
    error_group.innerHTML = ''
    error_rate.innerHTML = ''
    reFilter.value = '全部地區'
    init();
  }
})

//渲染畫面
const init = (newData = data) =>{
  const ticketList = document.querySelector('.js_ticketList')
  let str = ''
  data.forEach((item) => {
    let content = `
      <li
        class="col-span-4 bg-white shadow-[0px_3px_6px_#00000029] rounded"
      >
        <div class="relative">
          <img
            class="block w-full h-[180px] object-cover rounded-t"
            src="${item.imgUrl}"
            alt=""
          />
          <div
            class="absolute px-5 py-2 bg-secondary text-white text-xl rounded-r top-0 -translate-y-1/4"
          >
          ${item.area}
          </div>
          <div
            class="absolute px-2 py-[5px] bg-primary text-white rounded-r bottom-0 translate-y-1/2"
          >
          ${item.rate}
          </div>
        </div>
        <div
          class="flex flex-col justify-between h-[calc(100%_-_180px)] p-5"
        >
          <div>
            <h3
              class="text-primary text-2xl font-medium pb-1 mb-4 border-b-2 border-b-primary"
            >
            ${item.name}
            </h3>
            <p class="mb-5">
            ${item.description}
            </p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-primary">
              <span class="material-symbols-outlined align-middle mr-[6px]">
                error
              </span>
              剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
            </p>
            <p class="flex items-center text-primary">
              TWD
              <span
                class="font-roboto text-[32px] ml-1"
                id="ticketCard-price"
              >
                $${item.price}
              </span>
            </p>
          </div>
        </div>
      </li>
    `
    str += content
  })
  ticketList.innerHTML = str
}
init();


//
const filterGroup = document.querySelector('.js_filterGroup')
filterGroup.addEventListener('change', (e) => {
  console.log(e.target.value)
  if(e.target.value == '全部地區'){init()}else{
    const ticketList = document.querySelector('.js_ticketList')
    const newData = data.filter((item) => {
      return item.area == e.target.value
    })

    let str = ''
    newData.forEach((item) => {
      let content = `
        <li
          class="col-span-4 bg-white shadow-[0px_3px_6px_#00000029] rounded"
        >
          <div class="relative">
            <img
              class="block w-full h-[180px] object-cover rounded-t"
              src="${item.imgUrl}"
              alt=""
            />
            <div
              class="absolute px-5 py-2 bg-secondary text-white text-xl rounded-r top-0 -translate-y-1/4"
            >
            ${item.area}
            </div>
            <div
              class="absolute px-2 py-[5px] bg-primary text-white rounded-r bottom-0 translate-y-1/2"
            >
            ${item.rate}
            </div>
          </div>
          <div
            class="flex flex-col justify-between h-[calc(100%_-_180px)] p-5"
          >
            <div>
              <h3
                class="text-primary text-2xl font-medium pb-1 mb-4 border-b-2 border-b-primary"
              >
              ${item.name}
              </h3>
              <p class="mb-5">
              ${item.description}
              </p>
            </div>
            <div class="flex justify-between items-center">
              <p class="text-primary">
                <span class="material-symbols-outlined align-middle mr-[6px]">
                  error
                </span>
                剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
              </p>
              <p class="flex items-center text-primary">
                TWD
                <span
                  class="font-roboto text-[32px] ml-1"
                  id="ticketCard-price"
                >
                  $${item.price}
                </span>
              </p>
            </div>
          </div>
        </li>
      `
      str += content
    })
    ticketList.innerHTML = str
  }
})
