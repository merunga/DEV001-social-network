// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { formularioregistro } from '../lib/index.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'divPadre';
  const divBienvenida = document.createElement('div');
  HomeDiv.appendChild(divBienvenida);
  const mensajeBienvenida = document.createElement('h2');
  mensajeBienvenida.textContent = 'Welcome to lymusic';
  divBienvenida.appendChild(mensajeBienvenida);
  divBienvenida.className = 'mensajeBienvenida';
  const form = document.createElement('form');
  const divForm = document.createElement('div');
  HomeDiv.appendChild(form);
  form.appendChild(divForm);
  const tituloForm = document.createElement('h1');
  tituloForm.textContent = 'Registration';
  divForm.appendChild(tituloForm);
  divForm.className = 'formularioRegistro';
  const grupo1 = document.createElement('div');
  const grupo2 = document.createElement('div');
  const email = document.createElement('input');
  email.type = 'email';
  email.placeholder = 'Email';
  const labelEmail = document.createElement('label');
  labelEmail.textContent = 'Email';
  const pass = document.createElement('input');
  pass.type = 'password';
  pass.placeholder = 'Password';
  const labelPass = document.createElement('label');
  labelPass.textContent = 'Password';
  const buttonSubmit = document.createElement('button');
  buttonSubmit.textContent = 'sign up';
  grupo1.appendChild(labelEmail);
  grupo2.appendChild(labelPass);
  grupo1.appendChild(email);
  grupo2.appendChild(pass);
  divForm.appendChild(grupo1);
  divForm.appendChild(grupo2);
  divForm.appendChild(buttonSubmit);
  grupo2.className = 'grupos';
  grupo1.className = 'grupos';
  buttonSubmit.type = 'submit';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formularioregistro(email.value, pass.value);
  });
  const divBoton = document.createElement('div');
  divBoton.className = 'botonRegreso';
  HomeDiv.appendChild(divBoton);
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Back to home';
  divBoton.appendChild(buttonHome);
  buttonHome.addEventListener('click', () => onNavigate('/'));

  return HomeDiv;
};
