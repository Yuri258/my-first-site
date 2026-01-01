import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div style="max-width: 600px; margin: 60px auto; font-family: sans-serif;">
    <h1>My First AI App</h1>

    <textarea
      id="prompt"
      rows="4"
      placeholder="在这里输入你的问题..."
      style="width: 100%; padding: 10px; font-size: 16px;"
    ></textarea>

    <button
      id="sendBtn"
      style="margin-top: 12px; padding: 10px 16px; font-size: 16px;"
    >
      发送
    </button>

    <div
      id="result"
      style="margin-top: 20px; padding: 12px; background: #f5f5f5;"
    >
      这里将显示结果
    </div>
  </div>
`

const btn = document.querySelector('#sendBtn')
const result = document.querySelector('#result')

btn.addEventListener('click', () => {
  const prompt = document.querySelector('#prompt').value

  if (!prompt) {
    result.innerText = '请先输入内容'
    return
  }

  result.innerText = '思考中...'

  // 模拟 AI 返回
  setTimeout(() => {
    result.innerText = `你输入的是：${prompt}`
  }, 1000)
})
