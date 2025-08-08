document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calc-form');
  const resultElem = document.getElementById('calc-result');

  const prices = {
    roll: 420,
    daynight: 650,
    horizontal: 300,
    rome: 325,
    vertel: 296,
    bambook: 325
  };

  // Функция округления вверх до ближайшего 0.1
  function roundUpToTenth(num) {
    return Math.ceil(num * 10) / 10;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Заменяем запятую на точку и парсим
    let width = parseFloat(form.width.value.replace(',', '.'));
    let height = parseFloat(form.height.value.replace(',', '.'));
    let type = form.type.value;

    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
      resultElem.textContent = 'Пожалуйста, введите корректные размеры.';
      resultElem.style.color = 'red';
      return;
    }

    let area = width * height;
    area = roundUpToTenth(area); // округляем вверх до 0.1

    let cost = area * prices[type];
    cost += 50; // добавляем 50 рублей к итоговой цене

    resultElem.textContent = `Стоимость заказа: ${cost.toFixed(2)} ₽`;
    resultElem.style.color = '#0078d4';
  });
});


const TELEGRAM_TOKEN = '7992681516:AAHg8ss24clSyw9FrC-B1Zof0h0jSvHyE9k';
const CHAT_ID = '1087002720';

const form = document.getElementById('calc-form');
const fabricOptions = document.getElementById('fabric-options');
const typeSelect = document.getElementById('type');
const result = document.getElementById('calc-result');
const orderBtn = document.getElementById('order-btn');
const orderForm = document.getElementById('order-form');
const overlay = document.getElementById('overlay');
const cancelOrderBtn = document.getElementById('cancel-order');
const orderMessage = document.getElementById('order-message');


const fabricData = {
   roll: [
    { id: 'r1', name: 'PEARL 1080', price: 420, img: 'img/fabrics/pearl 1080.jpg' },
    { id: 'r2', name: 'PEARL 1040', price: 420, img: 'img/fabrics/pearl 1040.jpg' },
    { id: 'r3', name: 'PEARL 1050', price: 420, img: 'img/fabrics/pearl 1050.jpg' },
    { id: 'r4', name: 'PEARL 1000', price: 420, img: 'img/fabrics/pearl 1000.jpg' },
    { id: 'r5', name: 'PEARL 1060', price: 420, img: 'img/fabrics/pearl 1060.jpg' },
    { id: 'r6', name: 'PEARL VARVARA', price: 420, img: 'img/fabrics/pearl varvara.jpg' },
    { id: 'r7', name: 'PEARL ALEXANDRA', price: 420, img: 'img/fabrics/pearl alexandra.jpg' },
    { id: 'r8', name: 'P 1240', price: 420, img: 'img/fabrics/p 1240.jpg' },
    { id: 'r9', name: 'P 1080', price: 420, img: 'img/fabrics/p 1080.jpg' },
    { id: 'r10', name: 'P 1065', price: 420, img: 'img/fabrics/p 1065.jpg' },
    { id: 'r11', name: 'P 1260', price: 420, img: 'img/fabrics/p 1260.jpg' },
    { id: 'r12', name: 'P 1080 BL', price: 420, img: 'img/fabrics/p 1080 bl.jpg' },
    { id: 'r13', name: 'P 1440', price: 420, img: 'img/fabrics/p 1440.jpg' },
    { id: 'r14', name: 'P 1090 BL', price: 420, img: 'img/fabrics/p 1090 bl.jpg' },
    { id: 'r15', name: 'VEIL', price: 420, img: 'img/fabrics/veil.jpg' }
  ],
  daynight: [
    { id: 'd1', name: 'BAMBOO R 14', price: 650, img: 'img/fabrics/bamboo r 14.jpg' },
    { id: 'd2', name: 'BAMBOO R 7', price: 650, img: 'img/fabrics/bamboo r 7.jpg' },
    { id: 'd3', name: 'BAMBOO R 20', price: 650, img: 'img/fabrics/bamboo r 20.jpg' },
    { id: 'd4', name: 'SAMARA V 02', price: 650, img: 'img/fabrics/samara v 02.jpg' },
    { id: 'd5', name: 'SAMARA V 04', price: 650, img: 'img/fabrics/samara v 04.jpg' },
    { id: 'd6', name: 'BURSA V 03', price: 650, img: 'img/fabrics/bursa v 03.jpg' },
    { id: 'd7', name: 'BURSA V 04', price: 650, img: 'img/fabrics/bursa v 04.jpg' },
    { id: 'd8', name: 'LEKEUR 100', price: 650, img: 'img/fabrics/lekeur 100.jpg' },
    { id: 'd9', name: 'LEKEUR 01', price: 650, img: 'img/fabrics/lekeur 01.jpg' },
    { id: 'd10', name: 'LEKEUR 03', price: 650, img: 'img/fabrics/lekeur 03.jpg' },
    { id: 'd11', name: 'LEKEUR 114', price: 650, img: 'img/fabrics/lekeur 114.jpg' },
    { id: 'd12', name: 'LEKEUR 27', price: 650, img: 'img/fabrics/lekeur 27.jpg' },
    { id: 'd13', name: 'LEKEUR 22', price: 650, img: 'img/fabrics/lekeur 22.jpg' },
    { id: 'd14', name: 'BAMBOO R GRAY', price: 650, img: 'img/fabrics/bamboo r gray.jpg' },
    { id: 'd15', name: 'BAMBOO R BROWN', price: 650, img: 'img/fabrics/bamboo r brown.jpg' },
    { id: 'd16', name: 'BHN 96 V 02', price: 650, img: 'img/fabrics/bhn 96 v 02.jpg' },
    { id: 'd17', name: 'VLASTA 02', price: 650, img: 'img/fabrics/vlasta 02.jpg'},
    { id: 'd18', name: 'VLASTA 01', price: 650, img: 'img/fabrics/vlasta 01.jpg' },
    { id: 'd19', name: 'VLASTA 03', price: 650, img: 'img/fabrics/vlasta 03.jpg' },
    { id: 'd20', name: 'BHN 96 V 00', price: 650, img: 'img/fabrics/bhn 96 v00.jpg' }
  ],
 horizontal: [
      { id: 'h1', name: 'БЕЛЫЙ', price: 300, img: 'img/fabrics/whitecolor.jpg' },
      { id: 'h2', name: 'СЕРЫЙ', price: 300, img: 'img/fabrics/greycolor.png' },
      { id: 'h3', name: 'КРАСНЫЙ', price: 300, img: 'img/fabrics/redcolor.jpg' },
      { id: 'h4', name: 'ЧЁРНЫЙ', price: 300, img: 'img/fabrics/blackcolor.jpg' },
      { id: 'h5', name: 'КОРИЧНЕВЫЙ', price: 300, img: 'img/fabrics/browncolor.png' },
      { id: 'h6', name: 'ЖЁЛТЫЙ', price: 300, img: 'img/fabrics/yellowcolor.png' }
    ],
  rome: [
    { id: 'r1', name: 'Римские 1', price: 325, img: 'img/fabrics/rome1.jpg' },
    { id: 'r2', name: 'Римские 2', price: 325, img: 'img/fabrics/rome2.jpg' }
  ],
  vertel: [
    { id: 'v1', name: 'Вертикальные 1', price: 296, img: 'img/fabrics/vertical1.jpg' },
    { id: 'v2', name: 'Вертикальные 2', price: 296, img: 'img/fabrics/vertical2.jpg' }
  ],
  bambook: [
    { id: 'b1', name: 'Бамбуковые', price: 325, img: 'img/fabrics/bambook.jpg' }
  ]
};


let calcResult = {};

typeSelect.addEventListener('change', updateFabrics);

function updateFabrics() {
  const selectedType = typeSelect.value;
  fabricOptions.innerHTML = '';

  if (!fabricData[selectedType]) return;

  fabricData[selectedType].forEach(fabric => {
    const label = document.createElement('label');
    label.className = 'fabric-option';
    label.innerHTML = `
      <input type="radio" name="fabric" value="${fabric.id}" required />
      <span class="fabric-circle">
        <img src="${fabric.img}" alt="${fabric.name}" title="${fabric.name}" />
      </span>
      <span class="fabric-name">${fabric.name}</span>
    `;
    fabricOptions.appendChild(label);
  });

  fabricOptions.querySelectorAll('.fabric-option').forEach(option => {
    option.addEventListener('click', () => {
      fabricOptions.querySelectorAll('.fabric-option').forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
      option.querySelector('input').checked = true;
    });
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const width = parseFloat(form.width.value.replace(',', '.'));
  const height = parseFloat(form.height.value.replace(',', '.'));
  const type = form.type.value;
  const fabricId = fabricOptions.querySelector('input[name="fabric"]:checked')?.value;

  if (isNaN(width) || isNaN(height) || !type || !fabricId) {
    result.textContent = '❌ Пожалуйста, заполните все поля.';
    orderBtn.style.display = 'none';
    return;
  }

  const fabric = fabricData[type].find(f => f.id === fabricId);
  const area = Math.ceil(width * height * 10) / 10;
  const total = Math.round(area * fabric.price);

  calcResult = {
    width,
    height,
    type,
    fabric,
    area,
    total
  };

  result.innerHTML = `
    <strong>Тип:</strong> ${typeSelect.options[typeSelect.selectedIndex].text}<br/>
    <strong>Ткань:</strong> ${fabric.name}<br/>
    <strong>Ширина:</strong> ${width} м<br/>
    <strong>Высота:</strong> ${height} м<br/>
    <strong>Итог:</strong> <span style="color:#2d6cdf">${total} ₽</span>
  `;

  orderBtn.style.display = 'inline-block';
});

orderBtn.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  orderForm.classList.remove('hidden');
  orderMessage.style.display = 'none';
});

cancelOrderBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
  orderForm.classList.add('hidden');
  orderMessage.style.display = 'none';
});

orderForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const message = `
📦 Новый заказ!
👤 ФИО: ${orderForm.fullname.value}
📞 Телефон: ${orderForm.phone.value}
🏠 Адрес: ${orderForm.address.value}
📐 Размер: ${calcResult.width} x ${calcResult.height} м
🪟 Тип: ${typeSelect.options[typeSelect.selectedIndex].text}
🧵 Ткань: ${calcResult.fabric.name}
💰 Сумма: ${calcResult.total} ₽
  `;

  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    orderMessage.textContent = '✅ Заказ отправлен!';
    orderMessage.style.display = 'block';
    setTimeout(() => {
      overlay.classList.add('hidden');
      orderForm.classList.add('hidden');
      form.reset();
      result.textContent = '';
      orderBtn.style.display = 'none';
      fabricOptions.innerHTML = '';
      orderMessage.style.display = 'none';
    }, 2000);
  } catch (error) {
    orderMessage.textContent = '❌ Ошибка отправки заказа.';
    orderMessage.style.display = 'block';
  }
});