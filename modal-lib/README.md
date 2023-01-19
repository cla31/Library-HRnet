# MODALE CUSTOMIZABLE LIBRARY (Plugin in React)

**A simple React component easily customizable.** 

NPM package is available here : \
`https://www.npmjs.com/package/modal-lib-claire-marie`\


Github repository is available here : \
`https://github.com/cla31/Library-HRnet/tree/main/modal-lib`

---

## Installation procedure:

`npm install modal-lib-claire-marie`

---

### Use component:

Import this component in your project:

`import { Modal } from 'modal-lib-claire-marie'`

Example of using the component:

 ```
  <Modal
    messageModal={'Employee created!'}
    messageBouton={'Close'}
    functionButton={closeModal}
    image={iconeValidation}
    ContentModalStyle={{ color: '#001730', background: '#e2d4ca' }}
    buttonStyle={{ backgroundColor: '#001730' }}
    ContainerModalStyle={{ height: '90%' }}
    ImageModalStyle={{ width: '100px', height: '100px' }}
  />
```




