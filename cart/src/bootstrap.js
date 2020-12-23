import faker from 'faker'

const mount = (el) => {
  let products = '';

const cartText = `<div>You have ${faker.random.number()} items</div>`

  el.innerHTML = cartText
}

if (process.env.NODE_ENV === 'development'){
  const el = document.querySelector('#dev-cart')

  // expected to be local development
  if(el){
    mount(el)
  }
}

export { mount }