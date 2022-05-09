const inputUsuario = document.querySelector('#inputValue');

const botao = document.querySelector('#btnValue');

const qrCoder = document.querySelector('#qrCoderImage');

const wrapper = document.querySelector('.wrapper');

let valueDefault;

//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

// https://chart.googleapis.com/chart?cht=qr&chdl=150x150&chl=

 botao.addEventListener("click", () => {
  let qrcodeValue = inputUsuario.value.trim();
  if (!qrcodeValue || qrcodeValue === valueDefault) return;
  valueDefault = qrcodeValue;
  botao.innerText = "Gerando QR Code...";
  qrCoder.src= `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${valueDefault}`;
  qrCoder.addEventListener("load", () => {
    wrapper.classList.add('active');
    botao.innerText = "Gerar QRCode"
  });
}); 
