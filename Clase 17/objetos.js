const formularioLogin = {
    'username': {
        tipo: 'text',
        placeholder: 'ingresa un nombre',
        label: 'Ingresa el nombre:'
    },
    'email': {
        tipo: 'email',
        placeholder: 'Ingresa tu email',
        label: 'Ingresa el email:'
    },
    'password': {
        tipo: 'password',
        placeholder: 'ingresa la contraseña',
        label: 'Ingresa la contraseña:'
    }   
}

let formulario = ''

for( let propiedad in formularioLogin ){
    //Template string
    formulario = formulario + `
    <label class='label'>${formularioLogin[propiedad].label}</label>
    <input type="${formularioLogin[propiedad].tipo}" placeholder="${formularioLogin[propiedad].placeholder}">
    `
}